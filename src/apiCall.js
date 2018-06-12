const APIrequest = require("request");
require("env2")("./config.env");
const DARK_SKY_KEY = process.env.DARK_SKY_KEY;

const apiCall = (request, response) => {
  let lat = request.url.split("=")[1].split("&")[0];
  let long = request.url.split("=")[2];
  let apiUrl = `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${long}`;

  APIrequest(apiUrl, (error, res, body) => {
    if (error) {
      response.end("Sorry, there is a problem with our weather check!");
    } else {
      response.end(JSON.stringify(body));
    }
  });
};

module.exports = apiCall;
