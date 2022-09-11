const sumAll = function(n1,n2) {
    let number1 = n1; // this creates a variable for the first argument
    let number2 = n2; // this creates a variable for the second argument
    let range = []; // this array is being created so that I have a place to store all of the individual values between the two arguments being entered.
    let sum; // creating a value where I can store the sum.

    if (number1 < 0 || number2 < 0) {
        sum = "ERROR";// this loop iterates between the range of the two arguments and stores them in the range array.
    }else if (typeof number1 !== "number" || typeof number2 !== "number") {
        sum = "ERROR";
    }
    else if (number1 > number2) {
        for (let i = number2; i <= number1; i++) {
        range.push(i);      
}       sum = range.reduce((a,b) => {return a + b});
} else if (number2 > number1) {
    for (let i = number1; i <= number2; i++) {
        range.push(i);}
        sum = range.reduce((a,b) => {return a + b})
}

  return sum;


    

};

sumAll(5,"hELLO");

// Do not edit below this line
module.exports = sumAll;
