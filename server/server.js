const express = require("express");
const app = express();
const port = 3000;

// Routes
const controllers = require("./controllers/controllers");

app.use("/api", controllers);

app.listen(port, () => {
  console.log(`App is starting up and listening on port ${port}`);
});
