const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController.js");

const router = express.Router();
// GET BLOOD DATA
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);
module.exports = router;
