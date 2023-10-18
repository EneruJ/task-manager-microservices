import React, { useState, useEffect } from 'react';
import '../style/style.css';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://task-service/api/tasks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        return response.json();
      })
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>Liste des tâches</h1>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {tasks.length === 0 ? (
          <p>Aucune tache disponible.</p>
        ) : (
          <ul>
            {tasks.map(task => (
              <li key={task._id}>
                {task.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TasksPage;
