import React, { useState } from "react";
import { StyleSheet, View, Keyboard, Alert, FlatList } from "react-native";
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
    setTodos(prev => prev.filter(elem => elem.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo App" />
      <AddTodo
        style={styles.container}
        value={todo}
        handleGetInfo={getTodos}
        handleSibmitAdd={handleSibmitAdd}
      />

      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo deleteItems={deleteItems} todo={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});
