import { useEffect, useState } from 'react';
import { getSharedSets } from '../services/shareService';
import SharedStudySetView from '../components/SharedStudySetView';

const SharedSets = () => {
  const userId = '64b7ac172abc123456789abc'; // Replace with real logic
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const shared = await getSharedSets(userId);
      setSets(shared);
    };
    fetch();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shared Study Sets</h2>
      <SharedStudySetView sets={sets} />
    </div>
  );
};

export default SharedSets;
