async function getToDoList() {
    // Petición a la API usando fetch
  const response = await fetch(
    "https://playground.4geeks.com/todo/users/Shammy",
    {
      method: "GET",
    }
  );

  // Respuesta a .JSON
  const data = await response.json();

  
  return data;
}

async function postTodoList(todos) {

    const response = await fetch('https://playground.4geeks.com/todo/todos/Shammy', {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();

    return data;
}

async function deleteTodoList(todo) {

    const response = await fetch(`https://playground.4geeks.com/todo/todos/Shammy/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();

    return data;
}

const todoListServices = {
    getToDoList,
    postTodoList,
    deleteTodoList
};


export default todoListServices;