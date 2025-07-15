import ReviewMode from '../components/ReviewMode';

const Review = () => {
  const userId = '64b7ac172abc123456789abc'; // Replace with real user logic later
  return (
    <div className="p-4">
      <ReviewMode userId={userId} />
    </div>
  );
};

export default Review;
