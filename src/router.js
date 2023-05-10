import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
// import Vue from "vue";
// import VueRouter from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import Dashboard from "./views/DashBoard.vue";
import Empleados from "./views/Empleados.vue";
import Clientes from "./views/Clientes.vue";
import Cotizacion from "./views/Cotizacion.vue";
import Herramientas from "./views/Herramientas.vue";
import Perfil from "./views/Perfil1.vue";
import Almacen from "./views/Almacen.vue";
import prueba from "./views/prueba.vue";
import prueba2 from "./views/Prueba2.vue";
import Ordenes from "./views/Ordenes.vue";
import Cotizaciones from "./views/CotizacionCliente.vue";
import LandingPrincipal from "./views/LandingPrincipal.vue"
import store from '@/store';
import hoja from "@/components/Cotizaciones/HojaCotizacion.vue";
const routes = [
  {
    path: "/Login",
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
    meta: {
      requiresAdmin: true // Esta ruta requiere el rol de admin
    }
  },
  {
    path: "/Cotizacion",
    name: "Cotizacion",
    component: Cotizacion,
  },
  {
    path: "/Cotizaciones",
    name: "Cotizaciones",
    component: Cotizaciones,
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
    path: "/Ordenes",
    name: "Ordenes",
    component: Ordenes,
  },
   {
    path: "/",
    name: "LandingPrincipal",
    component: LandingPrincipal,
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
  {
    path: "/HojaCotizacion",
    name: "HojaCotizacion",
    component: hoja,
  },
  
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.meta.requiresAdmin
  const role = localStorage.getItem('role');
  if (role) {
    store.commit('setRole', role); // establecer el valor del rol en el store
  }
  const isAdmin = store.state.role === 'ROLE_ADMIN'


  if (requiresAdmin && !isAdmin) {
    next('/') // Redireccionamos a la pagina principal si el usuario no es admin
  }  else {
    next() // Continuamos a la ruta requerida
  }
})

export default router;
