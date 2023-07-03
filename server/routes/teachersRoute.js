const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const teachersController = require("../controllers/teachersController");
const router = express.Router();

router.get("/", verifyToken, teachersController);

module.exports = router;
