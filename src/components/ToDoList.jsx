import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    // Prevent adding an empty task
    if (!newTaskText.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTaskText(''); // Reset input field
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTask = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <>
      <h1 className='text-center text-gray-50 pt-10 font-extrabold text-4xl'>Your Daily Task Manager</h1>
      <div className="container mx-auto mt-8 p-4">
        
        {/* Card Style Container for Input Field */}
        <div className="max-w-md mx-auto bg-gray-900 shadow-2xl rounded-lg p-6">
          <div className="flex mb-4">
            {/* Input Field */}
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#F72C5B] text-white bg-gray-700"
              placeholder="Add a new task..."
            />
            <button
              onClick={addTask}
              className="bg-[#F72C5B] text-white px-4 py-2 ml-2 rounded-md hover:bg-[#F72C5B]/90"
            >
              Add Task
            </button>
          </div>
        </div>
  
        {/* To-Do List */}
        <div>
          {todos.map(task => (
            <ToDoItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
