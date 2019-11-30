import React from "react";

import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/components/AddTodo";


import Navbar from "./src/components/Navbar";


export default function App() {
  return (
    <View style={styles.container}>

      <AddTodo />

      <Navbar title="Todo App" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {



    flex: 1,
    backgroundColor: "#fff"

  }
});
