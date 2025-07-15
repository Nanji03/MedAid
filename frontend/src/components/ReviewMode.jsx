import { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewMode = ({ userId }) => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDueFlashcards = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/flashcards/${userId}`);
        const dueToday = res.data.filter(card => new Date(card.reviewDueDate) <= new Date());
        setCards(dueToday);
      } catch (err) {
        console.error('Error fetching flashcards:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDueFlashcards();
  }, [userId]);

  const handleRating = async (rating) => {
    const currentCard = cards[index];

    try {
      await axios.post(`http://localhost:5000/api/flashcards/review/${currentCard._id}`, { rating });
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setShowAnswer(false);
    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };

  if (loading) return <p>Loading review session...</p>;
  if (cards.length === 0) return <p>No flashcards due for review today 🎉</p>;
  if (index >= cards.length) return <p>✅ Review complete! You studied {cards.length} cards.</p>;

  const card = cards[index];

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Review Mode</h2>
      <div className="text-lg font-semibold mb-2">{card.frontText}</div>

      {showAnswer ? (
        <>
          <p className="text-gray-700 mb-4">{card.backText}</p>
          <div className="flex justify-center gap-2">
            {['again', 'hard', 'medium', 'easy'].map(rating => (
              <button
                key={rating}
                onClick={() => handleRating(rating)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                {rating.charAt(0).toUpperCase() + rating.slice(1)}
              </button>
            ))}
          </div>
        </>
      ) : (
        <button onClick={() => setShowAnswer(true)} className="bg-gray-800 text-white px-4 py-2 rounded">
          Show Answer
        </button>
      )}
    </div>
  );
};

export default ReviewMode;
