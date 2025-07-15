const StudyPlan = require('../models/StudyPlan');
const generateSchedule = require('../utils/scheduleGenerator');

exports.createStudyPlan = async (req, res) => {
  try {
    const { user, courseName, topics, examDate, startDate } = req.body;

    const schedule = generateSchedule(topics, startDate, examDate);

    const newPlan = await StudyPlan.create({
      user,
      courseName,
      topics,
      examDate,
      startDate,
      schedule
    });

    res.status(201).json(newPlan);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create study plan', error: err.message });
  }
};

exports.getStudyPlans = async (req, res) => {
  try {
    const plans = await StudyPlan.find({ user: req.params.userId });
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch study plans', error: err.message });
  }
};
