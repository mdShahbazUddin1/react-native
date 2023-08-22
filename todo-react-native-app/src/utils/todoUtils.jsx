let todoIdCounter = 1;
const todos = [];

export const addTodo = (todo) => {
  const newTodo = { ...todo, id: todoIdCounter++ };
  todos.push(newTodo);
};

export const toggleTodo = (todoId) => {
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

export const deleteTodo = (todoId) => {
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

export const getAllTodos = () => todos;
