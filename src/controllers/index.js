const popularMenuController = require("./popularMenu");
const menuController = require("./menu");
const reviewController = require("./review");
const blogController = require("./blog");

module.exports = {
  ...popularMenuController,
  ...menuController,
  ...reviewController,
  ...blogController,
};
