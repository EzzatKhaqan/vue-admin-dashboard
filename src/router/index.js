import { createRouter, createWebHistory } from "vue-router";

import AdminRoutes from "./AdminRoutes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/pages/Landing.vue"),
    },
    {
      path: "/admin",
      children: [...AdminRoutes],
    },
  ],
});

export default router;
