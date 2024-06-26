const express = require('express');
const router = express.Router();
const authController = require('../controller/auth')

router.post('/login', authController.authCheck);
router.post('/validate', authController.validate);

module.exports = router;
