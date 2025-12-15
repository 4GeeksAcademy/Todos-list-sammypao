import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../../styles/index.css";
import todoListServices from "../services/todoListServices";

const Home = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    async function getToDoListServices2() {
      const TodosData = await todoListServices.getToDoList();

      setTodos(TodosData.todos);
    }

    getToDoListServices2();
  }, []);

  async function addTodo(inputValue) {
    const newTodo = {
      label: inputValue,
      is_done: false,
    };

    const createdTodo = await todoListServices.postTodoList(newTodo);

    setTodos([...todos, createdTodo]);
  }
 


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
