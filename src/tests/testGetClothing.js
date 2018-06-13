function getClothing(temperature) {
  if (temperature > 0 && temperature <= 10) {
    return "It's chilly, wrap up warm in a jumper and coat";
  } else if (temperature <= 0) {
    return "It's freezing! Try a hat, scarf, gloves and coat!";
  } else if (temperature > 10 && temperature <= 20) {
    return;
    ("Not too bad, a light jumper and trousers or leggings should be fine");
  } else if (temperature >= 21 && temperature < 25) {
    return "It's warming up! Dress or shorts would be good";
  } else if (temperature >= 25) {
    return "It's boiling! Get the bikini or swimming trunks out!";
  }
}

/// quickly testing the get temperature function here, had to return text instead of changing innertxt because can't test that using tape.

module.exports = getClothing;
