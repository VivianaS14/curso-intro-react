import React from "react";

function TodoItem(props) {
    return (
        <li className="list-item">
            <span className="item-c">⬜</span>
            <p>{props.text}</p>
            <span className="item-x">❌</span>
        </li>
    )
}

export { TodoItem };