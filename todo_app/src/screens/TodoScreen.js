import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../ui/Card";

const TodoScreen = ({ prevPage, oneTask, onDelete }) => {
  return (
    <Card>
      <Text style={styles.title}>{oneTask.todo}</Text>
      <View style={styles.todo}>
        <Button onPress={() => prevPage()} title="Back" />
        <Button color="red" onPress={() => onDelete(oneTask.id)} title="Delete" />
      </View>
    </Card>
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
  }
});

export default TodoScreen;
