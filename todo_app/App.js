
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import shortId from "shortid";
import Navbar from "./src/components/Navbar";
import AddTodo from "./src/components/AddTodo";
import Todo from "./src/components/Todo";

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

    <View style={styles.container}>
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
