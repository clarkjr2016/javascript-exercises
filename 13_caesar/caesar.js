const caesar = function(s,n) {

let stringArray = s.split("");
let unicodeArray = stringArray.map(x => x.charCodeAt(0));
let shiftedArray = unicodeArray.map(x => x + n);
let converted = shiftedArray.map(x => String.fromCharCode(x))
let complete = converted.join("")
return complete;
};


caesar("Abc",1)
// Do not edit below this line
module.exports = caesar;
