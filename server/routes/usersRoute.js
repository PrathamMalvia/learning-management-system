const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/", verifyToken, usersController);

module.exports = router;
