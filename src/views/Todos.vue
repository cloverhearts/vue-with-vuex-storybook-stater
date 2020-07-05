<template>
  <div class="todos">
    <h1>Todo content</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "Todos",
  components: {
    TodoList
  }
};
</script>
