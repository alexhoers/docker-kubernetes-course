"use strict";

const express = require("express");
const router = express.Router();

const db = require("../lib/db/db");
const logger = require("../lib/config/logger");

router.use((req, res, next) => {
  logger.log("Time: ", Date.now(), req.baseUrl);
  next();
});

router.get("/wines", (req, res, next) => {
  // Response is appended with json data from getWines response 
  const wines = db.getWines(req, res);
  logger.log(
    `Logged request to /wines endpoint. Returning ${JSON.stringify(wines)}`
  );
});

module.exports = router;
