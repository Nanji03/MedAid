const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseName: { type: String, required: true },
  topics: [{ type: String }],
  examDate: { type: Date, required: true },
  startDate: { type: Date, required: true },
  schedule: [
    {
      date: { type: Date },
      topic: { type: String },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('StudyPlan', studyPlanSchema);
