"use strict";

const express = require("express");
const router = express.Router();

const db = require("../lib/db/db");
const logger = require("../lib/config/logger")

const wines = db.wines;

router.use((req, res, next) => {
  console.log("Time: ", Date.now(), req.baseUrl);
  next();
});

router.get("/wines", (req, res, next) => {
  logger.log(`Logged request to /wines endpoint. Returning ${JSON.stringify(wines)}`)

  // Make better fix and remove cors ### READ ABOUT CORS ###
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.send(db.wines)
});

module.exports = router;
