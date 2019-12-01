import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const AddTodo = props => {
  return (
    <View style={{ ...props.style, ...styles.inputContainer }}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={props.handleGetInfo}
        placeholder="create new todo"
        value={props.value}
      />
      <Button title="ADD" onPress={() => props.handleSibmitAdd()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "#4939",
    paddingLeft: 10
  }
});

export default AddTodo;
