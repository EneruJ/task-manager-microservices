import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/tasks" component={TasksPage} />
        {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;
