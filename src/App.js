import React, { useState } from "react";
import { AppUI } from "./components/AppUI";

//Lista falsa de TODOs
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Hacer el sprint', completed: false },
  { text: 'Comprar papas', completed: false },
  { text: 'Jugar los sims', completed: false },
  { text: 'Lavar la loza', completed: false },
  { text: 'LALALAL', completed: false },
] */

function App() {
  //Traer todos del local storage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  //si localstorage es nulo o vacio
  if (!localStorageTodos) {
    //crea un array vacio
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    //parse los todos del local
    parsedTodos = JSON.parse(localStorageTodos);
  }



  //Estado para el array de objetos todo
  const [todos, setTodos] = useState(parsedTodos);

  //Estado para TodoSearch
  const [searchValue, setSearchValue] = useState("");

  //Buscador
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  //Contar todos
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  //Guardar los cambios al localstorage y renderizar de nuevo
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  //Completar todos
  const completeTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    saveTodos(newTodos);
  }

  //Eliminar todos
  const deleteTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;