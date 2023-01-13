import React from "react";
import { TiDelete } from "react-icons/ti";

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
      <TiDelete
        className="item-x"
        onClick={props.onDeleted}
        size="2.3em"
        color="#F92F60"
      />
    </li>
  );
}

export { TodoItem };
