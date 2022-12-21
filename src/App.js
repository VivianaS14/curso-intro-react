import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

//Lista falsa de TODOs
const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALAL', completed: false },
]

function App() {
  return (
    // Etiqueta invisible
    <div className="container">
      <h1>What's Up! 😎</h1>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;