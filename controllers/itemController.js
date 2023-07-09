const express = require("express");
const itemController = express();
const { getAllGear } = require("../queries/gear");
const { getOneGear } = require("../queries/gear");
const { getAllMensGear } = require("../queries/gear");
const { getAllWomensGear } = require("../queries/gear");
const { getAllGisMens } = require("../queries/gear");
const { getAllGisWomens } = require("../queries/gear");
const { getAllRashguardsWomens } = require("../queries/gear");
const { getAllRashguardsMens } = require("../queries/gear");
const { getAllShortsWomens } = require("../queries/gear");
const { getAllShortsMens } = require("../queries/gear");
const { getAllBelts } = require("../queries/gear");
const { getAllGloves } = require("../queries/gear");

// * gear
itemController.get("/", async (req, res) => {
  // parse query string
  const { SO, type } = req.query;

  const gear = await getAllGear(SO, type);
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

// pulling all mens gis
itemController.get("/mens/gi", async (req, res) => {
  const gi = await getAllGisMens();
  if (gi[0]) {
    res.json({
      success: true,
      payload: mensGi,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all mens gis
itemController.get("/womens/gi", async (req, res) => {
  const gi = await getAllGisWomens();
  if (gi[0]) {
    res.json({
      success: true,
      payload: womensGi,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all womens rashguards
itemController.get("/womens/rashguards", async (req, res) => {
  const rashguard = await getAllRashguardsWomens();
  if (rashguard[0]) {
    res.json({
      success: true,
      payload: womensRashguard,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all mens rashguards
itemController.get("/womens/rashguards", async (req, res) => {
  const rashguard = await getAllRashguardsMens();
  if (rashguard[0]) {
    res.json({
      success: true,
      payload: womensRashguard,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all womens shorts
itemController.get("/womens/shorts", async (req, res) => {
  const shorts = await getAllShortsWomens();
  if (shorts[0]) {
    res.json({
      success: true,
      payload: womensShorts,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all mens shorts
itemController.get("/mens/shorts", async (req, res) => {
  const shorts = await getAllShortsMens();
  if (shorts[0]) {
    res.json({
      success: true,
      payload: mensShorts,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all belts
itemController.get("/belts", async (req, res) => {
  const belts = await getAllBelts();
  if (belts[0]) {
    res.json({
      success: true,
      payload: belts,
    });
  } else {
    res.json(500).json();
  }
});

// pulling all gloves
itemController.get("/gloves", async (req, res) => {
  const gloves = await getAllGloves();
  if (gloves[0]) {
    res.json({
      success: true,
      payload: gloves,
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
