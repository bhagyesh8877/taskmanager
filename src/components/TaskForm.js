import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      alert('Please enter a task name.'); 
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      description: taskDescription, 
      completed: false,
    };
    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          className="form-control"
          id="taskName"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Task Description</label>
        <textarea
          className="form-control"
          id="taskDescription"
          rows="3"
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
