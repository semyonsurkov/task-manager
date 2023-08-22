import TaskItem from './TaskItem';

export default function TaskList({ tasks, onTaskRemove }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemove={() => onTaskRemove(task.id)}
        />
      ))}
    </div>
  );
}
