import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const StudyCalendar = ({ plan }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!plan) return null;

  // Create a map of dates and topics
  const scheduleMap = plan.schedule.reduce((acc, item) => {
    const dateKey = new Date(item.date).toDateString();
    acc[dateKey] = acc[dateKey] ? [...acc[dateKey], item.topic] : [item.topic];
    return acc;
  }, {});

  const renderStudyTopics = () => {
    const dateKey = selectedDate.toDateString();
    return scheduleMap[dateKey] ? (
      <ul className="list-disc pl-4 mt-2">
        {scheduleMap[dateKey].map((topic, i) => <li key={i}>{topic}</li>)}
      </ul>
    ) : (
      <p className="mt-2 text-gray-600">No topics scheduled for this day.</p>
    );
  };

  return (
    <div className="p-4 border rounded shadow mt-6">
      <h3 className="text-lg font-bold mb-2">{plan.courseName} Calendar</h3>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="mt-4">{renderStudyTopics()}</div>
    </div>
  );
};

export default StudyCalendar;
