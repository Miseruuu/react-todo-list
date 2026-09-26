import { useState } from 'react';
import './App.css';

function Task({ name, del }) {
  return (
    <li className="task">
      <span>{name}</span>

      <button className="delete" onClick={del}>
        Remove
      </button>
    </li>
  );
}


function App() {
  const [input, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  function add(event) {
    //prevents page from reloading every input
    event.preventDefault();

    if (input.trim() === '') {
      return;
    }

    const newTask = {
      id: Math.random(),
      name: input,
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

  function remove(taskId) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== taskId
    );

    setTasks(updatedTasks);
  }

  return (
  <main className="app">
    <section className="todo">
      <h1>My To-Do List</h1>

      <form className="form" onSubmit={add}>
        <input
          type="text"
          value={input}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter a task"
        />

        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            del={() => remove(task.id)}
          />
        ))}
      </ul>
    </section>
  </main>
);
}

export default App;