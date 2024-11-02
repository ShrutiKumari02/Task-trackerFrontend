// // src/components/TaskList.js
// import React, { useState, useEffect } from 'react';
// import tasksData from '../utils/mockTasks.json';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     setTasks(tasksData);
//   }, []);

//   return (
//     <div>
//       <h2>Tasks</h2>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Priority: {task.priority}</p>
//             <p>Status: {task.status}</p>
//             <p>Assignee: {task.assignee}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


// import React, { useState } from 'react';

// const TaskList = ({ tasks = [], onUpdateTask, onDeleteTask }) => {
//   const [filter, setFilter] = useState('');
//   const [sortBy, setSortBy] = useState('priority');

//   const filteredTasks = tasks
//     .filter(task => task.status.includes(filter))
//     .sort((a, b) => {
//       if (sortBy === 'priority') {
//         return a.priority.localeCompare(b.priority);
//       } else if (sortBy === 'status') {
//         return a.status.localeCompare(b.status);
//       }
//       return 0;
//     });

//   return (
//     <div>
//       <select onChange={(e) => setFilter(e.target.value)}>
//         <option value="">All</option>
//         <option value="Open">Open</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//       </select>
//       <select onChange={(e) => setSortBy(e.target.value)}>
//         <option value="priority">Priority</option>
//         <option value="status">Status</option>
//       </select>
//       <ul>
//         {filteredTasks.length === 0 ? (
//           <li>No tasks available.</li>
//         ) : (
//           filteredTasks.map((task) => (
//             <li key={task.id}>
//               <h3>{task.title}</h3>
//               <p>{task.description}</p>
//               <p>Priority: {task.priority}</p>
//               <p>Status: {task.status}</p>
//               <button onClick={() => onUpdateTask(task)}>Edit</button>
//               <button onClick={() => onDeleteTask(task.id)}>Delete</button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks = [], onUpdateTask, onDeleteTask }) => {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('priority');

  const filteredTasks = tasks
    .filter(task => task.status.includes(filter))
    .sort((a, b) => {
      if (sortBy === 'priority') {
        return a.priority.localeCompare(b.priority);
      } else if (sortBy === 'status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  return (
    <div style={styles.taskListContainer}>
      <div style={styles.filterContainer}>
        <select onChange={(e) => setFilter(e.target.value)} style={styles.select}>
          <option value="">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} style={styles.select}>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
        </select>
      </div>
      <ul style={styles.taskList}>
        {filteredTasks.length === 0 ? (
          <li style={styles.noTasks}>No tasks available.</li>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id} style={styles.taskItem}>
              <h3 style={styles.taskTitle}>{task.title}</h3>
              <p style={styles.taskDescription}>{task.description}</p>
              <p style={styles.taskDetails}>Priority: {task.priority}</p>
              <p style={styles.taskDetails}>Status: {task.status}</p>
              <div>
                <button onClick={() => onUpdateTask(task)} style={styles.editButton}>Edit</button>
                <button onClick={() => onDeleteTask(task.id)} style={styles.deleteButton}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  taskListContainer: {
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  select: {
    padding: '0.6rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#f9f9f9',
  },
  taskList: {
    listStyleType: 'none',
    padding: 0,
  },
  noTasks: {
    color: '#888',
    fontStyle: 'italic',
  },
  taskItem: {
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#333',
  },
  taskDescription: {
    color: '#555',
  },
  taskDetails: {
    fontSize: '0.9rem',
    color: '#777',
  },
  editButton: {
    marginRight: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TaskList;
