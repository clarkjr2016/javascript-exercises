const palindromes = function (word) {
    let reverse;
    let array = word.split("");
    let reversal = array.reverse();
    for (const w of reversal) {
        if (/[a-zA-Z]/.test(w) === false) {
           const index = reversal.indexOf(w);
          let nonWord = reversal.splice(index,1)
          
          reversal.push(nonWord);
        } else {
            continue;
        }
    }
    reverse = reversal.join("")
    let finalValue;
    if (reverse === word) {
        finalValue = true;
    } else {
        finalValue = false;
    }

    return finalValue;
};

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
