/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/
 
 var firstNames = ["Primrose", "Katnis", "Gale", "Peta"];
 var numbers= [1, 2, 3, 4]
 

// .sort() reorders items in an array using a function (called a compare function)
firstNames.sort(); 
=> [ 'Gale', 'Katnis', 'Peta', 'Primrose' ]

// .concat() creates new array containing this array and other arrays/values

var nameNum = firstNames.concat(numbers);
=> [ 'Primrose', 'Katnis', 'Gale', 'Peta', 1, 2, 3, 4 ]

// .indexOf() finds the index of that element in the array
firstNames.indexOf("Katnis");
=> 1

// .split() splits a string object into an array of strings by separating the string into substrings


// .join()


// .pop() removes last element from array (and returns the element)
firstNames.pop();
=> "Peta"

// .push() adds one or more items to end of array and returns number of items in it
firstNames.push();
=> 4

// .slice() 

// .splice() 

// .shift() removes first element from array (and returns the element)
firstNames.shift();
=> "Primrose"

// .unshift() adds one or more items to start of array and returns new length of it
firstNames.unshift();
=> 4

// .filter() creates new array with elements that pass a test specified by a function


// .map() calls a function on each element in array and creates new array with results
