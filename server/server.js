// Third party libraries
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Imports
const controllers = require("./controllers/controllers");
const logger = require("./lib/config/logger");

// Enable CORS headers
// https://github.com/expressjs/cors
// https://stackoverflow.com/questions/44736327/node-js-cors-issue-response-to-preflight-request-doesnt-pass-access-control-c
// CORS headers:
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.use(cors());

app.use("/api", controllers);

app.listen(port, () => {
  logger.log(`App is starting up and listening on port ${port}`);
  logger.log(`Hello World. Server started.`);
});
