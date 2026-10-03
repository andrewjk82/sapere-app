import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import SprintHub from './sprint/SprintHub';
import SprintRunner from './sprint/SprintRunner';
import { markSprintIntroSeen } from '../services/timesTableSprintService';
import './sprint/sprint.css';

/**
 * Daily Challenge tab: the five-sprint hub, or one sprint's run once a card
 * is picked. `key={typeId}` gives every sprint a fresh runner (its own board,
 * listener and state).
 */
const TimesTableSprint = ({ onBack, setIsLocked, onQuizActiveChange }) => {
  const { user, isAdmin } = useAuth();
  const [typeId, setTypeId] = useState(null);

  // Clears the dashboard card's "New" badge the first time the tab opens.
  useEffect(() => { if (!isAdmin) markSprintIntroSeen(user?.uid); }, [user?.uid, isAdmin]);

  if (!typeId) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="app-page">
        <SprintHub uid={user?.uid} onPick={setTypeId} onBack={onBack} />
      </motion.div>
    );
  }
  return (
    <SprintRunner
      key={typeId}
      typeId={typeId}
      onBack={() => setTypeId(null)}
      setIsLocked={setIsLocked}
      onQuizActiveChange={onQuizActiveChange}
    />
  );
};

export default TimesTableSprint;
