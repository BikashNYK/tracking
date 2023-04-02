import './App.css';
import React from 'react';
import Project from './components/Projects/Project';
import Tasks from './components/Tasks/Tasks';

function App() {


  return (
    <div className="App">
      <h1>Time Tracking Application</h1>
      <Project />
      <Tasks />
    </div>
  );
}

export default App;
