function calculateNextReviewDate(rating, lastReviewDate = new Date(), successCount = 0) {
  let intervalDays = 1;

  switch (rating) {
    case 'again':
      intervalDays = 0; // review again in same session
      break;
    case 'hard':
      intervalDays = 1;
      break;
    case 'medium':
      intervalDays = 3;
      break;
    case 'easy':
      intervalDays = Math.min(30, 5 + successCount * 2); // exponential spacing
      break;
    default:
      intervalDays = 1;
  }

  const nextDate = new Date(lastReviewDate);
  nextDate.setDate(nextDate.getDate() + intervalDays);

  return nextDate;
}

module.exports = calculateNextReviewDate;
// backend/utils/spacedRepetition.js