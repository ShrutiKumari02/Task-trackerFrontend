import React from 'react';
import { Line } from 'react-chartjs-2';

const TrendLine = ({ taskData }) => {
  const dates = taskData.map(task => task.date);
  const concurrentTasks = dates.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(concurrentTasks),
    datasets: [
      {
        label: 'Concurrent Tasks per Day',
        data: Object.values(concurrentTasks),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

export default TrendLine;
