import { numberOfSteps } from './NumberOfSteps';

describe(' Number of Steps to Reduce a Number to Zero', () => {
    // given when then 
    // arrang act assert 

    test('should return zero value', () => {
        expect(numberOfSteps(14)).toBe(6);
        expect(numberOfSteps(8)).toBe(4);
        expect(numberOfSteps(123)).toBe(12);
    });


});