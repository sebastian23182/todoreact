import React from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal((prevState) => !prevState);
    };

    return ( 
        <AiOutlinePlusCircle className="CreateTodo" onPointerUp={onClickButton}/>
    );
}

export { CreateTodoButton };