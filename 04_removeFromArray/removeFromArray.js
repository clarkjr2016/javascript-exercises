const removeFromArray = function(a, arg) {
const array = a; // creating a variable to reference the array arugument.
/*let argument = arg; // creating a variable to reference the other argument. */
/* let index = array.indexOf(argument); creating a varaible to represent the index of the other argument within the array. */
let args = Array.from(arguments); // creating an array variable that contains all of the arguments together in an array.

args.forEach(e => {
    if (Array.isArray(e)) {
        return true; // this skips the iteration if the argument value is an array
    } else if (array.includes(e) == false) {
        return true; // this skips the itration if the value of the argument isn't included in the array argument
    }else {
        let index = array.indexOf(e); // this establishes the index of the argument within the given array
       let modified = array.splice(index,1); // this removes the element specified by it's index
      // console.log(modified);
    } 
});
return array;
}
removeFromArray([1,2,3,4],7,"tacos");

// Do not edit below this line
module.exports = removeFromArray;
