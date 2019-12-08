import React from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
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
  let content = (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/defaultImage/defaultImage.jpeg")}
      />
      <Text style={styles.text}>what's your first assignment</Text>
    </View>
  );

  if (todos.length !== 0) {
    content = (
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => (
          <Todo
            getIdForSwithingScreen={getIdForSwithingScreen}
            deleteItems={deleteItems}
            todo={item}
          />
        )}
      />
    );
  }
  return (
    <View>
      <AddTodo
        style={styles.container}
        value={todo}
        handleGetInfo={getTodos}
        handleSibmitAdd={handleSibmitAdd}
      />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  imageContainer: {
    alignItems: "center"
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    color: "tomato",
    fontFamily: "tomorrow-Italic"
  }
});

export default MainScreen;
