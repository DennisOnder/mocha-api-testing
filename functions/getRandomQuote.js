const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const res = await fetch("https://quotes.rest/qod");
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};
