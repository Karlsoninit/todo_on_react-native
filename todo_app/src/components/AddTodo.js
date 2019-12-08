import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

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
      <SimpleLineIcons.Button
        name="plus"
        onPress={() => props.handleSibmitAdd()}
      >
        ADD
      </SimpleLineIcons.Button>
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
