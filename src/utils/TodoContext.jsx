import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  //usamos el custom hook del local storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //Estado para TodoSearch
  const [searchValue, setSearchValue] = useState("");
  //Estado para abrir el modal
  const [openModal, setOpenModal] = useState(false);

  //Buscador
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Contar todos
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  //Completar todos
  const completeTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    saveTodos(newTodos);
  };

  //Eliminar todos
  const deleteTodo = (text) => {
    //Copia exacta de el array todos
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    //Rerender de los componentes, recibe el nuevo objeto modificado en la propiedad complete
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
