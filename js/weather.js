//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

const Brampton = "http://api.openweathermap.org/data/2.5/weather?lat=43.72349010000001&lon=-79.714882&appid=d92242a2a0f022fbdfc75b0c9499bbec";

//Output data from URL via JSON
//Wrap in function so it calls when DOM elements are ready
$(function() {
  let $getCoordinates = $("#callCoordinates");

  //Get user's current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
      let latitude = location.coords.latitude;
      let longitude = location.coords.longitude;
      const coordinates = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=d92242a2a0f022fbdfc75b0c9499bbec&units=metric";

      //Output data from URL via JSON
      $.getJSON(coordinates, function(json) {
        //$("#output").html(JSON.stringify(json));
        console.log("Latitude: " + latitude + " Longitude: " + longitude);

        //Output API data (should eventually evolve into outputting user's location and weather)
        let cityName = json.name;
        let weather = json.weather[0].main;
        let temperature = Math.round(json.main.temp);
        console.log("The weather in " + cityName + " is " + weather + " and the temperature is " + temperature + " °C");

      });
    });
  }
});

//Have an array of different potential weathers
let weather = [];
