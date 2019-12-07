import React, { useState } from "react";
import { View, Button, StyleSheet, Modal, TextInput, Text } from "react-native";
import Card from "../ui/Card";

const EditModel = ({ visible, isOpen, onReplacemant, innerValue }) => {
  const [replasemantValue, setReplasemantValue] = useState(innerValue.todo);
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Card style={styles.cardModal}>
          <TextInput
            value={replasemantValue}
            onChangeText={setReplasemantValue}
            style={styles.input}
            placeholder="change your todo"
          />
        </Card>
        <View style={styles.modalButton}>
          <Button color="red" onPress={isOpen} title="Cancel" />
          <Button
            onPress={() => onReplacemant(replasemantValue)}
            title="Save"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "100%",
    paddingLeft: 20
  },
  cardModal: {
    width: 400
  }
});

export default EditModel;
