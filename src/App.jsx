import { useState } from 'react';
import './App.css';

function Task({ name, onDelete }) {
  return (
    <li className="task-item">
      <span>{name}</span>

      <button className="delete-button" onClick={onDelete}>
        Remove
      </button>
    </li>
  );
}

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();

    if (taskText.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskText,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  function removeTask(taskId) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== taskId
    );

    setTasks(updatedTasks);
  }

  return (
  <main className="app">
    <section className="todo-container">
      <h1>My To-Do List</h1>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Enter a task"
        />

        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            onDelete={() => removeTask(task.id)}
          />
        ))}
      </ul>
    </section>
  </main>
);
}

export default App;