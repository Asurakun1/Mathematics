import { convertRationalNumbersToDecimal } from "../../Mathematical Components/Algebra/Chapter 1/RationalNumbers";

describe(`rational numbers will be converted into decimals`, () => {
    test(`-(5/7) => -0.7142857142857143`, () => {
        const rational = `-(5/7)`;

        expect(convertRationalNumbersToDecimal(rational)).toBe(-0.7142857142857143);
    });

    test(`15/5 => 3.0`, () => {
        const rational = `15/5`;

        expect(convertRationalNumbersToDecimal(rational)).toBe(3.0);
    });

    test(`13/25 => 0.52`, () => {
        const rational = `13/25`;

        expect(convertRationalNumbersToDecimal(rational)).toBe(0.52);
    });

    test(`68/17 => 4`, () => {
        const rational = `68/17`;
        
        expect(convertRationalNumbersToDecimal(rational)).toBe(4);
    });
});