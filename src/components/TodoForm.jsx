import React, { useContext, useState } from "react";
import { TodoContext } from "../utils/TodoContext";

const TodoForm = () => {
  //Estado para valor del textarea
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (e) => setNewTodoValue(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla del almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
