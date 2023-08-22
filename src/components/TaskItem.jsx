import { useState } from 'react';

export default function TaskItem({ task, onRemove }) {
  const [isClosed, setIsClosed] = useState(false);

  function handleClose() {
    setIsClosed(true);
    onRemove();
  }

  return (
    !isClosed && (
      <div className="task-item">
        <button onClick={handleClose} className="button-close">
          ❌
        </button>
        <label>{task.title}</label>
      </div>
    )
  );
}
