const app = require("express")();
const bodyParser = require("body-parser");
const config = require("./config/config");

// Functions
const generateRandomNumber = require("./functions/generateRandomNumber");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.json({ number: generateRandomNumber() });
});

// Server Init
app.listen(config.SERVER_PORT, () =>
  console.log(`Server is running on port ${config.SERVER_PORT}`)
);
