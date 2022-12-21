import React from "react";

function TodoItem(props) {
    return (
        <li className="list-item">
            <div className={`item-c ${props.completed && 'completed'}`}></div>
            <p className={`item-p ${props.completed && 'item-completed'}`}>{props.text}</p>
            <span className="item-x">❌</span>
        </li>
    )
}

export { TodoItem };