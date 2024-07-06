const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");
<<<<<<< HEAD
// const {
//   bloodGroupDetailsControllerDemo,
// } = require("../controllers/consumerAnalyticsController");
=======
const {
  bloodGroupDetailsControllerDemo,
} = require("../controllers/consumerAnalyticsController");
>>>>>>> 37f1810a8e3a7fb4189847d110ad9c5157d16f1b

const router = express.Router();

// routes

// GET BLOOD DATA
// /bloodGroupData(we can write here anaything)
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);
<<<<<<< HEAD
// router.get("/bloodGroupsDemo", authMiddleware, bloodGroupDetailsControllerDemo);
=======
router.get("/bloodGroupsDemo", authMiddleware, bloodGroupDetailsControllerDemo);
>>>>>>> 37f1810a8e3a7fb4189847d110ad9c5157d16f1b

module.exports = router;
