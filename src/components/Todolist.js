import React from 'react'
import './Todolist.css'


function Todolist({todos,setTodos}) {
  
  function handleDelete(item) {
   setTodos(todos.filter((todo) => todo !== item));

  }
  function handleClick(name) {
    const newArray =todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done}: todo );
    setTodos(newArray);
  }
 
    
  return (
    <div className='todolist-container'>
      <ul className='todolist'>{todos.map(item => (
        <li className="todolist-content" key={item}>
          <p className={item.done ? 'task-content strikeLine' : "task-content"} 
 onClick={() => handleClick(item.name)} ><b>Task: </b> {item.name}</p>
          <button onClick={() => handleDelete(item)} className ="delete-button">Delete</button><hr/>
        </li>))}
       
      </ul>
        </div>
  )
}

export default Todolist

