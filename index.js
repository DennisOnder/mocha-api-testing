const app = require("express")();
const bodyParser = require("body-parser");
const config = require("./config/config");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.SERVER_PORT, () =>
  console.log(`Server is running on port ${config.SERVER_PORT}`)
);
