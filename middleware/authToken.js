const { verifyToken } = require('../utility/jwt');

const verify = () => {
    return function (req, res, next) {

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
        next();
    }
}

module.exports = { verify }