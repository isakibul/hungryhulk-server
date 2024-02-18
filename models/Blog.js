const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogImageUrl: String,
  title: String,
  subDescription: String,
  description: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
