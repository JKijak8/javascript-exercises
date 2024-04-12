const sumAll = function(num1, num2) {
    let higher, lower;

    if(typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    
    if(num1 > num2) {
        higher = num1;
        lower = num2;
    }
    else if(num1 < num2) {
        higher = num2;
        lower = num1
    }
    else {
        return num1
    }

    let sum = lower;
    for(let i = lower + 1; i <= higher; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
