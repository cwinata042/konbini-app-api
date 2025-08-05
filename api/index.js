const express = require("express");
const https = require("https");
const mongoose = require("mongoose");

require("dotenv").config();
const URI = process.env.ATLAS_URI;
const API_KEY = process.env.API_KEY;

function checkAPIKey(req, res, next) {
  const apiKey = req.query.api_key || req.headers["x-api-key"];

  if (apiKey === API_KEY) {
    next();
  } else {
    res.status(403).send("Forbidden: Invalid API Key");
  }
}

const app = express();

// route imports
const taskRoute = require("../routes/task.route");
const storeItemRoute = require("../routes/storeItem.route");
const goalRoute = require("../routes/goal.route");
const trackedTaskRoute = require("../routes/trackedTask.route");
const purchasedItemRoute = require("../routes/purchasedItem.route");
const weightRoute = require("../routes/weight.route");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(checkAPIKey);

// routes
app.use("/", (req, res) => {
  res.send("Welcome to the konbini API!");
});
app.use("/api/tasks", taskRoute);
app.use("/api/storeItems", storeItemRoute);
app.use("/api/goals", goalRoute);
app.use("/api/trackedTasks", trackedTaskRoute);
app.use("/api/purchasedItems", purchasedItemRoute);
app.use("/api/weight", weightRoute);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });

module.exports = app;
