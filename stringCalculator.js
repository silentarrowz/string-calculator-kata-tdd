function stringCalculator(str){
    const numArr = str.split(',');
    return Number(numArr[0])+Number(numArr[1]);
}

module.exports = stringCalculator;