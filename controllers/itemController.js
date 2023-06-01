const express = require("express");
const itemController = express();
const { getAllGear } = require("../queries/gear");
const { getOneGear } = require("../queries/gear");
const { getAllMensGear } = require("../queries/gear");
const { getAllWomensGear } = require("../queries/gear");
// const { getOneName } = require("../queries/name");
// * gear
itemController.get("/", async (req, res) => {
  // parse query string
  const { SO } = req.query;

  const gear = await getAllGear(SO);
  if (gear) {
    res.json({
      success: true,
      payload: gear,
    });
  } else {
    res.json(500).json();
  }
});
// pulling only mens gear
itemController.get("/mens", async (req, res) => {
  const mens = await getAllMensGear();
  if (mens[0]) {
    res.json({
      success: true,
      payload: mens,
    });
  } else {
    res.json(500).json();
  }
});

// pulling only womens gear
itemController.get("/womens", async (req, res) => {
  const womens = await getAllWomensGear();
  if (womens[0]) {
    res.json({
      success: true,
      payload: womens,
    });
  } else {
    res.json(500).json();
  }
});
// singleItem of gear
itemController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const singleItem = await getOneGear(id);
  if (singleItem) {
    res.json({
      success: true,
      payload: singleItem,
    });
  } else {
    res.status(500).json();
  }
});

// itemController.get("/:name", async (req, res) => {
//   const allCaps = req.query;
//   const singleName = req.params;

//   try {
//     if (!singleName) {
//       throw "Only letters and spaces allowed";
//     }
//     if (allCaps === "true") {
//       res.status(200).send(`HELLO ${singleName.toUpperCase()}`);
//     } else {
//       res.status(200).send(`Hello ${singleName}`);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

module.exports = itemController;
