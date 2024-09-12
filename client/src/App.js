import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Personal Dashboard</h1>
        <nav>
          <Link to="/">Home</Link>
          {/* Add more navigation links as you create more pages */}
        </nav>
      </header>
      <main>
        <Sidebar />
        <section>
          {/* Main content will go here */}
        </section>
      </main>
    </div>
  );
}

export default App;