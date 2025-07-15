// backend/models/Flashcard.js
const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  frontText: { type: String, required: true },
  backText: { type: String, required: true },
  image: { type: String, default: null }, // Can store a URL or base64 string
  audio: { type: String, default: null },
  tags: [String],
  reviewDueDate: { type: Date, default: Date.now },
  successCount: { type: Number, default: 0 },
  failCount: { type: Number, default: 0 },
  lastReviewedAt: { type: Date, default: null },
 // For spaced repetition
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Flashcard', flashcardSchema);
