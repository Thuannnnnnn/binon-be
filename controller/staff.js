const staffModel = require("../model/staff.js");
const staffController = {
  async getAllStaff(req, res) {
    try {
      const staff = await staffModel.getAllStaff();
      res.status(200).send(staff);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error from load staff")
    }
  },
};
module.exports = staffController;
