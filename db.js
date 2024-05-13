const mongoose = require("mongoose");

const dbConnection = (dbConnectionString) => {
  mongoose
    .connect(dbConnectionString)
    .then(() => console.log("Successfully connected to the database"))
    .catch((error) => console.error("MongoDB connection failed:", error));
};

module.exports = dbConnection;
