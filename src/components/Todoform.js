import React from "react";
import { useState } from "react";
import './Todoform.css'

function Todoform({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});

  function clickAddFunction(event) {
    event.preventDefault();
    setTodo({name:"",done:false});
    if(todo.name === ""){
      alert("Please enter your task before add..");
    }else{setTodos([...todos, todo]);}
    
  }
  
   

  return (
    <div className="todo-background">
      <form className="todo-input-division">
        <input className="todo-input" placeholder="Enter your Task.."
          type="text"
          onChange={(e) => setTodo({name:e.target.value, done: false})}
          value={todo.name}
        />
        <button className="add-button" onClick={clickAddFunction}>Add</button>
      </form>
    </div>
  );
}


export default Todoform;
