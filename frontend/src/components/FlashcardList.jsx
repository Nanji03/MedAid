import { useEffect, useState } from 'react';
import axios from 'axios';

const FlashcardList = ({ userId }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editedCard, setEditedCard] = useState({ frontText: '', backText: '' });

  const fetchFlashcards = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/flashcards/${userId}`);
      setFlashcards(res.data);
    } catch (err) {
      console.error('Error fetching flashcards:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchFlashcards();
  }, [userId]);

  const deleteFlashcard = async (id) => {
    if (!window.confirm('Are you sure you want to delete this flashcard?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/flashcards/${id}`);
      setFlashcards(flashcards.filter((card) => card._id !== id));
    } catch (err) {
      console.error('Error deleting flashcard:', err);
    }
  };

  const startEdit = (card) => {
    setEditingId(card._id);
    setEditedCard({ frontText: card.frontText, backText: card.backText });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/flashcards/${id}`, editedCard);
      setEditingId(null);
      fetchFlashcards();
    } catch (err) {
      console.error('Error updating flashcard:', err);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedCard({ frontText: '', backText: '' });
  };

  if (loading) return <p>Loading flashcards...</p>;
  if (flashcards.length === 0) return <p>No flashcards found.</p>;

  return (
    <div className="grid gap-4 mt-4">
      {flashcards.map((card) => (
        <div key={card._id} className="p-4 border rounded shadow">
          {editingId === card._id ? (
            <>
              <input
                className="mb-2 w-full border p-2"
                value={editedCard.frontText}
                onChange={(e) => setEditedCard({ ...editedCard, frontText: e.target.value })}
              />
              <input
                className="mb-2 w-full border p-2"
                value={editedCard.backText}
                onChange={(e) => setEditedCard({ ...editedCard, backText: e.target.value })}
              />
              <div className="flex gap-2">
                <button onClick={() => saveEdit(card._id)} className="bg-green-600 text-white px-2 py-1 rounded">Save</button>
                <button onClick={cancelEdit} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-lg mb-2">{card.frontText}</h3>
              <p className="text-gray-700">{card.backText}</p>
              {card.image && (
                <img
                  src={`http://localhost:5000/${card.image}`}
                  alt="flashcard visual"
                  className="mt-2 max-w-xs"
                />
              )}
              {card.audio && (
                <audio controls className="mt-2">
                  <source src={`http://localhost:5000/${card.audio}`} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              )}
              {card.tags?.length > 0 && (
                <div className="mt-2 text-sm text-blue-600">
                  Tags: {card.tags.join(', ')}
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <button onClick={() => startEdit(card)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => deleteFlashcard(card._id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
