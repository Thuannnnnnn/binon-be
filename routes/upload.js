const express = require('express');
const multer = require('multer');
const path = require('path');
const { verify } = require('../middleware/authToken')
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/product', verify(), upload.single('file'), (req, res) => {
    if (req.file) {
        const fileUrl = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
        console.log(fileUrl)
        res.send(fileUrl);
    } else {
        res.status(400).send('No file uploaded');
    }
});

module.exports = router;
