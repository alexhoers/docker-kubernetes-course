"use strict";

const { Pool } = require('pg');

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

module.exports = pool;