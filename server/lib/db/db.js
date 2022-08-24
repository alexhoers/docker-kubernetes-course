"use strict";

const logger = require("../config/logger");
const pool = require("./connection");
const { tables, schema} = require("../config/db_config");

// Called directly without acquiring a client object
// TODO: add transactional support https://node-postgres.com/features/transactions
/*const getWines2 = (req, res) => {
  pool.query("SELECT * FROM wines", (err, results) => {
    if (err) {
      logger.log(error);
    }
    logger.log("SELECT * FROM wines, returned " + results.rows + " rows");
    logger.log(results.rows); results
    res.status(200).json(results.rows);
  });
}; */

const getNews = (req, res) => {
  const queryString = `SELECT * FROM ${tables.news}`;
  transaction(req, res, queryString);
};

const getWines = (req, res) => {
  const queryString = `SELECT * FROM ${tables.wines}`;
  transaction(req, res, queryString);
};

const transaction = async (req, res, queryString) => {
  const client = await pool.connect();
  try {
    logger.log("Starting db transaction.");

    await client.query("BEGIN");

    logger.log(queryString);
    
    const dbRes = await client.query(queryString);

    await client.query("COMMIT");

    logger.log(`${queryString} returned ${dbRes.rowCount} results`);

    // Set result from db
    res.status(200).json(dbRes.rows);
  } catch (e) {
    await client.query("ROLLBACK");

    logger.log(`Rolling back transaction ${e}`);
  } finally {
    client.release();
  }
};

module.exports = {
  getWines,
  getNews
};
