//as a user I want to translate a word or sentance into pig latin
//there are many variations of pig latin, for our purposes we will be using the following rules:
//words that start with one or more consonants, move the leading consonants to the end of the word and add 'ay'
//if 'qu' is included in the leading consonants, move the 'u' along with 'q' to the end of the word and add 'ay' don't skip words like squeak
//for words that start with 'y' treat the 'y' as a consonant

//this is all pretty much pseudocode below.  i have forgotten how to remove certain characters of strings
//and add them to the end, etc. but i would use a switch statement like below
//originally i would use a for loop but i want to try a switch (syntax is off)

function pigLatin(word){

  //maybe to split the sentance it up into an array so i can target each index??

    switch (word)
    case (first character of word !===  a,e,i,o,u)
        take first character and also add characters "ay" to the end
        break;
    case (first two characters of word contain qu)
        move u + q and add 'ay'
        break;
    default


}


console.log(pigLatin("hello world"))
