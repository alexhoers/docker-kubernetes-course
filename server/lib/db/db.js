"use strict";

const { Pool } = require("pg");
const logger = require("../config/logger");

const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "development",
  password: "password",
  port: 5432,
});

const getWines = (req, res) => {
  pool.query("SELECT * FROM wines", (err, results) => {
    if (err) {
      logger.log(error);
    }
    logger.log("SELECT * FROM wines, returned " + results.rows + " rows");
    logger.log(results.rows);
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getWines,
};
