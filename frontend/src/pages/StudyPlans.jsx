import { useState, useEffect } from 'react';
import StudyPlanForm from '../components/StudyPlanForm';
import StudyPlanTimeline from '../components/StudyPlanTimeline';
import { getStudyPlans } from '../services/studyPlanService';
import StudyCalendar from '../components/StudyCalendar';

{plans.map(plan => (
  <div key={plan._id}>
    <StudyPlanTimeline plan={plan} />
    <StudyCalendar plan={plan} />
  </div>
))
}

const StudyPlans = () => {
  const userId = '64b7ac172abc123456789abc';
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const userPlans = await getStudyPlans(userId);
      setPlans(userPlans);
    };
    fetchPlans();
  }, []);

  const handleNewPlan = (plan) => {
    setPlans([...plans, plan]);
  };

  return (
    <div className="p-4">
      <StudyPlanForm userId={userId} onPlanCreated={handleNewPlan} />
      {plans.length > 0 && (
        <div className="space-y-6">
          {plans.map(plan => (
            <StudyPlanTimeline key={plan._id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyPlans;
