const Review = require("../models/Review");

// add review
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

// get review
const getReviewList = async (_req, res) => {
  try {
    const review = await Review.find();
    res.status(200).send({ status: 200, data: review });
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addReview,
  getReviewList,
};
