const reverseString = function(s) {

    const inputArray = s.split("");
    inputArray.reverse();
   const reverseOutput = inputArray.join("");
/* trying to figure out how to store the popped elements of 
inputArray into an array called reverseString
*/
return reverseOutput;


};

reverseString("Hello my name is Eugene")

// Do not edit below this line
module.exports = reverseString;
