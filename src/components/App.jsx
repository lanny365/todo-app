import TodoForm from './TodoForm';
import TodoSummary from './TodoSummary';
import TodoList from './Todolist';
import { TodoProvider } from '../context/TodoContext';

function App() {
  return (
    <>
        <TodoProvider>
            <div className="todoCard">
                <TodoSummary />
                <h1>TASK TODO LIST</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    </>
  );
}

export default App;
