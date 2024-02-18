const Blog = require("../models/Blog");

// add blog
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

// get blog
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
  addBlog,
  getBlogList,
};
