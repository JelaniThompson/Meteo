//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

const Brampton = "http://api.openweathermap.org/data/2.5/weather?lat=43.72349010000001&lon=-79.714882&appid=d92242a2a0f022fbdfc75b0c9499bbec";

let $city = $("#city");
let $weather = $("#weather");
let $temperature = $("#temperature");

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

        //Output values in HTML
        $city.html(cityName);
        //Change to be description
        $weather.html(weather);
        $temperature.html(temperature + " °C");

      });
    });
  }
});

//Different weather IDs from weather API
let weatherIDs = [
  //Thunderstorm group, etc.
  {
    name: "thunderstorm",
    icon: "wi wi-owm-200",
    rangeMin: 200,
    rangeMax: 232
  },

  {
    name: "drizzle",
    icon: "wi wi-owm-300",
    rangeMin: 300,
    rangeMax: 321
  },

  {
    name: "rain",
    icon: "wi wi-owm-501",
    rangeMin: 500,
    rangeMax: 531
  },

  {
    name: "snow",
    icon: "wi wi-owm-600",
    rangeMin: 600,
    rangeMax: 622
  },

  {
    name: "clear",
    icon: "wi wi-owm-800",
    rangeMax: 800
  },

  {
    name: "clouds",
    icon: "wi wi-owm-801",
    rangeMin: 801,
    rangeMax: 804
  }
];

//If ID matches range, match weather group
