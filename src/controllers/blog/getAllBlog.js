const { Blog } = require("../../models");

const getAllBlog = async (_req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).send({ status: 200, data: blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllBlog;
