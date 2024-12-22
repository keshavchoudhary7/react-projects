import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
