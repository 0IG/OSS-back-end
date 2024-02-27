const db = require("../db/dbConfig");

const getAllGear = async (SO, type) => {
  try {
    let query = "SELECT * FROM gear";

    const whereConditions = [];

    if (SO) {
      whereConditions.push(`wear = '${SO}'`);
    }

    if (type) {
      whereConditions.push(`property_type = '${type}'`);
    }

    if (whereConditions.length) {
      query += " WHERE " + whereConditions.join(" AND ");
    }

    query += ";";

    console.log(query); // 'Select * From gear WHERE wear = 'womens' '

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

module.exports = {
  getAllGear,
  getOneGear,
};
