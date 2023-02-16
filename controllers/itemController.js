const express = require("express");
const itemController = express();
const { getAllGear } = require("../queries/gear");
const { getOneGear } = require("../queries/gear");
// * gear
itemController.get("/", async (req, res) => {
  const gear = await getAllGear();
  if (gear[0]) {
    res.json({
      success: true,
      payload: gear,
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

module.exports = itemController;
