import React, { useReducer } from "react";
import { TodoContext } from "./todoContaxt";
import { todoReducer } from "./TodoReducer";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: 3222,
        todo: "Learn react native"
      }
    ]
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos: state.todos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
