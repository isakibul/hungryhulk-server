require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URI;

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected to MongoDB."))
  .catch((error) => console.error("MongoDB connection failed:", error));

app.use("/api", routes);

// home route
app.get("/", (_req, res) => {
  res.send({ status: 200, data: "Home!" });
});

// app listen
app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} at ${new Date().toLocaleTimeString()}`
  );
});
