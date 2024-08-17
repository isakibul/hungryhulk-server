const { Menu } = require("../../models");

const getAllMenu = async (_req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).send({ status: 200, data: menu });
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllMenu;
