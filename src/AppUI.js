import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <div className="container">
            <h1>What's Up! 😎</h1>
            <TodoCounter complete={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map(todo => (
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