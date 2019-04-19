const assert = require("chai").assert;
const fetch = require("node-fetch");

describe("Get Random Number", () => {
  it("should return a number", () => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(json => {
        assert.typeOf(json.number, "number");
      });
  });
});
