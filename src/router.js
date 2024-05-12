import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue"

import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: AppHome },
  { path: "/about", component: AppAbout },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;