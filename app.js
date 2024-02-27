const express = require("express");
const cors = require("cors");
// Refer Back Tp : https://medium.com/swlh/uploading-images-to-your-node-js-backend-978261eb0724
// For more info on multer
// const multer = require("multer");

// const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const itemController = require("./controllers/itemController");

app.get("/", (req, res) => {
  res.send("hello world :]");
});
app.use("/gear", itemController);

module.exports = app;
