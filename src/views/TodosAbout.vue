<template>
  <div class="todos-about">
    <h1>Todos About with {{ $route.params }}</h1>
    Current Parmas [{{ currentParams }}]
  </div>
</template>

<script>
export default {
  name: "TodosAbout",
  data() {
    return {
      currentParams: ""
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(newValue, oldValue, this);
        this.currentParams = this.$route.params["nameParam"];
      }
    }
  }
};
</script>
