import { useState } from "react"
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import Footer from "./Footer";



export default function Todo(){
   
    const [todos,setTodos] = useState([]);
    const completedTasks = todos.filter((todo)=>todo.done).length
    const totalTasks=todos.length;
    const inCompletedTasks = totalTasks - completedTasks;
    return(
        <div className="todo-container">
            <Todoform todos={todos} setTodos={setTodos}/>
            <Todolist todos={todos}  setTodos={setTodos}/>
            <Footer completedtasks={completedTasks} incompletedtasks={inCompletedTasks} totaltasks={totalTasks}/>
            
            
        </div>
    )
}