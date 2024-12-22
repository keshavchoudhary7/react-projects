import React, { useState } from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newTaskText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center py-2 px-4 border-b bg-gray-900 shadow-md rounded-lg mt-4">
      {/* Task Text */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="border p-2 bg-gray-700 text-white rounded-md"
          />
        ) : (
          <span className={task.completed ? 'line-through text-gray-500' : 'text-white'}>{task.text}</span>
        )}
      </div>

      {/* Edit/Delete Buttons */}
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="text-blue-500">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-green-500">Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;
