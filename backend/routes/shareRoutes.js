const express = require('express');
const router = express.Router();
const {
  createStudySet,
  addCollaborator,
  getSharedSets
} = require('../controllers/shareController');

router.post('/', createStudySet);
router.post('/add-collaborator', addCollaborator);
router.get('/:userId', getSharedSets);

module.exports = router;
