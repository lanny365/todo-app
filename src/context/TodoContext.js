import { createContext, useState } from 'react';
import { v4 } from 'uuid';

const TodoContext = createContext();

// provider
export const TodoProvider = ({ children }) => {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos([...todos, { id: v4(), task: todo}]);
  };

  function deleteHandler(index) {
    let todo = todos;
    todo.splice(index, 1);
    SetTodos([...todo]);
  }

  const contextObj = {
    todos,
    addTodo,
    deleteHandler,
  };

  return (
    <TodoContext.Provider value = {contextObj}>
      {children}
    </TodoContext.Provider>
  )
  
};

export default TodoContext;
