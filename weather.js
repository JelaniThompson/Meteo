//Do JSON APIs course on FCC tomorrow to figure out how to work with this
'use strict';

const key = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d92242a2a0f022fbdfc75b0c9499bbec";
const coordinates = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d92242a2a0f022fbdfc75b0c9499bbec";

let $getCoordinates = $("#callCoordinates");

//Output data from URL via JSON
$(function() {
  let $getCoordinates = $("#callCoordinates");

  //Output data from URL via JSON
  $getCoordinates.on('click', function() {
      $.getJSON(key, function(json) {
          $("#output").html(JSON.stringify(json));
      });
  });
});

//Have an array of different potential weathers
let weather = [];