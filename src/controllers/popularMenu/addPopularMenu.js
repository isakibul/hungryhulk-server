const { PopularMenu } = require("../../models");

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

module.exports = addPopularMenu;
