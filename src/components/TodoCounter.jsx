import React, { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h3>
      Has completado {completedTodos} de {totalTodos} To Do's
    </h3>
  );
}

export { TodoCounter };
