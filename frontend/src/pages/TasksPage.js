import React, { useState, useEffect } from 'react';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Supposons que votre endpoint pour récupérer les tâches soit "/api/tasks"
    fetch('/api/tasks')
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Your Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              {task.title}
              {/* Vous pouvez également afficher d'autres détails sur la tâche ici, comme sa description ou sa date d'échéance. */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksPage;
