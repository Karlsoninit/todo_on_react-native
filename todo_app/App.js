import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/components/AddTodo";

export default function App() {
  return (
    <View style={styles.container}>
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
