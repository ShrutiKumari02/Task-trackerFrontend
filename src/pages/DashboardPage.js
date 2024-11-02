
// src/pages/DashboardPage.js
// import React, { useState } from 'react';
// import TaskList from '../components/TaskList';
// import TaskForm from '../components/TaskForm';
// import tasksData from '../utils/mockTasks.json'; // Adjust the path if necessary

// const DashboardPage = () => {
//   const [tasks, setTasks] = useState(tasksData); // Initialize tasks state with imported tasks data

//   const handleAddTask = (newTask) => {
//     setTasks([...tasks, newTask]); // Add new task to the tasks state
//   };

//   const handleUpdateTask = (updatedTask) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === updatedTask.id ? updatedTask : task
//     );
//     setTasks(updatedTasks); // Update the task in the tasks state
//   };

//   const handleDeleteTask = (taskId) => {
//     const filteredTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(filteredTasks); // Remove the task from the tasks state
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <TaskForm onAddTask={handleAddTask} /> {/* Pass add task handler to TaskForm */}
//       <TaskList 
//         tasks={tasks} // Pass the tasks data to TaskList
//         onUpdateTask={handleUpdateTask} 
//         onDeleteTask={handleDeleteTask} 
//       />
//     </div>
//   );
// };

// export default DashboardPage;



// src/pages/DashboardPage.js
// src/pages/DashboardPage.js
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import tasksData from '../utils/mockTasks.json'; // Adjust the path if necessary

const DashboardPage = () => {
  const [tasks, setTasks] = useState(tasksData); // Initialize tasks state with imported tasks data

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the tasks state
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks); // Update the task in the tasks state
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks); // Remove the task from the tasks state
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.taskFormContainer}>
        <TaskForm onAddTask={handleAddTask} /> {/* Pass add task handler to TaskForm */}
      </div>
      <div style={styles.taskListContainer}>
        <TaskList 
          tasks={tasks} // Pass the tasks data to TaskList
          onUpdateTask={handleUpdateTask} 
          onDeleteTask={handleDeleteTask} 
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f4f6f8',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  taskFormContainer: {
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  taskListContainer: {
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default DashboardPage;
