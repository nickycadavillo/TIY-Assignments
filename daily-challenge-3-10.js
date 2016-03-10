//create a function called mixup.  It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.  You can assume that the strings are at least 2 characters long.  For example:

// muxUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner': 'dig donner')

//this works but only takes two parameters, so only two words
function mixUp(first, second){
    var firstCharZero = first.charAt(0);
    var secondCharZero = second.charAt(0);
    var firstSlice = first.slice(1);
    var secondSlice = second.slice(1);

    var wordOne = secondCharZero + firstSlice;
    var wordTwo = firstCharZero + secondSlice;

    return wordOne + " " +  wordTwo;
}

console.log(mixUp("hello", "world"))
console.log(mixUp("whats", "up"))

//lets see if we can make an array and then do more than two
var words = [];

function mixUp(words){
    for (var i = 0; i < words.length; i++){

    }
}
