import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodosLayout from "../views/TodosLayout";
import Todos from "../views/Todos";
import TodosAbout from "../views/TodosAbout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todos",
    component: TodosLayout,
    children: [
      {
        path: "/",
        name: "Todos",
        component: Todos
      },
      {
        path: "about/:nameParam",
        name: "TodosAbout",
        component: TodosAbout
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
