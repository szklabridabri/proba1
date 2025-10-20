const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Route for uploading images
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).json({ message: 'File uploaded successfully', filePath: `/uploads/${req.file.filename}` });
});

module.exports = router;