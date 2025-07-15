import { useState } from 'react';
import { createStudyPlan } from '../services/studyPlanService';

const StudyPlanForm = ({ userId, onPlanCreated }) => {
  const [courseName, setCourseName] = useState('');
  const [topicsText, setTopicsText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [examDate, setExamDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const topics = topicsText.split('\n').map(t => t.trim()).filter(Boolean);

    const payload = { user: userId, courseName, topics, startDate, examDate };

    try {
      const newPlan = await createStudyPlan(payload);
      onPlanCreated(newPlan); // send back to parent
    } catch (err) {
      console.error(err);
      alert('Failed to create study plan.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Create Study Plan</h2>

      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
        className="block w-full border p-2 mb-3"
      />

      <textarea
        placeholder="Enter one topic per line"
        rows="5"
        value={topicsText}
        onChange={(e) => setTopicsText(e.target.value)}
        required
        className="block w-full border p-2 mb-3"
      />

      <label className="block mb-1">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
        className="mb-3 block border p-2"
      />

      <label className="block mb-1">Exam Date</label>
      <input
        type="date"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
        required
        className="mb-3 block border p-2"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Study Plan
      </button>
    </form>
  );
};

export default StudyPlanForm;
