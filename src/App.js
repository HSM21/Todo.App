import React from 'react'
import Todo from './components/Todo'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Todo/>  
      <div>Hello</div>
    </div>
  );
}

export default App;
