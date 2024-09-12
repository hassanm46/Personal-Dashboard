import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personal Dashboard</h1>
        <nav>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </nav>
      </header>
      <main className="flex flex-1">
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;