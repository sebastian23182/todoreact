import React from "react";
/*import { GiNotebook } from "react-icons/gi";*/

function TodoCounter({totalTodos, completedTodos, loading}) {
    return (
        <React.Fragment>
            <h2 className="Title">toDO 📝 {/*<GiNotebook className="TodoLogo"/>*/}</h2>
            <h2 className={`Tasks ${!!loading && "Tasks--loading"}`}>{completedTodos} completed of {totalTodos}</h2>
        </React.Fragment>       
    )
}

export { TodoCounter };