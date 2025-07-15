const parsePdf = require('../utils/parsePdf');
const parseDocx = require('../utils/parseDocx');
const parseTxt = require('../utils/parseTxt');
const fs = require('fs');

exports.uploadLectureNote = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    const ext = file.originalname.split('.').pop();
    let flashcards = [];

    const buffer = fs.readFileSync(file.path);

    if (ext === 'pdf') {
      flashcards = await parsePdf(buffer);
    } else if (ext === 'docx') {
      flashcards = await parseDocx(buffer);
    } else if (ext === 'txt') {
      const text = buffer.toString('utf-8');
      flashcards = parseTxt(text);
    } else {
      return res.status(400).json({ message: 'Unsupported file type' });
    }

    res.status(200).json({ flashcards });
  } catch (err) {
    res.status(500).json({ message: 'Failed to parse lecture note', error: err.message });
  }
};
