// Write a function named pluralize that takes 2 arguments, a noun and a number
// returns the number and pluralized form, like "5 cats" and "1 dog"
// Call that function for a few different scores and log the result to make sure it works

//if number > 1 then append s to end of noun
// if number === 1 then return noun

function pluralize(number, noun){
   if (number > 2 )
   return number + noun
else [  (number > 1 )
   return number + noun + "s"
   ]
}

// console.log(5, "dog")
// console.log(10, "cat")
// console.log(1, "pet")
