// backend/routes/flashcardRoutes.js
const express = require('express');
const router = express.Router();
const {
  createFlashcard,
  getUserFlashcards,
  updateFlashcard,
  deleteFlashcard,
  reviewFlashcard
} = require('../controllers/flashcardController');

// All routes assume authentication is handled externally for now

router.post('/', createFlashcard);                     // Create a new flashcard
router.get('/:userId', getUserFlashcards);             // Get all flashcards for user
router.put('/:id', updateFlashcard);                   // Update flashcard
router.delete('/:id', deleteFlashcard);              // Delete flashcard                
router.post('/review/:flashcardId', reviewFlashcard);


module.exports = router;

const upload = require('../middleware/upload');

router.post(
  '/',
  upload.fields([{ name: 'image' }, { name: 'audio' }]),
  createFlashcard
);
// backend/routes/flashcardRoutes.js