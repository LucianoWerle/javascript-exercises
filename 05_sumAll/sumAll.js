const sumAll = function(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"; 
    }

    if (arguments.length !== 2){
        return "ERROR";
    }

    soma = 0;
    let highNumber, lowNumber;

    if (num2 > num1){
        highNumber = num2
        lowNumber = num1;
    } else {
        highNumber = num1 
        lowNumber = num2;
    }

    for (let i = lowNumber; i <= highNumber; i++){
        soma += i;
    }
    return soma;
};

//Do not edit below this line
module.exports = sumAll;