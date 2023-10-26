import {useState, useContext  } from "react";
import TodoContext from "../context/TodoContext";


function TodoForm() {
const {addTodo} = useContext(TodoContext)

const [value,setValue] = useState('')

const todotaskHandler= (e)=>{
    e.preventDefault();




    addTodo(value)
    setValue("")
}


    return <div className="container">
    
   
     <form className="todoform" onSubmit={todotaskHandler}>
        
        <div className="input">
            <input onChange={(e) => setValue (e.target.value)} type="text" value={value} placeholder="Enter your Task"/>
            <button className="btn-1" type="submit">Send</button>
        
            
        </div>
            </form>
        

    </div>
}

export default TodoForm;