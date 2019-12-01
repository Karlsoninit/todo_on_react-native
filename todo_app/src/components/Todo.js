import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Todo = ({ todo }) => {
  return (
    <View style={styles.todoContainer}>
      {todo.map(({ id, title }) => (
        <View style={styles.todo} key={id}>
          <View style={styles.textContainer}>
            <Text>{title}</Text>
          </View>
          <Button title="Delete" onPress={() => console.log("delete")}></Button>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#4939"
  },
  todo: {
    flexDirection: "row"
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Todo;
