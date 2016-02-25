//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

//Get user's current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    const coordinates = "api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=d92242a2a0f022fbdfc75b0c9499bbec";
  });
}

let $getCoordinates = $("#callCoordinates");

//Output data from URL via JSON
//Wrap in function so it calls when DOM elements are ready
$(function() {
  let $getCoordinates = $("#callCoordinates");

  //Output data from URL via JSON
  $getCoordinates.on('click', function() {
    $.getJSON(coordinates, function(json) {
      $("#output").html(JSON.stringify(json));
    });
  });
});

//Have an array of different potential weathers
let weather = [];
