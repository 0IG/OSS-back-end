const itemController = require("./controllers/itemController");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world :]");
});

app.use("/gear", itemController);

module.exports = app;
