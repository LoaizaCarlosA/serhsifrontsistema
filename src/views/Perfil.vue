<template>
  <div class="contianer-perfil">
    <Header v-if="$windowWidth > 768"></Header>
    <main class="main_container">
      <section id="contenedor1">
        <article>
          <section id="contenedorperfil">
            <section class="division">
              <div class="atras">
                <router-link to="/dashboard" class="linkflecha" style="color: white"> <img src="@assets/image/icons/png/flecha.png" alt=" " /> </router-link>
              </div>
              <div class="miperfil">
                <p>Mi perfil</p>
              </div>
            </section>
            <section id="iconocampana" @click="cerrar">
              <img src="@assets/image/icons/svg/campana_blanco.svg" style="border-radius: 50px;" />
              <span id="notificacion23">{{cantidadNotificaciones}}</span>
            </section>
          </section>
          <section class="container-nombre">
            <div class="c">
              <div class="circulo">
                <h2>{{ iniciales }}</h2>
              </div>
            </div>
            <div class="nombre">
              <p>{{ nombre.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase())}}</p>
              <p>{{ apellidop.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase()) + ' ' + apellidom.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase()) }}</p>
            </div>
          </section>
          <div class="contenedor" :class="iscomplete ? 'hide' : ''">
            <div class="datos">
              <p class="titulo">Correo:</p>
              <p class="semibold">{{ correo.charAt(0).toUpperCase()+correo.slice(1) }}</p>
              <!-- <br /> -->
              <p class="titulo">Teléfono:</p>
              <p class="semibold">{{ telefono }}</p>
              <!-- <br /> -->
              <p class="titulo">Domicilio:</p>
              <p class="dom semibold">{{ direccion.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase()) }}</p>
            </div>
            <div class="links">
              <div class="contianer-links">
                <p>
                  <picture>
                    <source srcset="@assets/image/icons/svg/cambio_contrasena.svg" media="(max-width: 1279px)" />
                    <img src="@assets/image/icons/svg/cambio_contrasena_blanco.svg" />
                  </picture>
                  <!-- <router-link to="/contrasena" class="a"> -->
                  <span class="link" @click="updateContra">Cambiar mi contraseña</span>
                  <!-- </router-link> -->
                </p>
                <p>
                  <picture>
                    <source srcset="@assets/image/icons/svg/cuentas_registradas.svg" media="(max-width: 1279px)" />
                    <img src="@assets/image/icons/svg/cuentas_registradas_blanco.svg" />
                  </picture>
                  <!-- <router-link to="/cuentas" class="a"> -->
                  <span class="link" @click="misTarjetasRetiro">Cuentas registradas </span>
                  <!-- </router-link> -->
                </p>
                <p @click="logout">
                  <picture>
                    <source srcset="@assets/image/icons/svg/cerrar_sesion_azul.svg" media="(max-width: 1279px)" />
                    <img src="@assets/image/icons/svg/cerrar_sesion_blanco.svg" />
                  </picture>
                  <!--<img src="@assets/image/icons/png/cerrar_sesion.png" alt="icon" />-->
                  <span class="link">Cerrar sesión </span>
                </p>
              </div>
              <section id="acomodo">
                <div class="circuloayuda">
                  <!-- <router-link to="/ayuda">  -->
                  <img src="@assets/image/icons/svg/ayuda1.svg" alt="icon" @click="mostrarAyuda" />
                  <!-- </router-link> -->
                </div>
                <span class="ayudatext" @click="mostrarAyuda">Ayuda de un asesor</span>
              </section>
            </div>
          </div>
        </article>
      </section>
      <section id="contenedor2" v-if="showNotification">
        <div class="notificacion" :style="isComplete ? 'height: 800px;' : ''">
          <div id="img-notif" @click="completo">
            <section id="contenedortext1">
              <section id="contenedortext2">
                <span>
                  <picture>
                    <source srcset="@assets/image/icons/svg/notificaciones.svg" media="(min-width: 1280px)" />
                    <img src="@assets/image/icons/svg/campana_blanco.svg" />
                  </picture>
                </span>
                <span id="notificacion">{{ cantidadNotificaciones }}</span>
              </section>
              <section>
                <span id="notificacionestext">Notificaciones</span>
                <div id="notificacionestextabajo">Aquí podrás visualizar las nuevas notificaciones</div>
              </section>
            </section>
          </div>
          <div class="sin-notificacion" v-if="Notification.length == 0">
            <img src="@assets/image/icons/svg/sin_notificaciones.svg" alt="" class="buzon" />
            <br />
            <p class="info">Aún no hay notificaciones en tu buzón</p>
          </div>
          <div class="content-notificaciones" v-else-if="Notification.length > 0">
            <section class="container-notificacion">
              <div class="container-notificacion2" v-for="notifi in Notification" :key="notifi.id">
                <div class="notificacion-item">
                  <section class="acomodocontnot">
                    <div class="icono">
                      <img src="@assets/image/icons/svg/NOTIFICACION_CAMPAN.svg" alt="icon" />
                    </div>
                    <div class="info-notificacion">
                      <p class="msj" v-html="notifi.mensaje"></p>
                      <p class="fecha">{{ formatearFechaNotificacion(notifi.createdAt) }}</p>
                    </div>
                  </section>
                  <div class="eliminar">
                    <p @click="marcarNotificacion(notifi.id)">X</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div v-if="showAddTarjeta">
          <div class="showdesk" v-if="$windowWidth > 1279">
            <AddTarjeta @cerrar="cerrar" @atras="atras"></AddTarjeta>
          </div>

          <div v-if="$windowWidth <= 1279">
            <AddTarjeta @cerrar="cerrar" @atras="atras"></AddTarjeta>
          </div>
        </div>
        <div v-if="showModifPassword">
          <div class="showdesk" v-if="$windowWidth > 1279">
            <ModifContrasena @cerrar="cerrar" @atras="atras"></ModifContrasena>
          </div>
          <div v-if="$windowWidth <= 1279">
            <ModifContrasena @cerrar="cerrar" @atras="atras"></ModifContrasena>
          </div>
        </div>
        <div v-if="showMisCuentas">
          <div class="showdesk" v-if="$windowWidth > 1279">
            <MisCuentasRetiro @cerrar="cerrar" @atras="atras"></MisCuentasRetiro>
          </div>

          <div v-if="$windowWidth <= 1279">
            <MisCuentasRetiro @cerrar="cerrar" @atras="atras"></MisCuentasRetiro>
          </div>
        </div>
        <div v-if="showAyudaPerfil">
          <div class="showdesk" v-if="$windowWidth > 1279">
            <AyudaPerfil @cerrar="cerrar" @atras="atras"></AyudaPerfil>
          </div>

          <div v-if="$windowWidth <= 1279">
            <AyudaPerfil @cerrar="cerrar" @atras="atras"></AyudaPerfil>
          </div>
        </div>
      </section>
    </main>
    <FooterGeneral class="footer-dashboard"></FooterGeneral>
  </div>

