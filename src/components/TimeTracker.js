import React, { useState, useEffect } from 'react';

const TimeTracker = ({ task, onUpdateTime }) => {
  const [timerActive, setTimerActive] = useState(false);
  const [timeSpent, setTimeSpent] = useState(task.timeSpent || 0);

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => setTimeSpent(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive]);

  const handleStartStop = () => {
    setTimerActive(!timerActive);
    if (timerActive) {
      onUpdateTime(task.id, timeSpent);
    }
  };

  return (
    <div>
      <p>Time Spent: {timeSpent}s</p>
      <button onClick={handleStartStop}>{timerActive ? 'Stop' : 'Start'} Timer</button>
    </div>
  );
};

export default TimeTracker;
