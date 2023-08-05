import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sofas",
      name: "sofas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SofasView.vue"),
    },
    {
      path: "/beds",
      name: "beds",
      component: () => import("../views/Beds.vue"),
    },
    {
      path: "/chairs",
      name: "chairs",
      component: () => import("../views/Chairs.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/productDetail",
      name: "productDetail",
      component: () => import("../views/ProductDetail.vue"),
    },
  ],
});

export default router;
