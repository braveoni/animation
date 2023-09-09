import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/particles",
      name: "particles",
      component: () => import("@/views/ParticlesView.vue"),
    },
    {
      path: "/physarum",
      name: "physarum",
      component: () => import("@/views/PhysarumView.vue"),
    },
    {
      path: "/sphere",
      name: "sphere",
      component: () => import("@/views/SphereView.vue"),
    },
    {
      path: "/waves",
      name: "waves",
      component: () => import("@/views/WaveView.vue"),
    },
    {
      path: "/circular",
      name: "circular",
      component: () => import("@/views/CircularView.vue"),
    },
    {
      path: "/flowfield",
      name: "flowfield",
      component: () => import("@/views/FlowField.vue"),
    },
  ],
});

export default router;
