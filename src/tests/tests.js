const test = require("tape");
const getClothing = require("./testGetClothing");

test("testing tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

test("testing temperature function returns correct suggustion", t => {
  t.equals(
    getClothing(23),
    "It's warming up! Dress or shorts would be good",
    "should return Dress or shorts"
  );
  t.end();
});

test("testing temperature function returns correct suggustion", t => {
  t.equals(
    getClothing(29),
    "It's boiling! Get the bikini or swimming trunks out!",
    "should return Bikini"
  );
  t.end();
});
