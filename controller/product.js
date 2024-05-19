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
    // Bạn có thể thêm các phương thức khác cho controller ở đây nếu cần
};

module.exports = productController;
