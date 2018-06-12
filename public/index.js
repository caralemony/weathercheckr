var weather = document.getElementById("results__currWeather");
var temp = document.getElementById("results__temp");
var clothing = document.getElementById("results__suggestion");
var loc = document.getElementById("results__location");
var accessory = document.getElementById("results__accessory");

function success(pos) {
  var crd = pos.coords;
  var url = "/apiCall?" + "lat=" + crd.latitude + "&long=" + crd.longitude;
  getWeather(url);
}

function error(err) {
  updateDom(`Sorry there is a problem, please try again later. ERROR: ${err}`);
}

navigator.geolocation.getCurrentPosition(success, error);

function getWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => updateDom(data))
    .catch(
      error =>
        (loc.innerHTML = `Sorry something went wrong with the weather API! ERROR: ${error}`)
    );
}

function updateDom(res) {
  var temperature = Math.round(((res.currently.temperature - 32) * 5) / 9);
  loc.innerText = res.timezone;
  weather.innerText = res.currently.summary;
  temp.innerText = temperature + "C";
  getClothing(temperature);
  getAccessory(res.currently.icon);
}

function getClothing(temperature) {
  if (0 < temperature < 10) {
    clothing.innerText = "It's chilly, wrap up warm in a jumper and coat";
  } else if (temperature < 0) {
    clothing.innerText = "It's freezing! Try a hat, scarf, gloves and coat!";
  } else if (11 < temperature < 20) {
    clothing.innerText =
      "Not too bad, a light jumper and trousers or leggings should be fine";
  } else if (21 < temperature < 25) {
    clothing.innerText = "It's warming up! Dress or shorts would be good";
  } else if (temperature > 25) {
    clothing.innerText = "It's boiling! Get the bikini or swimming trunks out!";
  }
}

function getAccessory(icon) {
  if (icon == "rain") {
    accessory.innerText = "Accessory: Bring an umbrella!";
  } else if (icon == "snow") {
    accessory.innerText = "Accessory: Boots or Wellies";
  } else if (icon == "clear-day") {
    accessory.innerText = "Accessory: Sunglasses";
  } else {
    accessory.innerText = "Accessory: Anything you like!";
  }
}
