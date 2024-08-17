const { PopularMenu } = require("../../models");

const getAll = async (_req, res) => {
  try {
    const popularMenu = await PopularMenu.find();
    res.status(200).send({ status: 200, data: popularMenu });
  } catch (error) {
    console.error("Error fetching popular menu:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAll;
