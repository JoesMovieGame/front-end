import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./features/game/GamePage.vue") },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router