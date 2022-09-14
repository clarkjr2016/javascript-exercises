const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
if (a.length === 0) {
  sum1 = 0;
} else {
 sum1 = a.reduce((a,b) => {return a + b})
}
   return sum1;
  };


const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

sum([2,4]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
