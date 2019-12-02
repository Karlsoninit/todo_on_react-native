import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20
  },
  card: {
    paddingVertical: 30,
    backgroundColor: "white",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 10
  }
});

export default Card;
