const helper = require('../library/helpers');
const isNumber = require('../validation');

const outputRoman = async (req, res, next) => {
    const {
        integer
    } = req.body;

    if (!isNumber.isNumber(Number(integer))) {
        res.status(400).json({
            success: false,
            message: 'Please choose a number between 1 and 3999',
            integer
        })
    }

    try {
        const roman = await helper.translateToRoman(Number(integer));
        res.status(201).json({
            success: true,
            integer,
            roman,
        });
    } catch (err) {
        res.status(502).json({
            success: false,
            message: 'An error has occured ',
            err
        });
    }
}

module.exports = {
    outputRoman
};