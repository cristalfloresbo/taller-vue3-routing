import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";

import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: AppHome },
  { path: "/about", component: AppAbout },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;