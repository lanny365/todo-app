import { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoTask({ task}) {
  const { deleteHandler } = useContext(TodoContext);
  const [isDone, setIsDone] = useState(false)

  function strikeHandler() {
    setIsDone(isDone=>!isDone);
  }

  return (
    <div className="todoTask">
      {<h2 className={isDone ? "strike-through" :null}> {task.task}</h2>}
      <div>
        <button className="btn-2" onClick={strikeHandler}>
          Done
        </button>
        <button className="btn-3" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoTask;
