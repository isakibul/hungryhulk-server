const mongoose = require("mongoose");

const popularMenuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  ratings: String,
});

const PopularMenu = mongoose.model("PopularMenu", popularMenuSchema);

module.exports = PopularMenu;
