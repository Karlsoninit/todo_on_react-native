import React from "react";
import { StyleSheet, View } from "react-native";
import Todo from "./src/components/Todo";
export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});
