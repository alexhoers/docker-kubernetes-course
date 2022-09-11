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

router.get("/news", (req, res, next) => {
  // Response is appended with json data from getNews response 
  const news = db.getNews(req, res);
  logger.log(
    `Logged request to /news endpoint. Returning ${JSON.stringify(news)}`
  );
});

router.get("/hello-world", (req, res) => {
  res.send("Hello world!");
});

module.exports = router;
