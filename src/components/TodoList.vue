<template>
  <div>
    <h1>Todo list</h1>
    <TodoAddComponent />
    <ul>
      <!-- get computed store todos value -->
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <button @click="() => onClickRemove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import TodoAddComponent from "./AddTodo";

// same to store/directory name 'todos'
const todoModule = createNamespacedHelpers("todos");

export default {
  name: "TodoList",
  components: {
    TodoAddComponent
  },
  data() {
    return {};
  },
  computed: {
    ...todoModule.mapGetters(["todos"])
  },
  created() {
    console.log(todoModule.mapGetters(["todos"]));
  },
  methods: {
    ...todoModule.mapActions(["removeTodo"]),
    onClickRemove(index) {
      this.removeTodo(index);
    }
  }
};
</script>
