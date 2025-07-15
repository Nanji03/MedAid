const express = require('express');
const router = express.Router();
const { createStudyPlan, getStudyPlans } = require('../controllers/studyPlanController');

router.post('/', createStudyPlan);
router.get('/:userId', getStudyPlans);

module.exports = router;
