import React, { useState } from "react";
import { AppUI } from "./AppUI";

//Lista falsa de TODOs
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Hacer el sprint', completed: false },
  { text: 'Comprar papas', completed: false },
  { text: 'Jugar los sims', completed: false },
  { text: 'Lavar la loza', completed: false },
  { text: 'LALALAL', completed: false },
]

function App() {
  //Estado para el array de objetos todo
  const [todos, setTodos] = useState(defaultTodos);

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

  //Completar todos
  const completeTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    setTodos(newTodos);
  }

  //Eliminar todos
  const deleteTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    setTodos(newTodos);
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