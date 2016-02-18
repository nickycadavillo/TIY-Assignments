// write a function named assignGrade that:
// takes 1 argument, a number score
// returns a grade for the score, either "A", "B", "C", "D" or "F"
// Call that function for a few different scores and log the results to make sure it works

function assignGrade(n){
    if (n >= 90){
        console.log("A");
    }
    else if (n >= 85 && n <= 89 ) {
        console.log("B");
    }
    else if (n >= 70 && n <= 79) {
        console.log("C");
    }
    else if (n >= 60 && n <= 69) {
        console.log("D");
    }
    else (n >= 59) {
        console.log("F");
    }
};

console.log(assignGrade(90));
