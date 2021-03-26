const calculateTip = (total, tipPercent) => {
    const tip = total * tipPercent;
    return total + tip;
}

const sum = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

module.exports = {
    calculateTip,
    sum
}
