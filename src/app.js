require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

// routes configuration
app.use(routes);

// health checker
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Health is okay." });
});

module.exports = app;
