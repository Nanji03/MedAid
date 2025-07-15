import LectureNoteUpload from '../components/LectureNoteUpload';

const Notes = () => {
  const userId = '64b7ac172abc123456789abc'; // Replace with real auth logic

  return (
    <div className="p-4">
      <LectureNoteUpload userId={userId} />
    </div>
  );
};

export default Notes;
