const palindromes = function (word) {
    let reverse;
    let array = word.split("");
    for (const w of array) {
        if (/[a-zA-Z]/.test(w) === false) {
           const index = array.indexOf(w);
          let nonWord = array.splice(index,1)
        }
        else {
            continue;
        }
    }
   let newArray = array.map(x => x.toLowerCase());
let noPunctuation = newArray.join("");
    let reversal = newArray.reverse();
    
    reverse = reversal.join("")
    let finalValue;
    if (reverse === noPunctuation) {
        finalValue = true;
    } else {
        finalValue = false;
    }

    return finalValue;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
