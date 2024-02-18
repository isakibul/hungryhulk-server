const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  category: String,
  ratings: String,
  description: String,
  price: String,
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
