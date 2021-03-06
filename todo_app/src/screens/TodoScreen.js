import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Card from "../ui/Card";
import EditModal from "../components/EditModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../ui/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContaxt";

const TodoScreen = ({ getValue }) => {
  const [modal, setModal] = useState(false);

  const { getId, changeScreen } = useContext(ScreenContext);
  const { deleteTodo, updateTodo, todos } = useContext(TodoContext);

  const oneTask = todos.find(el => el.id === getId);

  const replacemant = async value => {
    await updateTodo(oneTask.id, value);
    setModal(false);
    getValue(oneTask.title);
  };

  return (
    <View>
      <EditModal
        onReplacemant={replacemant}
        innerValue={oneTask}
        isOpen={() => setModal(false)}
        visible={modal}
      />
      <Card>
        <View style={styles.textOutput}>
          <Text style={styles.title}>{oneTask.title}</Text>
          <Button title="Edit" onPress={() => setModal(true)} />
        </View>
      </Card>
      <View style={styles.todo}>
        <AppButton onPress={() => changeScreen(null)}>
          <MaterialIcons size={30} name="keyboard-backspace" />
        </AppButton>
        <MaterialCommunityIcons.Button
          name="delete-circle"
          size={40}
          style={styles.btnDelete}
          color="red"
          onPress={() => deleteTodo(oneTask.id)}
        >
          DELETE
        </MaterialCommunityIcons.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    textAlign: "center",
    fontSize: 25
  },
  textOutput: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btnDelete: {
    color: "red",
    backgroundColor: "white"
  }
});

export default TodoScreen;
