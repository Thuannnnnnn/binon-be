const ProductModel = require("../model/product");

const productController = {
  async getAllProduct(req, res) {
    try {
      const products = await ProductModel.getAllProduct();
      res.status(200).json(products);
    } catch (error) {
      console.error("Failed to retrieve products:", error);
      res.status(500).json({ error: "Failed to retrieve products" });
    }
  },
  async addProduct(req, res) {
    try {
      const productData = req.body;
      await ProductModel.addProduct(productData);
      res.status(200).json({ message: "add Success" });
    } catch (error) {
      console.error("Failed to add product:", error);
      res.status(500).json({ error: "Failed to add product" });
    }
  },
  async editProduct(req, res) {
    try {
      const productData = req.body;
      productData.productID = req.params.productID;
      await ProductModel.editProduct(productData);
      res.status(200).json({ message: "update Success" });
    } catch (error) {
      console.error("Failed to add product:", error);
      res.status(500).json({ error: "Failed to edit product" });
    }
  },
  async deleteProduct(req, res) {
    try {
      const productID = req.params.productID;
      
      await ProductModel.deleteProduct(productID);
      res.status(200).json({ message: "delete Success" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to delete product" });
    }
  },
};

module.exports = productController;
