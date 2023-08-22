import React, { createContext, useContext, useReducer } from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  getAllTodos,
} from "../utils/todoUtils";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      addTodo(action.payload);
      return [...state, action.payload];
    case "TOGGLE_TODO":
      toggleTodo(action.payload);
      return [...state];
    case "DELETE_TODO":
      deleteTodo(action.payload);
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, getAllTodos());

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
