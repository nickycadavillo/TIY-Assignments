// first challenge
// I have a syntax error and trouble setting it up.
// The if statement console.logs but the else does not

var i;

for (var i = 0; i < 20; i ++) {
    if (i % 2 === 0)
        console.log(i + " is even");
    } else { //(i % 2 !=== 0)
        console.log(i + " is odd");
    };

// second challenge
// Instructions: Create function called verbing that should take a single
// argument, a string.  If its length is at least 3, it should add 'ing' to its
//end, unless it already ends in 'ing', in which case it should add 'ly' instead.
//  If the string length is less than 3, it should leave it unchanged.

// verbing('swim'); 'swimming'
// verbing('swimming'): 'swimmingly'
// verbing('go'): 'go'


// function verbing(develop){
//     if (length.verbing >= 3)
//         console.log(verbing + "ing");
// }

var verbing = function(develop){
  if (length.verbing >= 3)
      console.log(verbing + "ing");
}

//return verbing;
