import React from 'react';


const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      
      <span onClick={() => onDelete(todo.id)}>
        <i className="fa fa-trash"></i>
      </span>
      {todo.label}
    </li>
  );
};

export default TodoItem;