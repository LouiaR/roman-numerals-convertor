const helper = require('../library/helpers');
const isRoman = require('../validation');

const outputInteger = async (req, res, next) => {
    const {
        roman
    } = req.body;

    if (!isRoman.isRoman(roman)) {
        res.status(400).json({
            success: false,
            message: 'Please use one of the following number D, I, V, X, L, C, M to make roman number',
            roman
        })
    }

    try {
        const integer = await helper.translateToIntger(roman);
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
    outputInteger
};