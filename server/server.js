const express = require("express");
const cors = require('cors');
// https://github.com/expressjs/cors
// https://stackoverflow.com/questions/44736327/node-js-cors-issue-response-to-preflight-request-doesnt-pass-access-control-c
const app = express();
const port = 3000;
app.options('*', cors())

const logger = require('./lib/config/logger');

// Routes
const controllers = require("./controllers/controllers");

app.use("/api", controllers);

app.listen(port, () => {
  logger.log(`App is starting up and listening on port ${port}`);
  logger.log(`Hello World. Server started.`);
});
