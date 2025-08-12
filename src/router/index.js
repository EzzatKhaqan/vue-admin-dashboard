import { createRouter, createWebHistory } from "vue-router";
import { timetableRoutes } from "@/modules/Timetable/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/pages/Landing.vue"),
      children: [
        ...timetableRoutes,
        {
          path: "button",
          component: () => import("../modules/ui-kits/Button.vue"),
        },
        {
          path: "Inputs",
          component: () => import("../modules/ui-kits/Input.vue"),
        },
      ],
    },
  ],
});

export default router;
