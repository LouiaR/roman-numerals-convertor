// Check if input send by user is integer
const isNumber = numb => ( 
    typeof numb === 'number' && 
    (numb > 0 && 
    numb < 4000
));

// Check if input send by user is roman number
const isRoman = roman => {
    let isRoman = 0
    roman.split('').map(str => {
        if (['D','I', 'V', 'X', 'L', 'C', 'M'].indexOf(str) > -1) {
            isRoman += 1
        }
    })
    return typeof roman === 'string' &&
        roman.split('').length === isRoman &&
        roman.length > 0;
};

module.exports = {
    isNumber,
    isRoman
};