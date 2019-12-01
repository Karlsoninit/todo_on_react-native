import React, { useState } from "react";
import shortId from "shortid";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/components/AddTodo";

import Navbar from "./src/components/Navbar";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodos = title => {
    setTodo(title);
  };

  const handleSibmitAdd = () => {
    const newTodo = {
      id: shortId(),
      todo: todo
    };
    setTodos(prev => [...prev, newTodo]);
    setTodo("");
  };

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo
          value={todo}
          handleGetInfo={getTodos}
          handleSibmitAdd={handleSibmitAdd}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});
