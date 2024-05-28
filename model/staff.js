const { query } = require("../connect.js");
const staffModel = {
  async getAllStaff() {
    try {
      const [result] = await query('SELECT `staffID`, `staffName`, `user_name`, `email`, `fullName`, `staffRole` FROM `staff`');
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
module.exports = staffModel;
