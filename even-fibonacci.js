// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// use a while loop?
// while (condition) {
//   statement
// }


// create a variable for the first number
var first = 0
// create a variable for the second number
var second = 1
//create a variable that adds the first number and the second number
var third = first + second;


while (first < 4000000) { //condition will run if the first number < 4 million
// console.log(first + second);

  third = first + second;
  first = second;
  second = third;

  if  (third % 2 === 0) { // if it is even then print
    console.log(third);
  }



} // closes while loop
