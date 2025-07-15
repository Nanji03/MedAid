// backend/controllers/flashcardController.js
const Flashcard = require('../models/Flashcard');
const calculateNextReviewDate = require('../utils/spacedRepetition');

// @desc    Create a new flashcard
exports.createFlashcard = async (req, res) => {
  try {
    const { frontText, backText, tags, user } = req.body;

    // Extract file paths from multer upload
    const imagePath = req.files?.image?.[0]?.path || null;
    const audioPath = req.files?.audio?.[0]?.path || null;

    const reviewDueDate = calculateNextReviewDate(new Date(), 0); // Start at day 0

    const newCard = await Flashcard.create({
      frontText,
      backText,
      image: imagePath,
      audio: audioPath,
      tags,
      user,
      reviewDueDate,
    });

    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create flashcard', error });
  }
};


// @desc    Get all flashcards for a user
exports.getUserFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ user: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch flashcards', error });
  }
};

// @desc    Update a flashcard
exports.updateFlashcard = async (req, res) => {
  try {
    const updated = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update flashcard', error });
  }
};

// @desc    Delete a flashcard
exports.deleteFlashcard = async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete flashcard', error });
  }
};

exports.reviewFlashcard = async (req, res) => {
  const { flashcardId } = req.params;
  const { rating } = req.body; // 'again' | 'hard' | 'medium' | 'easy'

  try {
    const flashcard = await Flashcard.findById(flashcardId);
    if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });

    const now = new Date();
    flashcard.lastReviewedAt = now;

    if (rating === 'easy' || rating === 'medium') {
      flashcard.successCount += 1;
    } else if (rating === 'again' || rating === 'hard') {
      flashcard.failCount += 1;
    }

    flashcard.reviewDueDate = calculateNextReviewDate(
      rating,
      now,
      flashcard.successCount
    );

    await flashcard.save();
    res.status(200).json(flashcard);
  } catch (err) {
    res.status(500).json({ message: 'Failed to review flashcard', error: err.message });
  }
};




