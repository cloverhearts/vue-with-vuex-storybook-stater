<template>
  <div class="todos">
    <h1>Todos Layout</h1>
    Question <input v-model="name" />
    <router-link :to="{ name: 'TodosAbout', params: { nameParam: name } }"
      >Link</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      name: "vue"
    };
  }
};
</script>
