//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

//const Brampton = "http://api.openweathermap.org/data/2.5/weather?lat=43.72349010000001&lon=-79.714882&appid=d92242a2a0f022fbdfc75b0c9499bbec";

let $city = $("#city");
let $weather = $("#weather");
let $temperature = $("#temperature");
let $weatherIcon = $("#weatherIcon");

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
        console.log((JSON.stringify(json)));
        console.log("Latitude: " + latitude + " Longitude: " + longitude);

        //Output API data (should eventually evolve into outputting user's location and weather)
        let cityName = json.name;
        let weather = json.weather[0].main;
        let temperature = Math.round(json.main.temp);
        console.log("The weather in " + cityName + " is " + weather + " and the temperature is " + temperature + " °C");

        //Output appropriate weather ID
        console.log("The weather ID is " + json.weather[0].id + " (" + weather + ")");

        //Now put the appropriate weather icon for ID
        $weatherIcon.html("<i class=" + "'" + "wi wi-owm-" + json.weather[0].id + "'" + "></i>");
        //console.log("<i class=" + "'" + "wi wi-owm-" +  json.weather[0].id + "'" + "></i>");

        //Output values in HTML
        $city.html(cityName);
        //Change to be description
        $weather.html(weather);
        $temperature.html(temperature + " °C");
      });
    });
  }

  //Convert Celsius to Fahrenheit (ternary operator maybe?)
  function temperatureConversion() {

  }

});
