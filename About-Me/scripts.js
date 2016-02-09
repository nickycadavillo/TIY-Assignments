
// change font family of body to sans serif font
var font = document.querySelector("body");
  font.style.fontFamily = "Arial";

// replace each of the spans with your own information
var fullName = document.getElementById("fullname");
  fullName.textContent = "Nicky Cadavillo";

var home = document.getElementById("hometown");
  home.textContent = "New York";

var favMovie = document.getElementById("movie");
  favMovie.textContent = "The Hunger Games";

var favFood = document.getElementById("food");
  favFood.textContent = "cacio e pepe";

// iterate through each li and change the class to listitem.
// Add a style tag that sets a rule for listitem to make the color red.

var list = document.getElementsByTagName("li"); //store in an array

  for (item = 0; item <= list.length; item++) { //loop through items in array
    list[item].className = "listitem"; // add classname
    list[item].style.color = "red"; // change color
  }

// Create a new img element and set its src attribute to a picture of you.
// Append that element to the page.
