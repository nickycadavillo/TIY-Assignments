//create a function called fixStart
//it should take a single argument, a string, and return a version where all occurances of its first character have been replaced with '*' except for the character itself.  You can asssume that the string is at least one character long. For example:
// fixStart("babble"): "ba**le"


function fixStart(word){
    //split the string
        var splitString = word.split('')
    //get first character of the string
        var firstChar = word.charAt(0)
    //iterate through the string and find if the word contains firstChar letters
    //assign that letter to another variable
        for(var i = 0; i < word.length; i ++)

    // then return firstChar + stars variable + rest of the word with maybe concat???
            return firstChar + splitString
}

console.log(fixStart("babble"))
