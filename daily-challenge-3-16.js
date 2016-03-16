
//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Example string: "webmaster"
//Expected output: "abeemrstw"

//pseudocode: string is an empty array, then return that as a string, the sort it?
//bunch of trial and errors below and console logging

var word = [];

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
