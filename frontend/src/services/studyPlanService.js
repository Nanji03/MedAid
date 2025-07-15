import axios from 'axios';

export const createStudyPlan = async (payload) => {
  const res = await axios.post('http://localhost:5000/api/studyplans', payload);
  return res.data;
};

export const getStudyPlans = async (userId) => {
  const res = await axios.get(`http://localhost:5000/api/studyplans/${userId}`);
  return res.data;
};
