import React from "react";
import { TodoProvider } from "./utils/TodoContext";
import { AppUI } from "./components/AppUI";

//Lista falsa de TODOs
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALAL', completed: false },
] */

function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;