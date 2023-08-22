import React from "react";
import { View, StyleSheet } from "react-native";
import CreateTodo from "../components/CreateTodo";
import { useTodoContext } from "../context/TodoContext";

const CreateScreen = () => {
  const { dispatch } = useTodoContext();

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  return (
    <View style={styles.container}>
      <CreateTodo addTodo={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default CreateScreen;
