const request = require('request');

const url = 'https://api.darksky.net/forecast/1d0326b16258feb9352dc914e81362b0/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if(error) {
    console.log('Unable to connect to weather service');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature +
    " degrees out. There is a " + response.body.currently.precipProbability +
    "% chance of rain ");
  }

});

//Geocoding with Mapbox. You would need to register, it's free.
//Address => Lat/Long => Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvbjIzMjMiLCJhIjoiY2p2eXduajl5MGlscjRhbDg5djdwOGFwaCJ9.B22hAf-LbKPh6TeX9NW9Ng';

request({ url: geocodeURL, json: true}, (error, response) => {
  if(error){
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0){
    console.log('Unable to find location. Try another search.');
  } else {
    const longitude = response.body.features[0].center[1];
    const latitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
