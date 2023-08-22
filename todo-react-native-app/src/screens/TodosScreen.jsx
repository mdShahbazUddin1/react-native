import React from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";

const TodosScreen = () => {
  const { todos } = useTodoContext();

  return (
    <View style={styles.container}>
      <TodoList todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TodosScreen;
