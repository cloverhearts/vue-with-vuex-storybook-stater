export default {
  ADD_TODO(state, todo) {
    state.todos.push(todo);
  },
  REMOVE_TODO(state, todoIndex) {
    state.todos.splice(todoIndex, 1);
  }
};
