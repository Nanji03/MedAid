import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // adjust path as needed

const FlashcardForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    frontText: '',
    backText: '',
    tags: '',
    image: null,
    audio: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image' || e.target.name === 'audio') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('frontText', formData.frontText);
    data.append('backText', formData.backText);
    data.append('tags', formData.tags);
    data.append('user', userId);
    if (formData.image) data.append('image', formData.image);
    if (formData.audio) data.append('audio', formData.audio);

    try {
      const res = await axios.post('http://localhost:5000/api/flashcards', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Flashcard created!');
    } catch (err) {
      console.error(err);
      alert('Error creating flashcard.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input type="text" name="frontText" placeholder="Question" onChange={handleChange} required className="block w-full mb-2" />
      <input type="text" name="backText" placeholder="Answer" onChange={handleChange} required className="block w-full mb-2" />
      <input type="text" name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} className="block w-full mb-2" />
      <input type="file" name="image" accept="image/*" onChange={handleChange} className="block mb-2" />
      <input type="file" name="audio" accept="audio/*" onChange={handleChange} className="block mb-2" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Create Flashcard</button>
    </form>
  );
};

export default FlashcardForm;
