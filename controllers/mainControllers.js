const popularMenuController = require("./popularMenuController");
const menuController = require("./menuController");
const reviewController = require("./reviewController");
const blogController = require("./blogController");

module.exports = {
  ...popularMenuController,
  ...menuController,
  ...reviewController,
  ...blogController,
};
