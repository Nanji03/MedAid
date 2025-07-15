const StudyPlanTimeline = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold mb-2">{plan.courseName} Study Plan</h3>
      <ul className="list-disc pl-4 space-y-1">
        {plan.schedule.map((item, idx) => (
          <li key={idx}>
            <strong>{new Date(item.date).toLocaleDateString()}:</strong> {item.topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPlanTimeline;
