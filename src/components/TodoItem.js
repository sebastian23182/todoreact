import React from "react";
import { ReactComponent as Trash} from './TrashIcon.svg'
//import { FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
    return (
        <li className={`Todo-Item ${props.completed && 'Todo-Item--completed'}`} draggable="true" onDragStart={props.onDragS} onDragEnter={props.onDragE} onDragOver={props.onDragO} onDragEnd={props.onDrop}>
            <p className={`Todo-Item-p ${props.completed && 'Todo-Item-p--completed'}`} onPointerUp={props.onComplete}>{props.text}</p>
            <span className={`Todo-Box ${props.completed && 'Todo-Box--completed'}`} onPointerUp={props.onComplete}></span>
            <Trash className={`Icon-delete ${props.completed && 'Icon-delete--completed'}`} onPointerUp={props.onDelete}/>
        </li>
    )
}

export { TodoItem };