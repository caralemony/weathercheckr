const express = require("express");
const router = express.Router();
const home = require("./index.js");
const apiCall = require("./apiCall.js");
const updateDom = require("../src/index.js");

router.get("/", home.get);

router.get("/apiCall?", (req, res) => {
  apiCall(req, res);
});

module.exports = router;
