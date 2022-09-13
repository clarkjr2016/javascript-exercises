const ftoc = function(temperature) {
let conversion = (temperature - 32) * .555556
let rounded = Math.round(conversion * 10) / 10
return rounded;
};

const ctof = function(temperature) {
  let conversion = temperature * 1.8 + 32;
  let rounded = Math.round(conversion * 10) / 10
  return rounded;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
