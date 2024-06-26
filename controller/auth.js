const authModel = require('../model/auth');
const { generateToken, verifyToken } = require('../utility/jwt');
const authController = {
    async authCheck(req, res) {
        try {
            const { authData } = req.body;

            if (!authData || !authData.userName || !authData.password) {
                return res.status(400).json({ error: 'Invalid request data' });
            }
            const staffList = await authModel.getStaff(authData.userName);

            if (staffList.length === 0) {
                return res.status(404).json({ error: 'Staff Not Found: ' + authData.userName });
            }

            const staff = staffList[0]; // Lấy ra nhân viên đầu tiên từ danh sách

            if (staff.password !== authData.password) {
                return res.status(503).json({ error: 'Incorrect password' });
            }

            const token = generateToken({
                staffID: staff.staffID,
                user_name: staff.user_name,
                staffRole: staff.staffRole,
                fullName: staff.fullName
            });

            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 7200000
            });
            res.status(200).json({ token: token });
        } catch (error) {
            console.error('Error in authCheck:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async validate(req, res) {

        if (!req.headers.authorization) {
            return res.status(401).json({ error: 'Unauthorized: Missing token' });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Missing token' });
        }
        const tokenDes = verifyToken(token)

        if (!tokenDes) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        res.status(200).send(tokenDes);

    }
};

module.exports = authController;
