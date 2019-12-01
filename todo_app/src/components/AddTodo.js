import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const AddTodo = ({ handleGetInfo, handleSibmitAdd, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleGetInfo}
        placeholder="create new todo"
        value={value}
      />
      <Button title="add" onPress={() => handleSibmitAdd()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "#4939",
    paddingLeft: 10
  }
});

export default AddTodo;
