import React, { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h3>
      You have completed {completedTodos} out of {totalTodos} To-Do's
    </h3>
  );
}

export { TodoCounter };
