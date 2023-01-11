import React from "react";

function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="btn-add" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
