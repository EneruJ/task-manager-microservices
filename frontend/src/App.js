import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tasks" component={TasksPage} />
        {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
      </Switch>
    </Router>
  );
}

export default App;
