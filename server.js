require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URI;

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected to MongoDB."))
  .catch((error) => console.error("MongoDB connection failed:", error));

// schema
const menuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  ratings: String,
  description: String,
  price: String,
});

const popularMenuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  ratings: String,
});

// models
const Menu = mongoose.model("Menu", menuSchema);
const PopularMenu = mongoose.model("PopularMenu", popularMenuSchema);

// add popular menu
app.post("/api/addpopularmenu", async (req, res) => {
  try {
    const { imageUrl, title, ratings } = req.body;

    if (!imageUrl || !title || !ratings) {
      return res.status(400).send("Missing required fields.");
    }

    const newPopularMenu = PopularMenu({
      imageUrl,
      title,
      ratings,
    });

    try {
      await newPopularMenu.save();
      res.status(201).send("Popular menu created successfully.");
    } catch (saveError) {
      console.error("Error saving menu:", saveError);
      res.status(500).send("Error saving popular menu to the database.");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add menu
app.post("/api/addmenu", async (req, res) => {
  try {
    const { imageUrl, title, ratings, description, price } = req.body;

    if (!imageUrl || !title || !ratings || !description || !price) {
      return res.status(400).send("Missing required fields.");
    }

    const newMenu = Menu({
      imageUrl,
      title,
      ratings,
      description,
      price,
    });

    try {
      await newMenu.save();
      res.status(201).send("Menu created successfully.");
    } catch (saveError) {
      console.error("Error saving menu:", saveError);
      res.status(500).send("Error saving menu to the database.");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add popular menu
app.get("/api/popularmenulist", async (_req, res) => {
  try {
    const popularMenu = await PopularMenu.find();
    res.status(200).send({ status: 200, data: popularMenu });
  } catch (error) {
    console.error("Error fetching popular menu:", error);
    res.status(500).send("Internal Server Error");
  }
});

// get menu
app.get("/api/menulist", async (_req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).send({ status: 200, data: menu });
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app listen
app.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT} at ${new Date().toLocaleTimeString()}`
  );
});
