<template>
  <header class="header">
    <section class="contenedorInformacion">
      <img class="imagenLogo" src="../assets/img/LogotipoB.png" alt="" />
      <div class="infoContainer">
        <button class="burgerMenu mostrar-movil" @click="activarMenu">
          <!-- <img src="@assets/img/menu-movil.svg" alt="" /> -->
        </button>
        <div class="infoUsuario ocultar-movil">
          <div class="nombreUsuario">Carlos Andrés Loaiza</div>
          <div class="locacionSistema">Gerente</div>
          <!-- <div class="nombreUsuario">{{ nombreUsuario }}</div>
          <div class="locacionSistema">{{ descripcionRol }}</div> -->
        </div>
        <div class="contenedorIconoUsuario ocultar-movil">
          <img class="imagenUsuario" src="../assets/svg/icono-usuario.svg" alt="" />
        </div>
      </div>
    </section>
  </header>
</template>

<script>
// import { mapState, mapActions } from 'pinia';
// import { useUsuarioBahk } from '@store/user.js';
// import { useMenuBahk } from '@store/menu.js';

export default {
  // name: 'HeaderI',
  // computed: {
  //   ...mapState(useUsuarioBahk, {
  //     nombreUsuario: 'getNombreUsuario',
  //     descripcionRol: 'getDescripcionRol',
  //   }),
  //   ...mapState(useMenuBahk, ['collapsedMenu']),
  // },
  // methods: {
  //   ...mapActions(useMenuBahk, ['setCollapsedMenu']),
  //   activarMenu() {
  //     this.setCollapsedMenu(!this.collapsedMenu);
  //   },
  // },
};
</script>

<style scoped>
.header {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  height: 70px;
  background-color: #000000;
  box-shadow: 0px 3px 6px #00000029;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  -moz-box-shadow: 0px 3px 6px #00000029;
}
.contenedorInformacion {
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  background-color: #000000;
  transition: padding 0.2s;
}
.infoContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.informacionUsuario {
  display: flex;
}
.infoUsuario {
  display: flex;
  flex-direction: column;
}
.nombreUsuario {
  margin-right: 19px;
  color: #ffffff;
  min-height: 18px;
}
.locacionSistema {
  margin-right: 19px;
  color: #d5d5d5;
  min-height: 18px;
}
.contenedorIconoUsuario {
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  -moz-box-shadow: 0px 3px 6px #00000029;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagenUsuario {
  width: 22px;
  height: 27px;
}
.imagenLogo {
  width: auto;
  height: 50px;
}
.burgerMenu {
  width: 55px;
  height: 50px;
  background-color: #000000;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.burgerMenu:hover {
  background-color: #202020;
}
.burgerMenu:active {
  background-color: #000000;
  transform: scale(0.95);
}
.ocultar-movil {
  display: flex;
}
.mostrar-movil {
  display: none;
}
@media (max-width: 767px) {
  .contenedorInformacion {
    padding: 0 20px;
  }
  .ocultar-movil {
    display: none;
  }
  .mostrar-movil {
    display: flex;
  }
}
</style>
