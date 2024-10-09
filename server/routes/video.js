const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Video upload route
router.post('/upload', upload.single('video'), async (req, res) => {
    // Save video info in the database
});

module.exports = router;
