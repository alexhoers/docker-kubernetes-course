"use strict";

const { Pool } = require("pg");
const logger = require("../config/logger");

/**
 * A Pool is used we it is expected there will be multiple, concurrent requests. It provides a pool of re-usable open client instances, it reduces latency whenever a client can be reused, and automatically reconnects the client.
 * A client is one static connection.
 */
const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "development",
  password: "password",
  port: 5432,
});

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

module.exports = {
  getWines,
};
