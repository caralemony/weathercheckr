var results = document.getElementById("results");

function success(pos) {
  var crd = pos.coords;
  var url = "/apiCall?" + "lat=" + crd.latitude + "&long=" + crd.longitude;
  XHRrequest(url, updateDom);
}

function error(err) {
  updateDom("Sorry there is a problem, please try again later");
}

navigator.geolocation.getCurrentPosition(success, error);

function XHRrequest(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(xhr.responseText);
      } else {
        var errorMessage = "Something went wrong with our lookup";
        cb(errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function updateDom(res) {
  let content = res.currently;
  results.innerText = content;
}
