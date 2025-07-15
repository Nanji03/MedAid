
const mongoose = require('mongoose');

const studySetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flashcard' }],
  collaborators: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    canEdit: { type: Boolean, default: false }
  }],
  isPublic: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('StudySet', studySetSchema);
