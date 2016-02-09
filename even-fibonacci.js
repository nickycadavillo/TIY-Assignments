// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// use a for loop?
// for (var i = 0; i < 4000000
// while (condition) {
//   statement
// }

// create variable to hold sum
var sum = 0;
// create a variable for the first number
var first = 0
// create a variable for the second number
var second = 1
//create a variable that adds the first number and the second number
var third = first + second


while (third < 4000000) { //condition will run third < 4 million
// console.log(first + second);

  if  (third % 2 === 0) { // if it is even
// console.log(third);

    sum += third; // same as sum = sum + third
  } // closes if statement

    third = first + second;
    first = second;
    second = third;

} // closes while loop

  console.log(sum);
