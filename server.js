require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const dbConnectionString = process.env.MONGODB_URI;

// mongodb connection
dbConnection(dbConnectionString);

// routes configuration
app.use("/api", routes);

// home route
app.get("/", (_req, res) => {
  res.status(200).json({ message: "Home!" });
});

// app listen
app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} at ${new Date().toLocaleTimeString()}`
  );
});
