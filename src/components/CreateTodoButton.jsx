import React from "react";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button className="btn-add" onClick={() => onClickButton("Holiii")}>
      +
    </button>
  );
}

export { CreateTodoButton };
