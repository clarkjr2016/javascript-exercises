const fibonacci = function(n) {
let array = [1,1];
for (i = 2; array.length < n; i++) {
     if (n == 1) {
        return array;
    }
    else if (n > 1) {
        let sum = array[i - 1] + array[i - 2];
        array.push(sum);
        return array;
    } else if (n < 0 || Math.sign(n) == -1) {
        array = ["OOPS"];
        return array;
    }
    
}
return array.pop();
};

fibonacci(-1)

// Do not edit below this line
module.exports = fibonacci;
