import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import theme from "../theme";

const Todo = ({ todo, deleteItems, getIdForSwithingScreen }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - theme.PADDING_HORIZINTAL * 2
  );
  useEffect(() => {
    const changeWidth = () => {
      const width =
        Dimensions.get("window").width - theme.PADDING_HORIZINTAL * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener("change", changeWidth);
    return () => {
      Dimensions.removeEventListener("change", changeWidth);
    };
  });
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        style={{ ...styles.todoList, width: deviceWidth }}
        activeOpacity={0.5}
        onPress={() => {
          getIdForSwithingScreen(todo.id);
        }}
        onLongPress={() => deleteItems(todo.id)}
      >
        <View>
          <Text>{todo.todos}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  todoList: {
    height: 50,
    borderWidth: 1,
    borderColor: "#4939",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default Todo;
