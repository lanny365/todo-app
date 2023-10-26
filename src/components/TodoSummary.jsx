import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function TodoSummary() {
    const {todos:todoCount} = useContext(TodoContext)

   
   return ( <div>
    <h2>Task Count:{todoCount.length}</h2>
    </div>
     
  );

}

export default TodoSummary;