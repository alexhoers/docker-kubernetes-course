"use strict";

const { Client, Pool } = require("pg");

// module.exports is an object reference that gets returned from the require() calls.
// It is a reference to a plain JavaScript object.
// It is empty by default.

// exports is a convenience variable so module authors write less code

/* 
let wines = exports.wines = [];

wines.push({ id: 1, name: "Wine 1"});
wines.push({ id: 2, name: "Wine 2"});
*/

const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "development",
  password: "password",
  port: 5432,
});

const getWines = (req, res) => {
  pool.query("SELECT * FROM wines", (err, results) => {
    console.log(err, results);
    //pool.end();
    res.status(200).json(results.rows)
  });
};

module.exports = {
  getWines,
};
