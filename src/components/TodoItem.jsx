import React from "react";

function TodoItem(props) {
  return (
    <li className="list-item">
      <div
        className={`item-c ${props.completed && "completed"}`}
        onClick={props.onCompleted}
      ></div>
      <p className={`item-p ${props.completed && "item-completed"}`}>
        {props.text}
      </p>
      <span className="item-x" onClick={props.onDeleted}>
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
