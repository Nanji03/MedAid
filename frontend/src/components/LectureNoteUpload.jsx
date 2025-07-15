import { useState } from 'react';
import { uploadLectureNote } from '../services/noteService';

const LectureNoteUpload = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file.");

    setLoading(true);
    try {
      const parsedCards = await uploadLectureNote(selectedFile);
      setFlashcards(parsedCards);
    } catch (err) {
      console.error(err);
      alert("Failed to parse lecture note.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (card) => {
    try {
      const res = await fetch('http://localhost:5000/api/flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...card, tags: ['autogen'], user: userId }),
      });

      if (!res.ok) throw new Error('Save failed');
      alert('Flashcard saved!');
    } catch (err) {
      console.error(err);
      alert('Error saving flashcard.');
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Lecture Note</h2>
      <input type="file" accept=".txt,.pdf,.docx" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-4 bg-blue-600 text-white px-4 py-1 rounded">
        Upload & Generate
      </button>

      {loading && <p className="mt-4">Processing note...</p>}

      {flashcards.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Generated Flashcards:</h3>
          <div className="grid gap-4">
            {flashcards.map((card, i) => (
              <div key={i} className="border p-3 rounded">
                <label className="block text-sm font-semibold">Question</label>
                <input
                  type="text"
                  value={card.frontText}
                  onChange={(e) => {
                    const copy = [...flashcards];
                    copy[i].frontText = e.target.value;
                    setFlashcards(copy);
                  }}
                  className="w-full border p-1 mb-2"
                />
                <label className="block text-sm font-semibold">Answer</label>
                <input
                  type="text"
                  value={card.backText}
                  onChange={(e) => {
                    const copy = [...flashcards];
                    copy[i].backText = e.target.value;
                    setFlashcards(copy);
                  }}
                  className="w-full border p-1 mb-2"
                />
                <button
                  onClick={() => handleSave(card)}
                  className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureNoteUpload;
