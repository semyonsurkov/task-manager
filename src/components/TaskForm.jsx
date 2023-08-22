import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim()) {
      const newTask = {
        id: new Date().getTime(),
        title: task,
        completed: false,
      };

      onAddTask(newTask);
      setTask('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}
