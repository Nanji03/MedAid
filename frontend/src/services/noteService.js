import axios from 'axios';

export const uploadLectureNote = async (file) => {
  const formData = new FormData();
  formData.append('note', file);

  const res = await axios.post('http://localhost:5000/api/notes/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return res.data.flashcards;
};
