const { query } = require("../connect.js");
const productModel = {
  async getAllProduct() {
    try {
      const [result] = await query("SELECT * FROM product");
      return result;
    } catch (err) {
      console.log(err);
    }
  },
  async addProduct(data) {
    try {
      const { productID, productName, price, imageUrl, IsActive, description } =
        data;

      const result = await query(
        "INSERT INTO product (productID, productName, price, imageUrl, IsActive, description) VALUES (?,?,?,?,?,?)",
        [productID, productName, price, imageUrl, IsActive, description]
      );
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async editProduct(data) {
    try {
      const {
        productIDNew,
        productName,
        price,
        imageUrl,
        IsActive,
        description,
        productID,
      } = data;

      const result = await query(
        "UPDATE product SET productID=?, productName=?, price=?, imageUrl=?, IsActive=?, description=? WHERE productID = ?",
        [
          productIDNew,
          productName,
          price,
          imageUrl,
          IsActive,
          description,
          productID,
        ]
      );

      // if (result.affectedRows === 0) {
      //   throw new Error("No product found with the given ID to update.");
      // }

      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  async deleteProduct(productID) {
    try {
        console.log("productID: "+productID)
        await query("DELETE FROM product WHERE productID=?", [productID]);
      return true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
module.exports = productModel;
