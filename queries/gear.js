const db = require("../db/dbConfig");

const getAllGear = async () => {
  try {
    return await db.any("SELECT * FROM gear");
  } catch (error) {
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

module.exports = {
  getAllGear,
  getOneGear,
};
