const assert = require("chai").assert;
const fetch = require("node-fetch");
const getRandomQuote = require("../functions/getRandomQuote");

describe("API Testing", () => {
  describe("Random Number Generator", () => {
    it("should return a number", () => {
      fetch("http://localhost:8000/")
        .then(res => res.json())
        .then(json => {
          assert.typeOf(json.number, "number");
        });
    });
  });
  describe("Random Quote API", () => {
    it("should return an object", () => {
      getRandomQuote().then(quote => {
        assert.typeOf(quote, "object");
      });
    });
  });
});
