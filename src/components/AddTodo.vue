<template>
  <div>
    <input v-model="todoTitle" /><button
      @click="() => onClickAddTodo(this.todoTitle)"
    >
      Add todo
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const todoModule = createNamespacedHelpers("todos");

export default {
  name: "TodoAddComponent",
  data() {
    return {
      todoTitle: ""
    };
  },
  methods: {
    ...todoModule.mapActions(["addTodo"]),
    onClickAddTodo(title) {
      this.addTodo(`${title}`);
      // nextTick is logic after step.
      this.$nextTick(() => {
        this.todoTitle = "";
      });
    }
  }
};
</script>
