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
        const fileUrl = 'https' + '://' + req.get('host') + '/uploads/' + req.file.filename;
        console.log(fileUrl)
        res.send(fileUrl);
    } else {
        res.status(400).send('No file uploaded');
    }
});
router.put('/product/:oldFileUrl', verify(), upload.single('file'), (req, res) => {
    const oldFileUrl = req.params.oldFileUrl;
    if (!oldFileUrl || !req.file) {
        return res.status(400).send('No old file URL or new file provided');
    }

    const oldFilePath = path.join(__dirname, '../uploads/', path.basename(oldFileUrl));

    fs.unlink(oldFilePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting old file');
        }

        const newFileUrl = 'https://' + req.get('host') + '/uploads/' + req.file.filename;
        console.log(newFileUrl);
        res.send(newFileUrl);
    });
});

module.exports = router;
