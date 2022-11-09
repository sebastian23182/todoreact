import React from "react";

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length >= 1){
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }
    
    return (
        <form className="FormTodo" onSubmit={onSubmit}>
            <label className="FormTitle">Write your new TODO</label>
            <textarea className="FormText" placeholder="Shopping" value={newTodoValue} onChange={onChange}/>
            <div className="Form-ButtonContainer">
                <button className="FormButton FormButton--cancel " onPointerUp={onCancel} type="button" >
                    Cancel
                </button>
                <button className="FormButton FormButton--add" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };