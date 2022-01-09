import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Display from "../views/Display.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/display",
    name: "Display",
    component: Display,
  },
  {
    path: "/comic/:id?",
    name: "Comic",
    component: Info,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
