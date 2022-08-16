const express = require("express");
const app = express();
const port = 3000;

const logger = require('./lib/logger');

// Routes
const controllers = require("./controllers/controllers");

app.use("/api", controllers);

app.listen(port, () => {
  logger.log(`App is starting up and listening on port ${port}`);
  logger.log(`Hello World. Server started.`);
});
