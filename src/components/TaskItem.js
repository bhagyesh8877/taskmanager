import React, { useState } from 'react';

const TaskItem = ({ task, markTaskComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(
    task.description
  );
  const [isFadeOut, setIsFadeOut] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedTaskName.trim() === '') {
      alert('Please enter a task name.'); 
      return;
    }
    editTask(task.id, editedTaskName, editedTaskDescription);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTaskName(task.name);
    setEditedTaskDescription(task.description);
    setIsEditing(false);
  };

  const handleMarkComplete = () => {
    setIsFadeOut(true);
    setTimeout(() => {
      markTaskComplete(task.id);
    }, 300); 
  };

  return (
    <li className={`list-group-item ${isFadeOut ? 'fade-out' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleMarkComplete()}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
          <textarea
            className="form-control mt-2"
            rows="3"
            value={editedTaskDescription}
            onChange={(e) => setEditedTaskDescription(e.target.value)}
          />
          <button className="btn btn-success btn-sm mt-2" onClick={handleSaveEdit}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm mt-2 ml-2" onClick={handleCancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h5 className={`mb-2 ${task.completed ? 'completed' : ''}`}>
            {task.name}
          </h5>
          <p className="mb-2">{task.description}</p>
          <button className="btn btn-primary btn-sm mr-2" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
