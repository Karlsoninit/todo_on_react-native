import React, { useState, useContext } from "react";
import { StyleSheet, View, Keyboard, Alert } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContaxt";
import { ScreenContext } from "./context/screen/screenContext";

const MainLayout = () => {
  const { getId } = useContext(ScreenContext);
  const [todo, setTodo] = useState("");

  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
      {getId ? <TodoScreen getValue={setTodo} /> : <MainScreen todo={todo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainLayout;
