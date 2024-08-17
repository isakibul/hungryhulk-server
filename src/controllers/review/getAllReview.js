const { Review } = require("../../models");

const getAllReview = async (_req, res) => {
  try {
    const review = await Review.find();
    res.status(200).send({ status: 200, data: review });
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllReview;
