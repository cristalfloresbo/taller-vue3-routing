import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import AppUser from "./components/AppUser.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: AppHome },
  { path: "/about", name: "about", component: AppAbout },
  {
    path: "/user/:id",
    name: "user",
    component: AppUser,
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter", "to", to);
      console.log("beforeEnter", "from", from);
      next();
    },
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
];
/*
createWebHashHistory
example.com/#/my-route
No server configuration is required for client-side routing, as the hash fragment is not sent to the server.
Hash mode is often used in scenarios where server configuration is limited or not possible, 
such as static file hosting services or when working with legacy server setups.

createWebHistory
example.com/my-route
Requires server configuration to ensure that the server serves the same page for all URLs that should be handled by the Vue app.
\
*/
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Guards
router.beforeEach((to, from, next) => {
  console.log("beforeEach", "to", to);
  console.log("beforeEach", "from", from);
  next();
});

router.addRoute((to, from) => {
  console.log("afterEach", "to", to);
  console.log("afterEach", "from", from);
});

export default router;
