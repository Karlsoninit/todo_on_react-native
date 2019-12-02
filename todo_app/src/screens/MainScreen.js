import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({
  getTodos,
  todo,
  handleSibmitAdd,
  deleteItems,
  todos,
  getIdForSwithingScreen
}) => {
  return (
    <View>
      <AddTodo
        style={styles.container}
        value={todo}
        handleGetInfo={getTodos}
        handleSibmitAdd={handleSibmitAdd}
      />

      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo getIdForSwithingScreen={getIdForSwithingScreen} deleteItems={deleteItems} todo={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});

export default MainScreen;
