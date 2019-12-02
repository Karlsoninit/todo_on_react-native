import React, { useState } from "react";
import { StyleSheet, View, Keyboard, Alert } from "react-native";
import shortId from "shortid";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
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

  let content = (
    <MainScreen
      getTodos={getTodos}
      todo={todo}
      handleSibmitAdd={handleSibmitAdd}
      deleteItems={deleteItems}
      todos={todos}
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
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({});
