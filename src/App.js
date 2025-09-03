import './App.css';
import Header from "./MyComponents/Header.js";
import {Footer} from "./MyComponents/Footer.js";
import {Todos} from "./MyComponents/Todos.js";
import React, {useState} from 'react';

function App() {
const onDelete = (todo)=>{
  console.log("I am onDelete of todo", todo)
  
  setTodos (todos.filter((e)=>{
    return e !== todo; 
  }))
}

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat"
    }
  ])
  return (
    <>
      <Header title="To-Do-List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;