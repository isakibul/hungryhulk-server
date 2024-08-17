const express = require("express");
const router = express.Router();

/**
 * controllers
 */
const controllers = require("./controllers");

/**
 * add popular menu
 */
router.post("/popularmenu", controllers.addPopularMenu);

/**
 * add menu
 */
router.post("/menu", controllers.addMenu);

/**
 * add review
 */
router.post("/review", controllers.addReview);

/**
 * add blog
 */
router.post("/blog", controllers.addBlog);

/**
 * get popular menu
 */
router.get("/popularmenu", controllers.getAllPopularMenu);

/**
 * get menu
 */
router.get("/menu", controllers.getAllMenu);

/**
 * get review
 */
router.get("/review", controllers.getAllReview);

/**
 * get blog
 */
router.get("/blog", controllers.getAllBlog);

module.exports = router;
