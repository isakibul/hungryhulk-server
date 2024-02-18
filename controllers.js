const PopularMenu = require("./models/PopularMenu");
const Menu = require("./models/Menu");
const Review = require("./models/Review");
const Blog = require("./models/Blog");

const addPopularMenu = async (req, res) => {
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
};

const addMenu = async (req, res) => {
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
};

const addReview = async (req, res) => {
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
};

const addBlog = async (req, res) => {
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
};

const getPopularMenuList = async (_req, res) => {
  try {
    const popularMenu = await PopularMenu.find();
    res.status(200).send({ status: 200, data: popularMenu });
  } catch (error) {
    console.error("Error fetching popular menu:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getMenuList = async (_req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).send({ status: 200, data: menu });
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getReviewList = async (_req, res) => {
  try {
    const review = await Review.find();
    res.status(200).send({ status: 200, data: review });
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getBlogList = async (_req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).send({ status: 200, data: blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addPopularMenu,
  addMenu,
  addReview,
  addBlog,
  getPopularMenuList,
  getMenuList,
  getReviewList,
  getBlogList,
};
