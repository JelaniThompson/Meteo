//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

//const Brampton = "http://api.openweathermap.org/data/2.5/weather?lat=43.72349010000001&lon=-79.714882&appid=d92242a2a0f022fbdfc75b0c9499bbec";

let $city = $("#city");
let $description = $("#description");
let $temperature = $("#temperature");
let $weatherIcon = $("#weatherIcon");
let $celsius = $("#celsius");
let $fahrenheit = $("#fahrenheit");

//Output data from URL via JSON
//Wrap in function so it calls when DOM elements are ready
$(function() {
  let $getCoordinates = $("#callCoordinates");

  //Get user's current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
      let latitude = location.coords.latitude;
      let longitude = location.coords.longitude;
      let coordinates = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=d92242a2a0f022fbdfc75b0c9499bbec&units=metric";

      //Output data from URL via JSON
      $.getJSON(coordinates, function(json) {
        console.log((JSON.stringify(json)));
        console.log("Latitude: " + latitude + " Longitude: " + longitude);

        //Output API data (should eventually evolve into outputting user's location and weather)
        let cityName = json.name;
        let weather = json.weather[0].main;
        let description = json.weather[0].description;
        let temperature = Math.round(json.main.temp);
        let celsius = Math.round(json.main.temp);
        let fahrenheit = Math.round(json.main.temp * 9 / 5 + 32);

        console.log("The weather in " + cityName + " is " + weather + " and the temperature is " + temperature + " °C");

        //Output appropriate weather ID
        console.log("The weather ID is " + json.weather[0].id + " (" + weather + ")");

        //Now put the appropriate weather icon for ID
        $weatherIcon.html("<i class=" + "'" + "wi wi-owm-" + json.weather[0].id + "'" + "></i>");

        //Output values in HTML
        $city.html(cityName);
        $description.html(description);
        $temperature.html(temperature);

        //Change html to be °C or °F value when you click either one
        $fahrenheit.on('click', function() {
          $(".wi-fahrenheit").addClass("active");
          $(".wi-fahrenheit").removeClass("inactive");
          $(".wi-celsius").removeClass("active");
          $(".wi-celsius").addClass("inactive");
          $temperature.html(fahrenheit);
        });

        $celsius.on('click', function() {
          $(".wi-celsius").addClass("active");
          $(".wi-celsius").removeClass("inactive");
          $(".wi-fahrenheit").removeClass("active");
          $(".wi-fahrenheit").addClass("inactive");
          $temperature.html(celsius);
        });

      });
    });
  }
});
