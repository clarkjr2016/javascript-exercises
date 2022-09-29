const caesar = function(s,n) {

let stringArray = s.split("");
let unicodeArray = stringArray.map(x => x.charCodeAt(0));
let shiftedArray = unicodeArray.map(x => {if (/^[a-z]/i.test(String.fromCharCode(x))) {
    return x + n;
} else {
    return x;
}
});
let converted = shiftedArray.map(x => String.fromCharCode(x))
let complete = converted.join("")
return complete;
};


console.log(caesar("Hello, World!",5))
// Do not edit below this line
module.exports = caesar;
