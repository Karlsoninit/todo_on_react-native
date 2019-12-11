import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { TodoContext } from "./todoContaxt";
import { todoReducer } from "./TodoReducer";
import { ScreenContext } from "../screen/screenContext";
import Type from "../type";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: 3222,
        todos: "Learn react native"
      }
    ]
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);
  const addTodo = title => dispatch({ type: Type.TODO_ADD, todos: title });

  const updateTodo = (id, value) => {
    console.log("updateTodo");
    console.log("id/value", id, value);
    dispatch({ type: Type.TODO_UPDATE, id, value });
  };

  const deleteTodo = id => {
    const findElement = state.todos.find(todo => todo.id === id);
    Alert.alert(
      "Delete element",
      `${findElement.todos}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            changeScreen(null);
            dispatch({
              type: Type.TODO_DELETE,
              id: id
            });
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
