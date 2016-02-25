// create an arry to hold your top choices (colors, whatever)
// for each choice, lot to the sceren a string like : "My #1 choice is blue"
// bonus: change it to to log "My 1st choice, "my 2nd choice", "my 3rd choice", picking the right suffix for the number based onw hat it is

var array = ["cornflower blue", "gray", "black", "green"]

console.log("My #1 choice is " + array[1]);
// console.log("My #1 choice is " + array[0]);

var arrayFoods = ["ice cream", "pasta", "girlscout cookies", "clementines"]
console.log("My #1 choice is " + arrayFoods[3]);


var favorites = [
    {food: "clementines"},
    {color: "gray"},
    {assignment: "not octocat"}
]

function allFaves () {
    for (var i = 0; i < favorites.length; i ++) {
        console.log("My #1 choice is " + favorites[i])
    }
}
