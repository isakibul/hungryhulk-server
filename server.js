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
const popularMenuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  ratings: String,
});

const menuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  category: String,
  ratings: String,
  description: String,
  price: String,
});

const reviewSchema = new mongoose.Schema({
  clientImageUrl: String,
  name: String,
  review: String,
});

const blogSchema = new mongoose.Schema({
  blogImageUrl: String,
  title: String,
  subDescription: String,
  description: String,
});

// models
const PopularMenu = mongoose.model("PopularMenu", popularMenuSchema);
const Menu = mongoose.model("Menu", menuSchema);
const Review = mongoose.model("Review", reviewSchema);
const Blog = mongoose.model("Blog", blogSchema);

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
    const { imageUrl, title, category, ratings, description, price } = req.body;

    if (
      !imageUrl ||
      !title ||
      !category ||
      !ratings ||
      !description ||
      !price
    ) {
      return res.status(400).send("Missing required fields.");
    }

    const newMenu = Menu({
      imageUrl,
      title,
      category,
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

// add review
app.post("/api/addreview", async (req, res) => {
  try {
    const { clientImageUrl, name, review } = req.body;

    if (!clientImageUrl || !name || !review) {
      return res.status(400).send("Missing required fields.");
    }

    const newReview = Review({
      clientImageUrl,
      name,
      review,
    });

    try {
      await newReview.save();
      res.status(201).send("Review created successfully.");
    } catch (saveError) {
      console.error("Error saving review:", saveError);
      res.status(500).send("Error saving review to the database.");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add blog
app.post("/api/addblog", async (req, res) => {
  try {
    const { blogImageUrl, title, subDescription, description } = req.body;

    if (!blogImageUrl || !title || !subDescription || !description) {
      return res.status(400).send("Missing required fields.");
    }

    const newBlog = Blog({
      blogImageUrl,
      title,
      subDescription,
      description,
    });

    try {
      await newBlog.save();
      res.status(201).send("Blog created successfully.");
    } catch (saveError) {
      console.error("Error saving blog:", saveError);
      res.status(500).send("Error saving blog to the database.");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// get popular menu
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

// get review
app.get("/api/review", async (_req, res) => {
  try {
    const review = await Review.find();
    res.status(200).send({ status: 200, data: review });
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).send("Internal Server Error");
  }
});

// get blog
app.get("/api/blog", async (_req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).send({ status: 200, data: blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

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
