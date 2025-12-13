import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";   
import "../../styles/index.css";

const Home = () => {
  
  const [todos, setTodos] = useState([
    { id: 1, text: "Go To matcha" },
    { id: 2, text: "Llevar a tobi al veterinario" },
    { id: 3, text: "Comprar pan" },
  ]);

 
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div id="container">
      <h1>Todo List</h1>
     
      <TodoInput onAdd={addTodo} />

     
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default Home;