</template>

<script>
import Header from '@components/Layout/Header.vue'
import BounceLoader from '@components/Load/BounceLoader'
import loginMixin from '@mixins/login'
import Button from '@components/General/Form/Button'
import session from '@services/session'
import FooterGeneral from '@components/Layout/FooterGeneral'
import { vueWindowSizeMixin } from 'vue-window-size/option-api'
import moment from 'moment-timezone'
import AddTarjeta from '@components/General/Modal/AddTarjetaRetiro.vue'
import ModifContrasena from '@components/Perfil/CambioContrasena.vue'
import MisCuentasRetiro from '@components/Perfil/CuentasRegistradas.vue'
import AyudaPerfil from '@components/Perfil/AyudaPerfil.vue'

const state = {}
export default {
  name: 'Perfil',
  mixins: [loginMixin, vueWindowSizeMixin()],
  components: {
    BounceLoader,
    Button,
    Header,
    FooterGeneral,
    AddTarjeta,
    ModifContrasena,
    MisCuentasRetiro,
    AyudaPerfil,
  },
  data() {
    let iniciales = ''
    let nombre = ''
    let apellidop = ''
    let apellidom = ''
    let correo = ''
    let telefono = ''
    let direccion = ''
    let iscomplete = false
    return {
      iniciales,
      nombre,
      apellidop,
      apellidom,
      correo,
      telefono,
      direccion,
      iscomplete,
      showNotification: true,
      showAddTarjeta: false,
      showModifPassword: false,
      showMisCuentas: false,
      showAyudaPerfil: false,
    }
  },
  props: {
    // Notification: {
    //   type: Array,
    //   default: () => [
    //     { id: 1, msj: 'Deposito exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'dep' },
    //     { id: 2, msj: 'Retiro exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'ret' },
    //     { id: 3, msj: '¡Felicidades! Haz recibido un regalo', fecha: '12/01/2021', tipo: 'reg' },
    //     { id: 4, msj: 'Deposito exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'dep' },
    //     { id: 5, msj: 'Retiro exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'ret' },
    //     { id: 6, msj: '¡Felicidades! Haz recibido un regalo', fecha: '12/01/2021', tipo: 'reg' },
    //     { id: 7, msj: 'Deposito exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'dep' },
    //     { id: 8, msj: 'Retiro exitoso $23,754.34 BasicMax', fecha: '12/01/2021', tipo: 'ret' },
    //     { id: 9, msj: '¡Felicidades! Haz recibido un regalo', fecha: '12/01/2021', tipo: 'reg' },
    //     { id: 10, msj: '¡Felicidades! Haz recibido un regalo', fecha: '12/01/2021', tipo: 'reg' }
    //   ]
    // }
  },
  created() {
    this.$socket.emit('createUser', session.getSession().id)
  },
  mounted() {

  },
  beforeMount() {
    state.session = session.getSession()
    const { nombre, apellidop, apellidom, telefono, correo, domicilio } = state.session

    if (this.$windowWidth > 768) this.nombre = nombre
    else this.nombre = nombre.split(' ')[0]

    this.iniciales = nombre.charAt(0) + apellidop.charAt(0)
    this.apellidop = apellidop
    this.apellidom = apellidom
    this.telefono = telefono
    this.correo = correo
    this.direccion = domicilio
  },
  methods: {
    cerrar() {
      this.$emit('cerrar')
      this.showMisCuentas = false
      this.showNotification = true
      this.showModifPassword = false
      this.showAyudaPerfil = false
    },
    atras() {
      this.$emit('atras')
      this.showMisCuentas = false
      this.showNotification = true
      this.showModifPassword = false
      this.showAyudaPerfil = false
    },
    ocultarMisCuentas() {
      this.showMisCuentas = false
      this.showNotification = true
    },
    getCliente() {},
    completo() {
      // this.iscomplete = true
      // if (this.iscomplete == true) {
      //     this.iscomplete = false
      // } else {
      //     this.iscomplete = true
      // }
    },
    misTarjetasRetiro() {
      this.showMisCuentas = true
      this.showNotification = false
      this.showModifPassword = false
      this.showAyudaPerfil = false
    },
    updateContra() {
      this.showModifPassword = true
      this.showMisCuentas = false
      this.showNotification = false
      this.showAyudaPerfil = false
    },
    mostrarAyuda() {
      this.showModifPassword = false
      this.showMisCuentas = false
      this.showNotification = false
      this.showAyudaPerfil = true
    },
    marcarNotificacion(id) {
      this.$socket.emit('markNotification', id)
    },
    formatearFechaNotificacion(fecha) {
      return moment(fecha).tz(session.getSession().timezone).format('YYYY-MM-DD')
    },
  },
  computed: {
    Notification() {
      return this.$store.state.notificaciones
    },
    cantidadNotificaciones() {
      const cantidad = this.$store.state.notificaciones.length
      return cantidad > 9 ? "9+" : cantidad
    },
  },
}

