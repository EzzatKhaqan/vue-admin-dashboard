import AppLayout from "../layout/AppLayout.vue";
import { timetableRoutes } from "@/modules/Timetable/routes";

export default [
  {
    path: "/admin",
    component: AppLayout,
    children: [
      ...timetableRoutes,
      {
        path: "/button",
        component: () => import("../modules/ui-kits/Button.vue"),
      },
      {
        path: "/Inputs",
        component: () => import("../modules/ui-kits/Input.vue"),
      },
    ],
  },
];
