var location = document.getElementById("results__location");
var weather = document.getElementById("results__currWeather");
var temp = document.getElementById("results__temp");
var clothing = document.getElementById("results__suggestion");

function success(pos) {
  var crd = pos.coords;
  var url = "/apiCall?" + "lat=" + crd.latitude + "&long=" + crd.longitude;
  getWeather(url);
}

function error(err) {
  updateDom("Sorry there is a problem, please try again later");
}

navigator.geolocation.getCurrentPosition(success, error);

function getWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => updateDom(data))
    .catch(error => console.log("error is", error));
}

function updateDom(res) {
  location.innerText = res.timezone;
  weather.innerText = res.currently.summary;
  temp.innerText = res.currently.temperature;
}
