"use strict";

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/knapsack", (req, res, next) => {
  res.send("Hej med dig");
});

module.exports = router;
