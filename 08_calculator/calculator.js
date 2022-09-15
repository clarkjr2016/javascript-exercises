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


const multiply = function(a) {
 let result = a.reduce((a,b) => {return a * b});
 return result;

};

const power = function(n,p) {
  let number = n;
  let powerReturn = [];
	for (i = 0; i < p; i++) {
   powerReturn.push(n);
  }
return powerReturn.reduce((a,b) => {return a * b})

};

const factorial = function(f) {
  let array = [];
  let value;

  if (f === 0) {
    value = 1;
  } else {
  for (i = 1; i <= f; i++) {
    array.push(i);
  value = array.reduce((a,b) => {return a * b})
  }

  } return value;
	
};

factorial(3);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
