const db = require("../db/dbConfig");

const getAllGear = async (SO) => {
  try {
    let query = "SELECT * FROM gear";
    if (SO) {
      query += ` WHERE wear = '${SO}';`;
    }

    console.log(query);

    return await db.any(query);
  } catch (error) {
    console.log("error here");
    return error;
  }
};

const getOneGear = async (id) => {
  try {
    return await db.one("SELECT * FROM gear WHERE id = $1", id);
  } catch (error) {
    return error;
  }
};

const getAllMensGear = async (wear) => {
  try {
    return await db.any("SELECT * FROM gear WHERE wear = 'Mens'", wear);
  } catch (error) {
    return error;
  }
};

const getAllWomensGear = async (wear) => {
  try {
    return await db.any("SELECT * FROM gear WHERE wear = 'Womens'", wear);
  } catch (error) {
    return error;
  }
};

const getAllGisMens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'gi' AND wear = 'Womens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllGisWomens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'gi' AND wear = 'Mens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllRashguardsWomens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'rashguard' AND wear = 'Womens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllRashguardsMens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'rashguard' AND wear = 'Mens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllShortsWomens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'shorts' AND wear = 'Womens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllShortsMens = async (property_type, wear) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'shorts' AND wear = 'Mens'",
      property_type,
      wear
    );
  } catch (error) {
    return error;
  }
};

const getAllBelts = async (property_type) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'belt'",
      property_type
    );
  } catch (error) {
    return error;
  }
};

const getAllGloves = async (property_type) => {
  try {
    return await db.any(
      "SELECT * FROM gear WHERE property_type = 'glove'",
      property_type
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGear,
  getOneGear,
  getAllMensGear,
  getAllWomensGear,
  getAllGisMens,
  getAllGisWomens,
  getAllRashguardsMens,
  getAllRashguardsWomens,
  getAllShortsWomens,
  getAllShortsMens,
  getAllBelts,
  getAllGloves,
};
