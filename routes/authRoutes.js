const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes
// previously we used to define function inside the router
// but now we handle it in controller section
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController); // instal jsonwebtoken package for login security

// GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);
module.exports = router;
