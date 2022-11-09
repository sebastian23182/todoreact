import React from "react";
import { ReactComponent as Effect} from './onEmptyTodo.svg'

function EmptyTodos() {
    return (
        <React.Fragment>
            <Effect className="EmptyTodos"/>
            <h1 className="CreateFirstTodo">Create your first TODO!</h1>
        </React.Fragment>
    )
}

export { EmptyTodos };