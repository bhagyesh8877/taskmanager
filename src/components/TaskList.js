import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markTaskComplete, deleteTask, editTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          markTaskComplete={markTaskComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
