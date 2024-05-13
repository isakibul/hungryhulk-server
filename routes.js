const express = require("express");
const router = express.Router();

// import controllers
const controllers = require("./controllers/mainControllers");

// destructure controllers
const {
  addPopularMenu,
  addMenu,
  addReview,
  addBlog,
  getPopularMenuList,
  getMenuList,
  getReviewList,
  getBlogList,
} = controllers;

// add popular menu
router.post("/popularmenu", addPopularMenu);

// add menu
router.post("/menu", addMenu);

// add review
router.post("/review", addReview);

// add blog
router.post("/blog", addBlog);

// get popular menu
router.get("/popularmenu", getPopularMenuList);

// get menu
router.get("/menu", getMenuList);

// get review
router.get("/review", getReviewList);

// get blog
router.get("/blog", getBlogList);

module.exports = router;
