import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Todo = ({ todo, deleteItems, getIdForSwithingScreen }) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        style={styles.todoList}
        activeOpacity={0.5}
        onPress={() => {
          console.log(todo.id);
          getIdForSwithingScreen(todo.id);
        }}
        onLongPress={() => deleteItems(todo.id)}
      >
        <View>
          <Text>{todo.todo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    alignItems: "center"
  },
  todoList: {
    height: 50,
    width: "90%",
    borderWidth: 1,
    borderColor: "#4939",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default Todo;
