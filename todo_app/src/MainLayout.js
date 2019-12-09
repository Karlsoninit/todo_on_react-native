import React, { useState, useContext } from "react";
import { StyleSheet, View, Keyboard, Alert } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import shortId from "shortid";
import { TodoContext } from "./context/todo/todoContaxt";

const MainLayout = () => {
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [getId, setGetId] = useState(null);

  const getTodos = title => {
    setTodo(title);
  };

  const handleSibmitAdd = () => {
    const newTodo = {
      id: shortId(),
      todo
    };

    if (todo.length !== 0) {
      setTodos(prev => [...prev, newTodo]);
      setTodo("");
      Keyboard.dismiss();
    } else {
      Alert.alert("need typing todo");
    }
  };

  const deleteItems = id => {
    const findElement = todos.find(todo => todo.id === id);
    Alert.alert(
      "Delete element",
      `${findElement.todo}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            setGetId(null);
            setTodos(prev => prev.filter(elem => elem.id !== id));
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  const getIdForSwithingScreen = id => {
    setGetId(id);
  };

  const handleSave = (id, value) => {
    setTodos(old =>
      old.map(todo => {
        console.log("todo handleSave--------->", todo);
        if (todo.id === id) {
          todo.todo = value;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      getTodos={getTodos}
      todo={todo}
      handleSibmitAdd={handleSibmitAdd}
      deleteItems={deleteItems}
      todos={todoContext.todos}
      getIdForSwithingScreen={getIdForSwithingScreen}
    />
  );

  if (getId) {
    const oneTask = todos.find(task => task.id === getId);
    content = (
      <TodoScreen
        onDelete={deleteItems}
        oneTask={oneTask}
        prevPage={() => setGetId(null)}
        onSave={handleSave}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainLayout;
