import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
// import Vue from "vue";
// import VueRouter from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import prueba from "./views/prueba.vue"

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/prueba",
    name: "Pruebita",
    component: prueba,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
