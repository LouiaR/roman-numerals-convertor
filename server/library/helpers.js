// Create an object with key as roman and value as numerical
const digits = {};
const digitHandler = (numerical, roman) => {
    return digits[roman] = numerical;
}

digitHandler(1000, 'M');
digitHandler(900, 'CM');
digitHandler(500, 'D');
digitHandler(400, 'CD');
digitHandler(100, 'C');
digitHandler(90, 'XC');
digitHandler(50, 'L');
digitHandler(40, 'XL');
digitHandler(10, 'X');
digitHandler(9, 'IX');
digitHandler(5, 'V');
digitHandler(4, 'IV');
digitHandler(1, 'I');

// Convert arabic number to roman numeral
const translateToRoman = numb => {
    let roman = '';
    for (let key in digits) {
        while (numb >= digits[key]) {
            roman += key;
            numb -= digits[key]
        }
    }
    return roman;
};

// Convert roman numeral to arabic number
const translateToIntger = roman => {
    let numerical = 0;
    const romanArr = roman.split('');
    for (let i = 0; i < romanArr.length; i++) {
        let current = digits[romanArr[i]];
        let next = digits[romanArr[i + 1]];
        if (current < next) {
            numerical += next - current;
            i++
        } else {
            numerical += current
        }
}
return numerical
}

module.exports = {
    translateToRoman,
    translateToIntger
};