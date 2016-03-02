//write a for loop that will iterate from 0 to 21044
//for each iteration, it will check if the current number is even or odd,
// and report that to the screen (example: '2 is even')

var i;

function evenOdd (){
for (var i = 0; i <= 21044; i++) {
    if (i % 2 === 0 ) {
        console.log(i + " is even");
   } else
        console.log(i + " is odd");
}

}

console.log(evenOdd(i))
