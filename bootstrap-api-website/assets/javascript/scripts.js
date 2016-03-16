// for some reason the used strict is not working?
// $(function(){
//    'use strict';

//tabs
$('#restaurants').on('click', function (){
  window.location = "restaurants.html";
});

$('#home').on('click', function (){
  window.location = "index.html";
});


//YUMMLY APP KEY: 55ca31c7ecf4406e6da2b957415f4c3d
//YUMMLY APP ID: 9a7dc1b9

//WHY YOU NO WORK?!
// $.getJSON("http://api.yummly.com/v1/api/recipe/Moroccan-Tajine-1475953?_app_id=9a7dc1b9&_app_key=55ca31c7ecf4406e6da2b957415f4c3d", function(json) {
//       $(".recipe-name").html(json.name);
//       $(".prep-time").html(json.totalTime);
//       $(".ingredients").html(json.ingredientLines);
// )};

 // $(".recipe-name").html(json[0].name);

// )};
