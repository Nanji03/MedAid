const SharedStudySetView = ({ sets }) => {
  if (sets.length === 0) return <p>No shared sets found.</p>;

  return (
    <div className="grid gap-4">
      {sets.map((set) => (
        <div key={set._id} className="p-4 border rounded shadow">
          <h3 className="text-lg font-bold">{set.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Owner: {set.owner?.name || 'Anonymous'}
          </p>
          <ul className="list-disc pl-4">
            {set.flashcards.map((fc) => (
              <li key={fc._id}>
                <strong>{fc.frontText}</strong> — {fc.backText}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SharedStudySetView;
