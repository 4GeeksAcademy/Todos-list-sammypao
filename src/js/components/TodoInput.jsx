import React, { useState } from 'react';


const TodoInput = ({ onAdd }) => {
  
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 
  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Añade una tarea..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default TodoInput;
