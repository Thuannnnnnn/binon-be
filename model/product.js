const { query } = require('../connect.js')
const productModel = {
    async getAllProduct() {
        try {
            console.log("a")
            const [result] = await query('SELECT * FROM product')
            return result
        } catch (err) {
            console.log(err)
        }
    },
}
module.exports = productModel;
