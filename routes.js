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
router.post("/addpopularmenu", addPopularMenu);

// add menu
router.post("/addmenu", addMenu);

// add review
router.post("/addreview", addReview);

// add blog
router.post("/addblog", addBlog);

// get popular menu
router.get("/popularmenulist", getPopularMenuList);

// get menu
router.get("/menulist", getMenuList);

// get review
router.get("/review", getReviewList);

// get blog
router.get("/blog", getBlogList);

module.exports = router;
