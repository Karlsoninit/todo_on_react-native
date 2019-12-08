import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import AppText from "../ui/AppText";

const Navbar = ({ title }) => {
  const defineStyle = Platform.select({
    ios: styles.navbarIos,
    android: styles.navbarAndroid
  });

  return (
    <View style={{ ...styles.navbar, ...defineStyle }}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 30,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  navbarIos: {
    backgroundColor: "white"
  },
  navbarAndroid: {
    backgroundColor: "#4939"
  },
  text: {
    fontSize: 27,
    color: Platform.OS === "ios" ? "blue" : "white"
  }
});

export default Navbar;
