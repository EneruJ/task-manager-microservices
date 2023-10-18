import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/tasks" element={<TasksPage />} />
</Routes>
    </Router>
  );
}

export default App;
