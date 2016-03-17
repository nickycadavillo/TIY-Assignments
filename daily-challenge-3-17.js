// Write a JavaScript function to find the first not repeated character
//Sample arguments: "abacddbec"
//Expected output: 'e'

//pass and array and sort it but not by alphabetical order, instead:
// if index of first matches index of second, delete
// and so forth, until index does not match any other index

function repeat(arr){
    console.log(arr)
    arr.sort(function (a,b){
            if (a === b) {
                console.log(arr);
            } else a != b {
                console.log(arr);
            }
        });
    };


console.log(repeat("hello"))
