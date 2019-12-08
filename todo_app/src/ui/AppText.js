import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={{ ...styles.defaultStile, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultStile: {
    fontFamily: "tomorrow-Bold"
  }
});

export default AppText;
