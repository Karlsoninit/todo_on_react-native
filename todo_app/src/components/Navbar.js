import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 30,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4939"
  },
  text: {
    fontSize: 27,
    color: "white"
  }
});

export default Navbar;
