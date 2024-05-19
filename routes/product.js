const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.get('/getAll', productController.getAllProduct);


module.exports = router;