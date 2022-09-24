const fibonacci = function(n) {
let array = [1,1];
if (n < 0) {
    array = ["OOPS"];
}

for (i = 2; array.length < n; i++) {
     if (n == 1) {
        return array;
    }
    else if (n > 1) {
        let sum = array[i - 1] + array[i - 2];
        array.push(sum);
        
    } 
    
}

return array.pop();
};

fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;
