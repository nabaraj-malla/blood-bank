const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");
// const {
//   bloodGroupDetailsControllerDemo,
// } = require("../controllers/consumerAnalyticsController");

const router = express.Router();

// routes

// GET BLOOD DATA
// /bloodGroupData(we can write here anaything)
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);
// router.get("/bloodGroupsDemo", authMiddleware, bloodGroupDetailsControllerDemo);

module.exports = router;
