import React from "react";

function TodosLoading() {
    return (
    <React.Fragment>
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    </React.Fragment> 
    )
}

export { TodosLoading };