
const RationalNumberConversion = (num) => {

    return num >= 0 ? `${num}/${1}` : `-(${num * -1}/${1})`;
}

const convertRationalNumbersToDecimal = (rational_number) => {
    const regex = /[0-9]+/g;

    const numbers = rational_number.match(regex);

    return rational_number.includes('-') ? (numbers[0]/numbers[1]) * -1 : (numbers[0] / numbers[1]);
}

const rationalOrIrrational = (number) => {
    return Number.isInteger(number) || Number.isInteger(1 / number) ? `Rational` : `Irrational`;
}

export {RationalNumberConversion, convertRationalNumbersToDecimal, rationalOrIrrational }