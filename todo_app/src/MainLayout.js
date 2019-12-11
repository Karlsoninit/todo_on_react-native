import React, { useState, useContext } from "react";
import { StyleSheet, View, Keyboard, Alert } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
// import shortId from "shortid";
import { TodoContext } from "./context/todo/todoContaxt";
import { ScreenContext } from "./context/screen/screenContext";

const MainLayout = () => {
  const { getId } = useContext(ScreenContext);
  const [todo, setTodo] = useState("");

  // setTodos(prev => [...prev, newTodo]);
  // if (todo.length !== 0) {
  //   setTodos(prev => [...prev, newTodo]);
  //   // setTodo("");
  //   Keyboard.dismiss();
  // } else {
  //   Alert.alert("need typing todo");
  // }
  // };

  // const deleteItems = id => {
  //   const findElement = todos.find(todo => todo.id === id);
  //   Alert.alert(
  //     "Delete element",
  //     `${findElement.todo}`,
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           setGetId(null);
  //           setTodos(prev => prev.filter(elem => elem.id !== id));
  //         },
  //         style: "destructive"
  //       }
  //     ],
  //     { cancelable: false }
  //   );
  // };

  // const getIdForSwithingScreen = id => {
  //   setGetId(id);
  // };

  // const handleSave = (id, value) => {
  //   setTodos(old =>
  //     old.map(todo => {
  //       if (todo.id === id) {
  //         todo.todo = value;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  let content = <MainScreen todo={todo} />;

  if (getId) {
    content = <TodoScreen getValue={setTodo} />;
  }

  console.log("-------", getId);
  return (
    <View>
      <Navbar title="Todo App" />
      {getId ? <TodoScreen getValue={setTodo} /> : <MainScreen todo={todo} />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainLayout;
