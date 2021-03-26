const { calculateTip, sum, aSum } = require('../src/math')

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

test('2 + 1 should be 3', () => {
    const expectedResult = 3;
    const actualResult = sum(2, 1);
    expect(actualResult).toBe(expectedResult);
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    aSum(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})
