
//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Example string: "webmaster"
//Expected output: "abeemrstw"

//pseudocode: string is an empty array, then return that as a string, the sort it?
//bunch of trial and errors below and console logging


function alphabet(word){
    var toString = word.toString()
    var sort = toString.sort()

    return sort.toString()
}

console.log(function alphabet("hello"));

var string = ["hello"]
var sort = string.sort()
var toString = sort.toString()

console.log(toString)

function alphabet(word){
    var toString = word.toString()
    var sort = toString.sort()

}

console.log()


//solution below
function alphabetOrder(str){
    return str.split('').sort().join('')
}

console.log(alphabetOrder("hello"))


//******SECOND CHALLENGE******//

//write a JavaScript function that accepts a list of country names as input and returns the longest country name as output

//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of America"

var countries = [""];

//psuedocode: create an array to store the countries
//iterate through it and get the length of all the strings in the array
//return the greatest

function Longest_Country_Name(countries){
    for (var i = 0; i < countries.length; i++){
        var lengths = countries[i].length
            return Math.max(lengths)
    }
}

console.log(Longest_Country_Name(["USA", "Mexico", "Canada"]))
