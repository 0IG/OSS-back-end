const express = require("express");
const cors = require("cors");
// Refer Back Tp : https://medium.com/swlh/uploading-images-to-your-node-js-backend-978261eb0724
// For more info on multer
// const multer = require("multer");

// const bodyParser = require("body-parser");

const app = express();

app.use(cors());

// const upload = multer({
//   dest: "images",
// });

const itemController = require("./controllers/itemController");

app.get("/", (req, res) => {
  res.send("hello world :]");
});
// Upload Images Local
// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

app.use("/gear", itemController);

// router.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

module.exports = app;
