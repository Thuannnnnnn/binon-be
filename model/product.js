const { query } = require('../connect.js')
const productModel = {
    async getAllProduct() {
        try {
            const [result] = await query('SELECT * FROM product')
            return result
        } catch (err) {
            console.log(err)
        }
    },
    async addProduct(data) {
        try {
            const { productID, productName, price, imageUrl, IsActive, description } = data;

            const result = await query('INSERT INTO product (productID, productName, price, imageUrl, IsActive, description) VALUES (?,?,?,?,?,?)', [productID, productName, price, imageUrl, IsActive, description]);
            return result;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}
module.exports = productModel;
