import TodoContext from '../context/TodoContext';
import { useContext } from 'react';
import TodoTask from './TodoTask';

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <>

      {todos.map((todo, index) => {
        return <TodoTask task={todo} key={index} index={index}/>;
      })}

    </>
  )
}

export default TodoList;
