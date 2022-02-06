import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail",
    name: "Detail",
    // lazy-loaded when the route is visited.
    component: () =>
      import("../views/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
   routes,
});

export default router;
