function generateSchedule(topics, startDate, examDate) {
  const schedule = [];
  const start = new Date(startDate);
  const end = new Date(examDate);
  const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const gap = Math.max(1, Math.floor(totalDays / topics.length));

  topics.forEach((topic, index) => {
    const day = new Date(start);
    day.setDate(day.getDate() + index * gap);
    if (day <= end) {
      schedule.push({ topic, date: day });
    }
  });

  return schedule;
}

module.exports = generateSchedule;
