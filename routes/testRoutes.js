const express = require("express");
const { testController } = require("../controllers/testController");

// router object it handles all the routing method
const router = express.Router();

// routes
router.get("/", testController);

// export
module.exports = router;
