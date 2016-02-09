//"Write a program that prints the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”."

//pseudocode:
// create a variable to intialize
// create a variable to hold sum
// create a variable for Fizz
// create a variable for Buzz
// create a variable for FizzBuzz
// use while loop to continue running until 100
// use if else statement to find numbers
// if number divisible by three but not 5 (no duplicates) then assign fizz and add to sum
// if number divisible by five then assign buzz and add to sum
// if number is divisible by three && five then assign fizzbuzz and add to sum

var number = 0;

for (number = 0; number < 100; number ++){

 if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log("fizzBuzz");
 }
    else if (number % 3 === 0){
        console.log("fizz");
  }
   else if (number % 5 === 0) {
        console.log("buzz");
  }
  else {
        console.log(number);
  }
}
