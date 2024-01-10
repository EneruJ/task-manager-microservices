import React, { useState } from 'react';
import '../style/style.css';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
  
    if (input.length > 2) {
      // Auto-complétion
      fetch(`http://localhost:5000/api/tasks/suggest?term=${encodeURIComponent(input)}`)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data);
        })
        .catch(err => console.error(err));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setLoading(true);
    fetch(`http://localhost:5000/api/tasks/search?query=${encodeURIComponent(suggestion)}&exact=true`)
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
        setSuggestions([]);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };
  
  return (
    <div className="container">
      <div className="content">
        <h1>Liste des tâches</h1>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleInputChange} 
          placeholder="Rechercher des tâches..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map(suggestion => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
        {tasks.length > 0 && (
          <ul>
            {tasks.map(task => (
              <li key={task._id} style={{ marginBottom: '20px' }}>
                <h2>{task.title} {task.completed ? '✅' : '❌'}</h2>
                <p style={{ fontSize: '14px' }}>{task.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TasksPage;