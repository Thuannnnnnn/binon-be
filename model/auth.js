const { query } = require('../connect.js')
const authModel = {
    async getStaff(userName) {
        try {
            const [result] = await query('SELECT * FROM `staff` where `user_name` = ?', [userName])
            return result
        } catch (err) {
            console.log(err)
        }
    },
}
module.exports = authModel;
