const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  blogImageUrl: {
    type: "string",
    required: true,
  },
  innerCoverURL: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  subDescription: {
    type: "string",
    required: true,
  },
  description1: {
    type: "string",
    required: true,
  },
  description2: {
    type: "string",
    required: true,
  },
  description3: {
    type: "string",
    required: true,
  },
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
