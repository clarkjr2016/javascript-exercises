const leapYears = function(y) {
let year = y;
let result;

if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)) {
    result = true;
}else {
    result = false;
}


return result;
};

leapYears(700);
// Do not edit below this line
module.exports = leapYears;
