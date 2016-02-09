/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

 var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
 var numbers = [1, 2, 3, 4];


// .sort() reorders items in an array using a function (called a compare function)
firstNames.sort();
=> [ 'Gale', 'Katnis', 'Peta', 'Primrose' ]

// .concat() creates new array containing this array and other arrays/values
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
var numbers = [1, 2, 3, 4]
var nameNum = firstNames.concat(numbers);
=> [ 'Primrose', 'Katnis', 'Gale', 'Peta', 1, 2, 3, 4 ]

// .indexOf() finds the index of that element in the array
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
firstNames.indexOf("Katnis");
=> 1

// .split() splits a string object into an array of strings by separating the string into substrings
var mockingjay = "I volunteer as tribute";
mockingjay.split(' ');
=> [ 'I', 'volunteer', 'as', 'tribute' ]

// .join()
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
var together = firstNames.join("+");
console.log(together);
=> Primrose+Katnis+Gale+Peta

// .pop() removes last element from array (and returns the element)
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
firstNames.pop();
console.log(firstNames.pop());
=> "Peta"

// .push() adds one or more items to end of array and returns number of items in it
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
firstNames.push("Rue"); // adds Rue to the array
=> 5 // returns the new number of items

//another way of doing it:

// .slice() returns a shallow copy of a portion of an array into a new array object
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
var guys = firstNames.slice(2,4); // extracts index 2 and 3
console.log (firstNames.slice(2,4));
=> [ 'Gale', 'Peta' ]

// .splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
firstNames.splice(0,3, "Rue","Haymitch");
console.log(firstNames);
=> [ 'Rue', 'Haymitch', 'Peta' ]

// .shift() removes first element from array (and returns the element)
firstNames.shift();
console.log();
=> "Primrose"


// .unshift() adds one or more items to start of array and returns new length of it
firstNames.unshift();
console.log();
=> 4


// .filter() creates new array with elements that pass a test specified by a function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// .map() calls a function on each element in array and creates new array with results
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
