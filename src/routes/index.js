const express = require("express");
const router = express.Router();

/**
 * controllers
 */
const controllers = require("./controllers");

/**
 * popular Menu routes
 */
router
  .route("/api/popularmenu")
  .post(controllers.addPopularMenu)
  .get(controllers.getAllPopularMenu);

/**
 * menu routes
 */
router.route("/api/menu").post(controllers.addMenu).get(controllers.getAllMenu);

/**
 * review routes
 */
router
  .route("/api/review")
  .post(controllers.addReview)
  .get(controllers.getAllReview);

/**
 * blog routes
 */
router.route("/api/blog").post(controllers.addBlog).get(controllers.getAllBlog);

module.exports = router;
