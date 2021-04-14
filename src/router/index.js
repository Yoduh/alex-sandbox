import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "Page 1",
    component: () => import("../views/Page1.vue"),
  },
  {
    path: "/page2",
    name: "Page 2",
    component: () => import("../views/Page2.vue"),
  },
  {
    path: "/page3",
    name: "Page 3",
    component: () => import("../views/Page3.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
