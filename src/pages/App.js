import React from "react";
import "./App.css";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosError } from "../components/TodoError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";
import { EmptySearchResults } from "../components/EmptySearchResults";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../modal/Modal";

function App() {
  const { states, stateUpdaters, } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    draggedItem,
    overItem,
  } = states;

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    handleSort,
    dragStart,
    dragEnter,
    dragOver,
  } = stateUpdaters;

return (
<React.Fragment>
  <div className="Container">
  <TodoHeader loading={loading}>
    <TodoCounter
    totalTodos={totalTodos}
    completedTodos={completedTodos}/>
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}/>
  </TodoHeader>

  <TodoList 
    error={error}
    loading={loading}
    searchedTodos={searchedTodos}
    totalTodos={totalTodos} 
    onError={() => <TodosError/>}
    onLoading={() => new Array(5).fill(1).map((a,i) => <TodosLoading key={i}/>)}
    onEmptyTodos={() => <EmptyTodos/>}
    onEmptySearchResults={() => <EmptySearchResults searchText={searchValue}/>}
    render={(todo) =>(
    <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={(e) => deleteTodo(e,todo.text)}
      onDragS={(e) => draggedItem.current = dragStart(e, todo)}
      onDragE={(e) => overItem.current = dragEnter(e, todo)}
      onDragO={(e) => dragOver(e)}
      onDrop={() => handleSort(draggedItem, overItem)}
    />
  )}
  />
  
  {!!openModal && (
    <Modal>
      <div className="InvisibleContainer" onPointerUp={(e) => setOpenModal(false)}></div>
      <TodoForm 
      addTodo={addTodo}
      setOpenModal={setOpenModal}
      />
    </Modal>
  )}
  <CreateTodoButton 
  setOpenModal={setOpenModal}/>
  </div>
</React.Fragment>  
);
}

export default App;

