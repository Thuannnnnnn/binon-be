const ProductModel = require('../model/product');

const productController = {
    async getAllProduct(req, res) {
        try {
            const products = await ProductModel.getAllProduct();
            res.status(200).json(products);
        } catch (error) {
            console.error('Failed to retrieve products:', error);
            res.status(500).json({ error: 'Failed to retrieve products' });
        }
    },
    async addProduct(req, res) {
        try {
            const productData = req.body;
            await ProductModel.addProduct(productData);
            res.status(200);
        } catch (error) {
            console.error('Failed to add product:', error);
            res.status(500).json({ error: 'Failed to add product' });
        }
    },

};

module.exports = productController;
