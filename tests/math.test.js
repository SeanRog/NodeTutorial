const { calculateTip, sum } = require('../src/math')

// https://jestjs.io/docs/expect

test('10 for total, .3 for tip', () => {
    const expectedResult = 13;
    const actualResult = calculateTip(10, .3)
    expect(actualResult).toBe(expectedResult);
})

test('10 for total, .1 for tip', () => {
    const expectedResult = 11;
    const actualResult = calculateTip(10, .1);
    expect(actualResult).toBe(expectedResult);
})

test('add 2 and 1', () => {
    const expectedResult = 3;
    const actualResult = sum(2, 1);
    expect(actualResult).toBe(expectedResult);
})