/*import Dashboard from '@/components/Dashboard.vue'*/
</script>

<style scoped>
.hide {
  visibility: hidden !important;
  display: none !important;
}

.main_container {
  width: 100%;
  max-width: 1280px;
  padding: 31px 0 31px 0;
  margin: auto;
  display: flex;
}

#contenedor1 {
  padding: 40px 35px 38px 56px;
  max-width: 470px;
  width: 100%;
  box-shadow: 0px 0px 12px #00000029;
  background-color: #008ed3;
}

#contenedor2 {
  width: 100%;
  max-width: 810px;
  background: #fff;
}

#notificacionestext {
  font-size: 22px;
  font-weight: 600;
  color: #162138;
}

#notificacion23{
  color: #FFF;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  border: 1px solid #FFF;
  right: 9px;
  bottom: 20px;
  display: flex;
}

#notificacionestextabajo {
  font-size: 14px;
  font-weight: 600;
  color: #838383;
}

#contenedorperfil {
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-weight: bold;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
}

.linkflecha {
  display: flex;
}

.division {
  display: flex;
  align-items: center;
}

.atras {
  display: flex;
  margin-right: 20px;
}

#iconocampana {
  border-radius: 50%;
  position: relative;
  display: flex;
  cursor: pointer;
}

.header {
  width: 100%;
  height: 75px;
  background-color: #008ed3;
}
.miperfil {
  font-size: 30px;
  color: white;
}
.contenedor {
  width: 100%;
  margin: auto;
  max-width: 270px;
}
.nombre {
  max-width: 270px;
  margin: auto;
  font-weight: bold;
  color: white;
  padding-top: 33px;
  font-size: 26px;
}
.datos {
  margin-top: 20px;
  float: inherit;
  font-size: 18px;
  color: white;
}
.titulo {
  font-weight: bold;
  color: white;
  margin-top: -5px;
}

