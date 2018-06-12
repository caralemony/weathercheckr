const APIrequest = require("request");
require("env2")("./config.env");
const DARK_SKY_KEY = process.env.DARK_SKY_KEY;

const apiCall = (request, response) => {
  let lat = request.url.split("=")[1].split("&")[0];
  let long = request.url.split("=")[2];
  let apiUrl = `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${long}`;
  console.log(apiUrl);

  APIrequest(apiUrl, (error, res, body) => {
    if (error) {
      console.log("error:", error);
    } else {
      response.end(body);
    }
  });
};

module.exports = apiCall;
