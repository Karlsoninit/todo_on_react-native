import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Card from "../ui/Card";
import EditModal from "../components/EditModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../ui/AppButton";
import { MaterialIcons } from "@expo/vector-icons";

const TodoScreen = ({ prevPage, oneTask, onDelete, onSave }) => {
  const [modal, setModal] = useState(false);

  const replacemant = value => {
    Alert.alert(
      "Are you shure ? ",
      `${oneTask.todo} replase on ${value}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            console.log("when touch onPress in todo screen -----", value);
            onSave(oneTask.id, value);
            setModal(false);
          }
        }
      ],
      { cancelable: false }
    );
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
          <Text style={styles.title}>{oneTask.todo}</Text>
          <Button title="Edit" onPress={() => setModal(true)} />
        </View>
      </Card>
      <View style={styles.todo}>
        <AppButton onPress={() => prevPage()}>
          <MaterialIcons size={30} name="keyboard-backspace" />
        </AppButton>
        {/* <Button onPress={() => prevPage()} title="Back" /> */}
        <MaterialCommunityIcons.Button
          name="delete-circle"
          size={40}
          style={styles.btnDelete}
          color="red"
          onPress={() => onDelete(oneTask.id)}
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
