import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){
    const { item: todos, 
        saveItem: saveTodos, 
        loading,
        error, 
      } = useLocalStorage("TODOS_V1", []); 
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false); 
      const completedTodos = todos.filter((todo)=>todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter((todo)=> 
        todo.text.toLowerCase().includes(searchValue.toLowerCase()));
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo)=> todo.text === text)
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed === true){
          newTodos[todoIndex].completed = false;
          saveTodos(newTodos);
        }else{
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
        }   
      }

      const addTodo = (text) => {
        if(!todos.find((item)=> item.text === text)){
          const newTodos = [...todos];
          newTodos.push({
          completed: false,
          text
          })
          saveTodos(newTodos);
        }
      }
    
      const deleteTodo = (e, text) => {
        const time = 300;
        e.target.parentElement.style.transform = 'translateX(-150%)'
        e.target.parentElement.style.opacity = '0';
        e.target.parentElement.style.transition = `${time}ms ease-out`
        setTimeout(() => {
          const todoIndex = todos.findIndex((todo)=> todo.text === text)
          const newTodos = [...todos];
          newTodos.splice(todoIndex, 1);
          saveTodos(newTodos);
        }, time);
      }

      const draggedItem = React.useRef(null);
      const overItem = React.useRef(null);

      const dragStart = (e, target) => {
        return todos.indexOf(target);
      }

      const dragEnter = (e, target) => {
        return todos.indexOf(target);
      }

      const dragOver = (e) => {
        e.preventDefault();
      }

      const handleSort = (draggedItem, overItem) => {
        const newTodos = [...todos];
        const draggedItemContent = newTodos.splice(draggedItem.current, 1)[0]
        newTodos.splice(overItem.current, 0, draggedItemContent);
        draggedItem.current = null;
        overItem.current = null;
        saveTodos(newTodos);
      }

      const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
        draggedItem,
        overItem,
      }

      const stateUpdaters = {
        setSearchValue,
        addTodo,
        completeTodo,
        deleteTodo,
        setOpenModal,
        handleSort,
        dragStart,
        dragEnter,
        dragOver,
      }

    return { states, stateUpdaters };
}

export { useTodos };
