const StudySet = require('../models/StudySet');
const Flashcard = require('../models/Flashcard');

// Create a new study set
exports.createStudySet = async (req, res) => {
  const { name, owner, flashcardIds } = req.body;

  try {
    const set = await StudySet.create({
      name,
      owner,
      flashcards: flashcardIds
    });
    res.status(201).json(set);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create set', error: err.message });
  }
};

// Share a study set with another user
exports.addCollaborator = async (req, res) => {
  const { setId, userId, canEdit } = req.body;

  try {
    const set = await StudySet.findById(setId);
    set.collaborators.push({ user: userId, canEdit });
    await set.save();
    res.status(200).json(set);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add collaborator', error: err.message });
  }
};

// Get shared/public study sets
exports.getSharedSets = async (req, res) => {
  try {
    const sets = await StudySet.find({
      $or: [
        { isPublic: true },
        { 'collaborators.user': req.params.userId }
      ]
    }).populate('owner flashcards collaborators.user');
    
    res.status(200).json(sets);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch shared sets', error: err.message });
  }
};
