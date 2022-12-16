import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

//Lista falsa de TODOs
const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALAL', completed: false },
]

function App() {
  return (
    // Etiqueta invisible
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
