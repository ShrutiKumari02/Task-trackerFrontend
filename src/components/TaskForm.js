// // src/components/TaskForm.js
// import React, { useState } from 'react';

// const TaskForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('');
//   const [status, setStatus] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New task created:", { title, description, priority, status });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Task</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="">Priority</option>
//         <option value="High">High</option>
//         <option value="Medium">Medium</option>
//         <option value="Low">Low</option>
//       </select>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="">Status</option>
//         <option value="Open">Open</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Closed">Closed</option>
//       </select>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;
// src/components/TaskForm.js


// import React, { useState } from 'react';

// const TaskForm = ({ onAddTask }) => { // Changed to match prop name from DashboardPage
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const [status, setStatus] = useState('Open');
//   const [assignee, setAssignee] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create a new task object, including a generated ID
//     const newTask = { 
//       id: Date.now(), // Simple unique ID generator
//       title, 
//       description, 
//       priority, 
//       status, 
//       assignee, 
//       date 
//     };

//     onAddTask(newTask); // Call the function passed from DashboardPage
//     // Reset form fields
//     setTitle('');
//     setDescription('');
//     setPriority('Medium');
//     setStatus('Open');
//     setAssignee('');
//     setDate('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="Open">Open</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//       </select>
//       <input type="text" placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} required />
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//       <button type="submit">Create Task</button>
//     </form>
//   );
// };

// export default TaskForm;

// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Open');
  const [assignee, setAssignee] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = { 
      id: Date.now(),
      title, 
      description, 
      priority, 
      status, 
      assignee, 
      date 
    };

    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('Open');
    setAssignee('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={styles.textarea}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={styles.select}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={styles.select}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Create Task</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    minHeight: '80px',
  },
  select: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default TaskForm;


