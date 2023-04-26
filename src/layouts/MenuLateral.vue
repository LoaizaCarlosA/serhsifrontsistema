<template>
  <div v-bind:class="'lateral-menu ' + (!collapsedMenu ? 'collapsed-menu ' : '')"></div>
  <aside class="sidebar" :class="collapsedMenu ? 'active' : ''">
    <div class="container-menu" :class="collapsedMenu ? 'active' : ''">
      <div class="cerrarMenuMovil" @click="collapseMenu">X</div>
      <div class="module-list">
        <router-link v-if="isAllowed('/Dashboard')" to="/Dashboard" class="menu-item" active-class="active">Dashboard</router-link>      
        <router-link v-if="isAllowed('/Cotizacion')" to="/Cotizacion" class="menu-item" active-class="active">Cotización</router-link>
        <router-link v-if="isAllowed('/Clientes')" to="/Clientes" class="menu-item" active-class="active">Clientes</router-link>
        <router-link v-if="isAllowed('/Empleados')" to="/Empleados"  class="menu-item" active-class="active">Empleados</router-link>
        <router-link v-if="isAllowed('/Herramientas')" to="/Herramientas"  class="menu-item" active-class="active">Herramientas</router-link>
        <router-link v-if="isAllowed('/Almacen')" to="/Almacen"  class="menu-item" active-class="active">Almacén</router-link>
        <!-- <router-link>Hola</router-link> -->
        <!-- <ItemListModulo class="item-list-module" name="Usuarios" url="usuarios" icon="usuariosIcon.svg"/>
        <ItemListModulo class="item-list-module" name="Proveedores" url="proveedores" icon="proveedoresIcon.svg"/> -->
      </div>
      <a class="cerrar-sesion" @click="cerrarSesion">
        <img src="../assets/svg/cerrarSesion.svg" alt="icon" />
        <div class="cerrar-txt" :class="!collapsedMenu ? 'off' : ''" v-if="collapsedMenu">Cerrar sesión</div>
      </a>
      <div class="collapse-menu-lateral" @click="collapseMenu">
        <img class="chevron" src="../assets/svg/chevron.svg" alt="icon" v-bind:style="{ transform: collapsedMenu ? 'rotate(0deg)' : 'rotate(180deg)' }" />
      </div>
    </div>
  </aside>
</template>

<script>
// import ItemListModulo from '../components/MenuLateral/ItemListModulo.vue';
// import { PAGES } from '@constants/routes';
// import { mapState, mapActions } from 'pinia';
// import { useUsuarioBahk } from '@store/user.js';
// import { useMenuBahk } from '@store/menu.js';
// import loginService from '@services/login.js';

import store from '@/store';
export default {
  name: 'MenuLateral',
  computed: {
    role() {
      return store.state.role;
    },
  },
  components: {
    // ItemListModulo,
  },
  // data() {
  //   return {
  //     PAGES: PAGES,
  //     cerrado: true,
  //   };
  // },
  // computed: {
  //   ...mapState(useUsuarioBahk, {
  //     verificarPermiso: 'verificarPermiso',
  //   }),
  //   ...mapState(useMenuBahk, ['collapsedMenu']),
  // },
  methods: {
    isAllowed(route) {
      
      if (this.role === 'ROLE_ADMINISTRADOR') {
        // Si el rol es admin, se permite el acceso a todas las vistas
        return true;
      } else if (this.role === 'ROLE_CLIENTE') {
        // Si el rol es user, se permite el acceso solo a las vistas que no tienen restricciones
        const unrestrictedRoutes = ['/Dashboard','/Cotizacion'];
        
        return unrestrictedRoutes.includes(route);
      }
      return false;
    },
    
    // collapseMenu() {
    //   this.setCollapsedMenu(!this.collapsedMenu);
    // },
    // async cerrarSesion() {
    //   loginService.logout();
    // },
    // ...mapActions(useMenuBahk, ['setCollapsedMenu']),
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  display: block;
  top: 70px;
  bottom: 0;
  left: 0;
  padding: 0;
  z-index: 1050;
  width: 90px;
  transition: 0.3s all ease-in-out;
}
.sidebar.active {
  width: 215px;
}
.item-list-module {
  font-family: Roboto;
}
.module-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 87px;
    padding-top: 27px;
    box-sizing: border-box;
  }
  
  .menu-item {
  padding: 14px;
  padding-left:5px;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  width: 87%;
  text-decoration: none;
  transition: all 0.4s;
}

.menu-item:hover {
  background-color: #f2f2f2;
 
  
}

.menu-item.active {
  
  background-color: #d2d2d2;
  
  
}
.container-menu {
  position: initial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  -moz-box-shadow: 0px 3px 6px #00000029;
  transition: 0.15s all ease-in-out;
  width: 91px;
  z-index: 10;
  height: 100%;
}
.container-menu.active {
  width: 215px;
}
.collapse-menu-lateral {
  position: absolute;
  top: 45px;
  right: calc(-23px / 2);
  padding: 8px 4px;
  cursor: pointer;
  z-index: 1;
  border-radius: 100%;
  background-color: black;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  transition: 0.15s all ease-in-out;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.collapse-menu-lateral:hover {
  transform: scale(1.1);
}
.cerrar-sesion {
  display: flex;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.4s;
}
.cerrar-sesion:hover {
  background-color: #f2f2f2;
}
.cerrar-sesion:active {
  background-color: #d2d2d2;
  transform: scale(0.9);
  border-radius: 6px;
}
.cerrar-sesion img {
  margin-right: 10px;
  opacity: 0.2;
}
.cerrar-txt {
  transition: all 0.4s;
  font-size: 12px;
  color: #616161;
  font-family: Roboto;
  display: flex;
  align-items: center;
  opacity: 1;
  overflow: hidden;
  width: max-content;
  white-space: nowrap;
}
.cerrar-sesion:active .cerrar-txt {
  color: #000;
}
.cerrar-txt.off {
  opacity: 0;
}
.cerrarMenuMovil {
  display: none;
}
.chevron {
  transition: all 0.5s;
}
@media (max-width: 1279px) {
  .container-menu {
    position: absolute;
  }
}
@media (max-width: 767px) {
  .container-menu {
    width: 0px;
    overflow: hidden;
    transition: width 0s;
  }
  .sidebar {
    width: 0;
  }
  .container-menu {
    height: 100vh;
    top: -70px;
  }
  .container-menu.active {
    width: 100vw;
    transition: width 0.2s;
  }
  .cerrarMenuMovil {
    display: flex;
    position: absolute;
    top: 10px;
    font-family: Arial Rounded MT Bold;
    right: 41px;
    color: #939393;
    cursor: pointer;
    font-size: 17px;
  }
  .collapse-menu-lateral {
    display: none;
  }
  .cerrar-sesion:active {
    transform: scale(0.97);
  }
  .cerrar-sesion {
    margin-bottom: 1rem;
  }
}
</style>
