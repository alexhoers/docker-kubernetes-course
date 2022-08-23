"use strict";

const logger = require("../config/logger");
const pool = require("./connection");

// Called directly without acquiring a client object
// TODO: add transactional support https://node-postgres.com/features/transactions
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

//

const f = async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const queryText = "SELECT * FROM wines";
    const res2 = await client.query(queryText);
    await client.query("COMMIT");

    logger.log("SELECT * FROM wines, returned " + JSON.stringify(res2.rows) + " rows");
    logger.log(res2.rows);

    throw "test" // test roll back transaction
    res.status(200).json(res2.rows);
  } catch (e) {
    await client.query("ROLLBACK");
    logger.log("Rolling back transaction");
  } finally {
    client.release();
  }
};

module.exports = {
  getWines,
  f,
};
