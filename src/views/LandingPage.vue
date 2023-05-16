<template>
  <section class="contenedorPrincipal">
    <section class="contenedorLogin">
      <section class="contenedorInfoLogin">
        <img class="logo" src="../assets/img/LogotipoB.png" alt="" />
        <div class="bienvenidoCopie">Bienvenido</div>
        <input
          class="contenedorInputUsuario"
          id="inputCorreo"
          v-model="inputCorreo"
          placeholder="Correo electrónico"
          :maxlength="50"
        />
        <input
          class="contenedorInputPassword"
          id="inputPass"
          v-model="inputPass"
          placeholder="Contraseña"
          :maxlength="60"
          autocomplete="off"
          type="password"
        />
          <div class="ojo user-select-none">
            <i class="icon-visualizar"></i>
          </div>
        
        <div
          v-if="loginErrorMsg !== null"
          class="contenedorError error"
          :class="loginErrorMsg !== null ? 'active' : ''"
        >
          <!-- <img class="candadoImg" src="@assets/img/candado-error.svg" alt="" /> -->
          <div class="copieError">{{ loginErrorMsg }}</div>
        </div>
        <div class="contenedorRegistrar">
          <button class="botonRegistrar" @click="mostrarAddService">Regístrate</button>
        </div>
        <Button id="btnIngresar" class="user-select-none" @click="login"
          >Ingresar</Button
        >
      </section>
    </section>
    <section class="contenedorImagen">
      <div class="imagenLogin"></div>
    </section>
  </section>
  <ModalRegistro
    v-if="showAddProducto"
    @cancelar="showAddProducto = false"
  ></ModalRegistro>
</template>

<script>
import Button from "@/components/Forms/Button.vue";
import ModalRegistro from "@/components/Modales/ModalRegistro.vue";
import api from '@/api.js';
import store from '@/store';
export default {
  beforeRouteEnter(to, from, next) {
    store.commit('setRole', ''); // establecer el valor de rol en el store a ''
    store.commit('setNombreCompleto', '');
    store.commit('setId','');
    localStorage.setItem('role', '');
    localStorage.setItem('nombre','');
    localStorage.setItem('id','');
    next();
  },
  components: {
    Button,
    ModalRegistro,
  },
  methods: {
    login() {
      const username = this.inputCorreo;
      const password = this.inputPass;
      
      const basicAuth = 'Basic ' + btoa(username + ':' + password);
      api.post('/auth', {}, {
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then(response => {
        const user = response.data[0].nombre + ' ' + response.data[0].apellidoPaterno + ' ' + response.data[0].apellidoMaterno;
        const id = response.data[0].idUsuario;
        const role = response.data[1]; // the role string
        console.log('Bienvenido: ' + user); // the user object
        console.log('Role: ' + role); // the role string
        store.commit('setRole', role); // save role in global state
        store.commit('setId', id);
        store.commit('setNombreCompleto', user);
        localStorage.setItem('role', role);
        localStorage.setItem('id', id);
        localStorage.setItem('nombre',user);
        this.$router.push('/Dashboard');
      })
      .catch(error => {
        console.error(error);
        console.log('Credenciales incorrectas')
      });
    }
    ,
    mostrarEditar() {
      this.showAddEditar = true;
    },
    ocultarEditar() {
      this.showAddEditar = false;
    },
    mostrarAddService() {
      this.showAddProducto = true;
    },
    ocultarAddProd() {
      this.showAddProducto = false;
    },
  },
  data() {
    return {
      showAddEditar: false,
      showAddProducto: false,
      inputCorreo: '',
      inputPass: ''
    };
  },
};
</script>

<style scoped>
body {
  margin: 0px;
  font-family: sans-serif;
}
.contenedorPrincipal {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 450px;
  margin: 0px;
}
.contenedorLogin {
  display: flex;
  width: 70%;
  background-repeat: no-repeat;
  background-size: 40rem;
  /* background-color: #171717; */
  background-color: #fefefe;
  background-position: left bottom;
  background-position: -261px;
  padding: 0px 20px;
  transition: all 0.2s;
}
.contenedorInfoLogin {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 20px;
  transition: all 0.2s;
}
.bienvenidoCopie {
  /* font-style: normal; */
  font-weight: 300;
  font-size: 32px;
  color: Black;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  /* padding-bottom: 20px; */
  font-weight: 700;
  color: #ef7b14;
}
.contenedorInputUsuario {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 23px;
  height: 45px;
  padding-left: 36px;
  font-size: 18px;
  margin-top: 28px;
  color: #696969;
  outline: none;
  border: dashed;
}
.inputUsuario {
  width: 90%;
  height: 45px;
  border: 0;
  outline: none;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}
.contenedorInputPassword {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 23px;
  height: 45px;
  padding-left: 36px;
  font-size: 18px;
  margin-top: 40px;
  color: #696969;
  outline: none;
  border: dashed;
}
.contenedorError {
  background: #ffffff4a;
  border-radius: 6px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
}
.candadoImg {
  padding-left: 15px;
  padding-right: 8px;
}
.copieError {
  color: #ebc032;
  letter-spacing: 0px;
  font-style: normal;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
}
.contenedorRegistrar {
  display: flex;
  justify-content: center;
}
.botonRegistrar {
  border: none;
  font-size: 18px;
  color: #ef7b14;
  background: none;
  cursor: pointer;
}
.botonRegistrar:hover {
  color: black;
}

#btnIngresar {
  margin-top: 25px;
  background: #414041;
  border-radius: 23px;
  color: white;
  border: 0;
  cursor: pointer;
  font-style: normal;
  font-size: 18px;
  padding: 12px 5px;
  transition: all 0.1s;
}
#btnIngresar:hover {
  background-color: #e37316;
  color: white;
}
#btnIngresar:active {
  background-color: #e37316;
  color: white;
}
.contenedorImagen {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9b9b9;
}
.imagenLogin {
  background-image: url("../assets/img/final-final-final-final_Mesa-de-trabajo-1-2048x747.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-color: #b9b9b9;
  /* background-color: #b9b9b9; */
  background-position: center;
  transition: all 0.2s;
}
.logo {
  width: 60%;
  height: auto;
  align-self: center;
}
.error {
  overflow: hidden;
  opacity: 0;
  color: #fff;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
.error.active {
  opacity: 1;
  margin-top: 15px;
}
.ojo.active {
  color: #c5b100;
}
#inputPass {
  margin-top: 40px;
}
.ojo {
  position: absolute;
  background-color: #fff;
  top: calc(4px / 2);
  right: 3px;
  font-size: 12px;
  cursor: pointer;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.ojo .icon-visualizar {
  display: flex;
  align-items: center;
}
.ojo:hover {
  background: #f6f6f6;
}
.ojo:active {
  background: #e5e5e5;
}
.ojo i::before {
  width: 2em;
}
@media (max-width: 1279px) {
  .contenedorLogin {
    width: 100%;
  }
  .contenedorImagen {
    display: none;
  }
}
@media (max-width: 767px) {
  .contenedorLogin {
    width: 100%;
  }
  .contenedorInfoLogin {
    max-width: 346px;
  }
  .inputUsuario {
    font: 14px;
  }
  #btnIngresar {
    font: 14px;
  }
}
@media (max-height: 650px) {
  .imagenLogin {
    height: 100%;
    background-position: top;
  }
}
</style>
