import React, { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <div className="container">
      <h1>What's Up! 😎</h1>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export { AppUI };
