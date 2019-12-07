import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Card from "../ui/Card";
import EditModal from "../components/EditModal";

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
        <Button onPress={() => prevPage()} title="Back" />
        <Button
          color="red"
          onPress={() => onDelete(oneTask.id)}
          title="Delete"
        />
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
  }
});

export default TodoScreen;
