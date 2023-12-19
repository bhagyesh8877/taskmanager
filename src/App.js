import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    saveTasksToLocalStorage(updatedTasks);
  };

  const markTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (taskId, newName, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, name: newName, description: newDescription }
        : task
    );
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            markTaskComplete={markTaskComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
