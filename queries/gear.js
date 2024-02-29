const db = require("../db/dbConfig");

const getAllGear = async (SO, type, designer) => {
  console.log(`Log:`, type, SO, designer);
  try {
    let query = "SELECT * FROM gear";

    const whereConditions = [];

    if (SO) {
      whereConditions.push(`wear = '${SO}'`);
    }

    if (type) {
      whereConditions.push(`property_type = '${type}'`);
    }

    if (designer) {
      whereConditions.push(`designed_by = '${designer}'`);
    }

    if (whereConditions.length) {
      query += " WHERE " + whereConditions.join(" AND ");
    }

    query += ";";

    console.log(`Where Conditions:`, whereConditions);
    console.log(`Query:`, query);
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
