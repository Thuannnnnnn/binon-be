const express = require('express');
const router = express.Router();
const { verify } = require('../middleware/authToken')
const productController = require('../controller/product');

router.get('/getAll', verify(), productController.getAllProduct);


module.exports = router;
