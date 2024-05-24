const express = require("express");
const router = express.Router();
const { verify } = require("../middleware/authToken");
const productController = require("../controller/product");

router.get("/getAll", verify(), productController.getAllProduct);
router.post("/add", verify(), productController.addProduct);
router.put("/edit/:productID", verify(), productController.editProduct);
router.delete("/delete/:productID", verify(), productController.deleteProduct);

module.exports = router;
