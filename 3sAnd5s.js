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
//

var sum;
var number;

for(number = 0; number < 1000; number ++) {
  if ((number % 3 === 0) || (number % 5 === 0))
    console.log(number);
  }
