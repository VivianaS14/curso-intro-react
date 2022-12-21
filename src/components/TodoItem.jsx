import React from "react";

function TodoItem(props) {
  const onCompleted = () => {
    alert("Ya completaste el to do " + props.text);
  };

  const onDeleted = () => {
    alert("Eliminaste el to do " + props.text);
  };

  return (
    <li className="list-item">
      <div
        className={`item-c ${props.completed && "completed"}`}
        onClick={onCompleted}
      ></div>
      <p className={`item-p ${props.completed && "item-completed"}`}>
        {props.text}
      </p>
      <span className="item-x" onClick={onDeleted}>
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
