// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// pseudocode: for loop?
// var something not i;
// for (initiate at 0; continue until 1000; add one each time)
//    if something not i divides by 3 has remainder of 0 then continue
//    OR
//    if something not i divides by 5 has remainder of 0 then continue
//    else do not continue
//    how to find sum of all ????? another loop? no, add to current loop.


var sum = 0;
var number; // initializing starting point

for(number = 0; number < 1000; number ++) {
  //  console.log(number); returns all numbers under 100
  if ((number % 3 === 0) || (number % 5 === 0))
    sum += number;
  //  console.log(number); returns all numbers divisible by 3 and 5
  }
console.log(sum);


// trial and errors:
//
// for(sum = 0; sum <1000; sum ++) {
//
//   sum =+ number;
//
//   number = number;
//   sum = number;
// }
//
// }

// while ( < 1000){
//   sum += number;
//
// }
//   sum = number + sum;
//
//   console.log(sum);
