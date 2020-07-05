export default {
  addTodo({ commit }, todo) {
    commit("ADD_TODO", todo);
  },
  removeTodo({ commit }, index) {
    commit("REMOVE_TODO", index);
  }
};
