import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
// import Vue from "vue";
// import VueRouter from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import Dashboard from "./views/DashBoard.vue";
import Empleados from "./views/Empleados.vue";
import Clientes from "./views/Clientes.vue";
import Cotizacion from "./views/Cotizacion.vue"
import Herramientas from "./views/Herramientas.vue"
import Perfil from "./views/Perfil1.vue";
import Almacen from "./views/Almacen.vue"
import prueba from "./views/prueba.vue";
import prueba2 from "./views/Prueba2.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Empleados",
    name: "Empleados",
    component: Empleados,
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: Clientes,
  },
  {
    path: "/Cotizacion",
    name: "Cotizacion",
    component: Cotizacion,
  },
  {
    path: "/Herramientas",
    name: "Herramientas",
    component: Herramientas,
  },
  {
    path: "/Perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/Almacen",
    name: "Almacen",
    component: Almacen,
  },
  




  {
    path: "/prueba",
    name: "Pruebita",
    component: prueba,
  },
  {
    path: "/pruebacris",
    name: "Pruebita2",
    component: prueba2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
