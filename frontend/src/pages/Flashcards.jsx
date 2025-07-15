import FlashcardForm from '../components/FlashcardForm';
import FlashcardList from '../components/FlashcardList';

const Flashcards = () => {
  const userId = '64b7ac172abc123456789abc'; // Replace with real auth later

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Flashcards</h2>
      <FlashcardForm userId={userId} />
      <FlashcardList userId={userId} />
    </div>
  );
};

export default Flashcards;
