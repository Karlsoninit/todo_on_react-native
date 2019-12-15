import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { TodoContext } from "./todoContaxt";
import { todoReducer } from "./TodoReducer";
import { ScreenContext } from "../screen/screenContext";
import Type from "../type";
import { Http } from "../../http";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async title => {
    try {
      const data = await Http.addTodos(title);
      dispatch({ type: Type.TODO_ADD, todos: title, id: data.data.name });
    } catch (e) {
      showError("не выходит связатся с сервером");
    }
  };

  const updateTodo = async (id, title) => {
    try {
      await Http.updeteTodo(id, title);
      dispatch({ type: Type.TODO_UPDATE, id, title });
    } catch (e) {
      showError("неудалось добавить задание");
    }
  };

  fetchTodo = async () => {
    try {
      const data = await Http.fetchTodo();
      const todos = Object.keys(data.data).map(key => ({
        ...data.data[key],
        id: key
      }));
      dispatch({ type: Type.FETCH_TODOS, todos });
    } catch (e) {
      showError("что-то пошло не так ...");
    }
  };

  const showLoader = () => dispatch({ type: Type.SHOW_LOADER });

  const hideLoader = () => dispatch({ type: Type.HIDE_LOADER });

  const showError = error => dispatch({ type: Type.SHOW_ERROR, error });

  // const clearError = () => dispatch({ type: Type.CLEAR_ERROR });

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
          onPress: async () => {
            changeScreen(null);
            await Http.deleteTodo(id);
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
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        updateTodo,
        fetchTodo,
        loading: state.loading,
        error: state.error,
        showError
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
