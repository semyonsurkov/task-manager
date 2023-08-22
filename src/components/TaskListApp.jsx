import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function TaskListApp() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([newTask, ...tasks]);
  }

  function removeTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const areTasksRemaining = tasks.length > 0;

  return (
    <div>
      <h3>Task List</h3>
      <TaskForm onAddTask={addTask} />
      {areTasksRemaining && (
        <TaskList tasks={tasks} onTaskRemove={removeTask} />
      )}
      {areTasksRemaining && (
        <button onClick={() => setTasks([])} className="clear-button">
          Clear
        </button>
      )}
    </div>
  );
}
