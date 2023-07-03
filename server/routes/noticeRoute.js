const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const noticeController = require("../controllers/noticeController");
const router = express.Router();

router.get("/", verifyToken, noticeController);

module.exports = router;
