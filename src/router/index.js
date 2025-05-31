import { createRouter, createWebHistory } from "vue-router";
import { timetableRoutes } from "@/modules/Timetable/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layout/AppLayout.vue"),
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
