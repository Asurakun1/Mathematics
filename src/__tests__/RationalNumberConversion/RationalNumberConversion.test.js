import { RationalNumberConversion } from "../../Mathematical Components/Algebra/Chapter 1/RationalNumbers";
describe(`it will convert numbers into rational numbers`, () => {
    it('will turn 7 into 7/1', () => {
        const number = 7;

        expect(RationalNumberConversion(number)).toBe(`7/1`);
    });

    test(`0 => 0/1`, () => {
        const number = 0;
        
        expect(RationalNumberConversion(number)).toBe(`0/1`);
    });

    test(`-8 => -(8/1)`, () => {
        const number = -8;
        
        expect(RationalNumberConversion(number)).toBe(`-(8/1)`);
    });

    test(`11 => 11/1`, () => {
        const number = 11;
        
        expect(RationalNumberConversion(number)).toBe(`11/1`);
    });

    test(`3 => 3/1`, () => {
        const number = 3;

        expect(RationalNumberConversion(number)).toBe(`3/1`);
    })

    test(`-4 => -(4/1)`, () => {
        const number = -4;
        
        expect(RationalNumberConversion(number)).toBe(`-(4/1)`);
    });
});