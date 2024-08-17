const { Menu } = require("../../models");

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

module.exports = addMenu;
