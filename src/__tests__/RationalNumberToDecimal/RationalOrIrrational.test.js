import { rationalOrIrrational } from "../../Mathematical Components/Algebra/Chapter 1/RationalNumbers";


describe('a fraction or a number will be given and will decide whether or not the result is rational or irrational', () => {
    test('7/77 => rational', () => {
        const number = 7/77;

        expect(rationalOrIrrational(number)).toBe('Rational');
    })

    test('sqrt 81 => rational', () => {
        const number = Math.sqrt(81);
        console.log(Math.pow((3 * 2 ), 2) - 4 * (6 + 2));
        expect(rationalOrIrrational(number)).toBe('Rational');
    });
});