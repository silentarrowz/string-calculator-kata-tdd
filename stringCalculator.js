function stringCalculator(str){
    const numArr = str.split(/[,\n]/ig); 
    let total = 0;  
    numArr.forEach((item)=>{
        total = total+Number(item)
    })
    return total;
}

module.exports = stringCalculator;