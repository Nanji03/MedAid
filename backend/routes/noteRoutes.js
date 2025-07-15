const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { uploadLectureNote } = require('../controllers/noteController');

router.post('/upload', upload.single('note'), uploadLectureNote);

module.exports = router;
