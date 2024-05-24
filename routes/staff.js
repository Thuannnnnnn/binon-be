const express = require("express");
const router = express.Router();
const { verify } = require("../middleware/authToken");
const staffController = require("../controller/staff");

router.get("/getAll", verify(), staffController.getAllStaff);
module.exports = router;
