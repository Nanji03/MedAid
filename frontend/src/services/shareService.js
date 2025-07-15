import axios from 'axios';

export const createStudySet = async ({ name, owner, flashcardIds }) => {
  const res = await axios.post('http://localhost:5000/api/shared', {
    name,
    owner,
    flashcardIds,
  });
  return res.data;
};

export const addCollaborator = async ({ setId, userId, canEdit }) => {
  const res = await axios.post('http://localhost:5000/api/shared/add-collaborator', {
    setId,
    userId,
    canEdit,
  });
  return res.data;
};

export const getSharedSets = async (userId) => {
  const res = await axios.get(`http://localhost:5000/api/shared/${userId}`);
  return res.data;
};
