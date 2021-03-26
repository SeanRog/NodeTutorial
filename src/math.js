const calculateTip = (total, tipPercent) => {
    const tip = total * tipPercent;
    return total + tip;
}

const sum = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const aSum = (firstNum, secondNum) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (firstNum < 0 || secondNum < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(firstNum + secondNum)
        }, 2000)
    })
}

// this test function does the same as above
test('Should add two numbers async/await', async () => {
    const sum = await aSum(10, 22);
    expect(sum).toBe(32);
})

module.exports = {
    calculateTip,
    sum,
    aSum
}
