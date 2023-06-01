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

module.exports = {
  getAllGear,
  getOneGear,
  getAllMensGear,
  getAllWomensGear,
};
