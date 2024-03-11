
function checkForCustom(str){
    return (/^\/\//).test(str);
}

function getCustomDelimiter(str){
    
    let positionN = str.indexOf('\n');
    let delimitLen = positionN-2;
    let t = str.substring(2,2+delimitLen);
    console.log('t : ', t);
    return str.substring(2,2+delimitLen)
}

function stripLine(str){
    let newString = str.substring(str.indexOf('\n')+1);
    console.log('new string : ', newString);
    return newString;
}
function stringCalculator(str){
    let delimiters = [',','\n'];
    if(checkForCustom(str)){
        let newDelimiter = getCustomDelimiter(str);
        delimiters.push(newDelimiter);
        str = stripLine(str);
    }
    console.log('delimiters : ', delimiters)
    const numArr = str.split(new RegExp('[' + delimiters.join('|') + ']', 'g')); 
    console.log('num arr : ', numArr)
    let total = 0;  
    const negatives = []
    numArr.forEach((item)=>{
        if(Number(item)<0){
            negatives.push(item)
        }
        total = total+Number(item)
    });
    if(negatives.length>0){
        let message = "negative numbers not allowed"+' '+ negatives.join(',');
        throw new Error(message)
    }
    console.log('total : ',total)
    return total;
}

module.exports = stringCalculator;