.dom {
  width: 230px;
  color: white;
}

.semibold {
  font-weight: 600;
  margin-bottom: 15px;
}

.contianer-links p {
  cursor: pointer;
}

.links {
  color: white;
  text-decoration: underline;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.links p:not(:last-child) {
  margin-bottom: 15px;
}
.links p a {
  color: #fff;
  font-size: 18px;
}

.links > a {
  color: #fff;
  text-decoration: underline;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 33px;
}

.links p img {
  padding-right: 9px;
}

.notificacion {
  flex-direction: column;
  padding: 56px 54px 59px 61px;
  width: 100%;
  height: 100%;
  display: flex;
  float: center;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000029;
  opacity: 1;
  align-items: center;
  align-content: center;
}
.sin-notificacion {
  width: 90%;
  height: 337px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.content-notificaciones {
  max-height: 678px;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-bottom: 10px;
}
.showdesk {
  flex-direction: column;
  /* padding: 56px 54px 59px 61px; */
  padding: 44px 45px 45px 40px;
  width: 800px;
  height: 900px;
  display: flex;
  float: center;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000029;
  opacity: 1;
  align-items: center;
  align-content: center;
}

.acomodocontnot {
  display: flex;
}

.container-notificacion {
  overflow: auto;
  width: 100%;
  margin-top: 20px;
  padding: 0px 5px;
}

.container-notificacion2 {
  max-width: 608px;
  width: 100%;
  margin: auto;
  margin-right: 0px;
  margin-left: 40px;
  min-height: 62px;
  margin-bottom: 20px;
}

.container-notificacion2:first-child {
  margin-top: 5px;
}

.notificacion-item {
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000029;
  opacity: 1;
  display: flex;
  padding: 5px 0px;
}
.msj {
  top: 0px;
  left: 0px;
  width: 100%;
  /* height: 19px; */
  text-align: left;
  font: normal normal 600 16px Open Sans;
  letter-spacing: 0px;
  color: #172139;
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
}
.fecha {
  top: 20px;
  left: 0px;
  /* width: 64px; */
  height: 17px;
  text-align: left;
  font: normal normal 600 14px/18px Open Sans;
  letter-spacing: 0px;
  color: #838383;
}
.icono {
  justify-content: center;
  display: flex;
  width: 60px;
  align-items: center;
}
.eliminar {
  margin-right: 20px;
  font: normal normal 600 20px Open Sans;
  color: #838383;
  opacity: 0.43;
  cursor: pointer;
}
.info-notificacion {
  text-align: left;
  font: normal normal 600 16px/18px Open Sans;
  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 389px;
}
.info {
  text-align: center;
  font: normal normal 600 27px/23px Open Sans;
  letter-spacing: 0px;
  color: #989898;
  opacity: 1;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 350px;
  line-height: 1.1;
}
.c {
  padding-top: 22px;
  width: 100%;
  border-radius: 50%;
  justify-content: center;
  margin: 0px auto;
  background-color: #008ed3;
}
.circulo {
  width: 118px;
  height: 118px;
  border: 2px solid #ffffff;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  background: #c7d7ea 0% 0% no-repeat padding-box;
}
.circulo > h2 {
  text-align: center;
  font: normal normal bold 100px Open Sans;
  letter-spacing: 0px;
  color: #9ab1cc;
  opacity: 1;
}

#acomodo {
  display: flex;
  padding-top: 18px;
  cursor: pointer;
}

.circuloayuda {
  width: 70px;
  height: 70px;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f0f6fa 0% 0% no-repeat padding-box;
  border: 1px solid #008ed3;
  border-radius: 50%;
  cursor: pointer;
}
.circuloayuda > img {
  width: 45px;
  height: 45px;
}
.ayudatext {
  display: flex;
  align-items: center;
  padding-left: 9px;
}
#img-notif {
  width: 100%;
  cursor: pointer;
}
#img-notif img {
  background: white;

  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

#img-notif #notificacion {
  position: absolute;
  right: -7px;
  top: 0;
  background: #008ed3;
  color: #fff;
  border-radius: 50px;
  height: 16px;
  width: 16px;
  border: 2px solid #000;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

#contenedortext1 {
  display: flex;
  align-items: center;
}

