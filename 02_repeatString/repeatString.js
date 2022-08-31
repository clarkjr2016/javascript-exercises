const repeatString = function(s,n) {
let string = "";

if (n < 0) {
string = "ERROR";

} else {
for (let i = n; i > 0; i--) {
    string += s.slice();
        }
} 
return string


};

repeatString("hello", 0);


// Do not edit below this line
module.exports = repeatString;
