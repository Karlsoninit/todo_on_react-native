import React, { useContext, useEffect, useCallback } from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContaxt";
import AppLoader from "../ui/AppLoader";
import AppText from "../ui/AppText";

const MainScreen = ({ todo }) => {
  const {
    addTodo,
    todos,
    deleteTodo,
    fetchTodo,
    loading,
    state,
    error
  } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <AppText>{error.error}</AppText>
      </View>
    );
  }

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
        renderItem={({ item }) => {
          // console.log("item", item);
          return (
            <Todo
              getIdForSwithingScreen={changeScreen}
              deleteItems={deleteTodo}
              todo={item}
            />
          );
        }}
      />
    );
  }

  const loadTodos = useCallback(async () => await fetchTodo(), [fetchTodo]);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <View>
      <AddTodo
        style={styles.container}
        value={todo}
        handleSibmitAdd={addTodo}
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
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainScreen;