#contenedortext2 {
  margin-right: 17px;
  position: relative;
  display: flex;
}

.circulo {
  width: 185px;
  height: 185px;
}

::-webkit-scrollbar-track {
  border: solid 0px black;
  border-radius: 10px;
  background: #8080802b;
}

::-webkit-scrollbar {
  width: 5px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #008ed3;
  border-radius: 10px;
  height: 50px;
}

@media (max-width: 1279px) {
  .contianer-perfil {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #header {
    display: none !important;
  }

  #img-notif img {
    border-radius: 50%;
  }

  .main_container {
    flex-direction: column;
    padding-top: 0;
    flex: 1;
  }
  #contenedor1 {
    background: inherit;
  }
  #contenedor1,
  #contenedor2 {
    max-width: 100%;
    padding: 0;
  }
  #contenedorperfil {
    background-color: #008ed3;
    padding: 20px 25px 15px 25px;
  }
  .division {
    flex-direction: column;
    align-items: start;
  }
  .atras {
    margin-bottom: 27px;
  }
  .miperfil {
    font-size: 26px;
  }
  #iconocampana {
    display: none;
  }
  .container-nombre {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 28px 0 34px;
  }
  .c {
    position: absolute;
    right: 28px;
    bottom: 10px;
    padding: 0;
    width: max-content;
    border: 10px solid #008ed3;
    order: 2;
    margin: 0;
  }
  .circulo > h2 {
    font: normal normal bold 60px Open Sans;
  }
  .circulo {
    width: 118px;
    height: 118px;
  }
  .nombre {
    color: #162138;
    margin: 0;
    padding-top: 15px;
    font-size: 23px;
  }
  .contenedor {
    max-width: 100%;
    padding: 0 34px 27px 34px;
  }
  .datos {
    margin-top: 10px;
  }
  .titulo {
    color: #172139;
    font-size: 14px;
  }
  .semibold {
    color: #4b566c;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .links p:not(:last-child) {
    margin-bottom: 12px;
  }
  .links p a,
  .link {
    color: #008ed3;
    font-size: 14px;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
  #acomodo {
    display: block;
  }
  .circuloayuda {
    float: right;
  }
  .ayudatext {
    display: none;
  }
  .notificacion {
    background-color: #f0f6fa;
    border-radius: 30px;
    padding: 0 20px;
  }
  #img-notif {
    position: relative;
    top: -20px;
  }
  #contenedortext1 {
    justify-content: center;
  }
  #contenedortext1 section:last-child {
    display: none;
  }
  .container-notificacion {
    /* overflow: inherit; */
    margin-top: 0;
  }
  .container-notificacion2 {
    max-width: 100%;
    margin-right: 0;
    margin-left: 0px;
  }
  #contenedortext2 {
    margin-right: 0px;
  }
  #img-notif #notificacion {
    display: inherit;
    position: absolute;
    right: 8px;
    top: 10px;
    border: 1px solid #FFF;
  }
  .msj {
    font: normal normal 600 14px Open Sans;
  }
  .fecha {
    font: normal normal 600 12px Open Sans;
  }
  .info-notificacion {
    max-width: 230px;
  }
  .info {
    font: normal normal 600 20px Open Sans;
  }
  .sin-notificacion {
    box-shadow: 0px 0px 6px #00000029;
    justify-content: center;
    height: 203px;
  }
}

@media (max-width: 500px) {

  #img-notif img {
    border-radius: 50%;
  }

  .main_container {
    width: 100%;
    max-width: 1280px;
    /*padding: 31px 0 31px 0;*/
    margin: auto;
    display: flex;
  }
  .nombre {
    font-size: 20px;
  }
  .msj {
    max-width: 210px;
    font: normal normal 600 12px Open Sans;
  }
  .eliminar {
    font: normal normal 600 16px Open Sans;
    margin-right: 10px;
  }
  .links p a,
  .links,
  .link {
    text-decoration: underline;
  }
  .content-notificaciones {
    max-height: max-content;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .info {
      max-width: 250px;
  }
}

@media (max-width: 320px) {
  .nombre {
    font-size: 17px;
  }

  .links p a,
  .link {
    font-size: 12px;
  }

  .msj {
    max-width: 190px;
    font: normal normal 600 10px Open Sans;
  }

  .titulo,
  .semibold {
    font-size: 12px;
  }

  #contenedorperfil {
    padding: 20px 20px 15px 20px;
  }

  .container-nombre {
    padding: 0 20px 0 20px;
  }

  .contenedor {
    padding: 0 20px 27px 20px;
  }
}
</style>
