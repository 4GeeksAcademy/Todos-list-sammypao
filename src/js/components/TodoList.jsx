import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos, onDelete }) => {
  
  if (todos.length === 0) {
    return <p className="empty-message">No tienes tareas todavía</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;