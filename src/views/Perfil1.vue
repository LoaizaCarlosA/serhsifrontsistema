<template>
  <Header></Header>
  <body>
    <router-link to="/Dashboard">
      <Button class="btn-regresar" id="return-to-top">← Regresar</Button>
    </router-link>
    <main>
      <div class="profile-info">
        <section class="perfil">
          <h1>Perfil</h1>
          <img src="../assets/svg/icono-usuario.svg" alt="Foto de perfil" />
        </section>
      </div>
      <div class="edit-form">
        <section class="informacion">
          <h2>Informacion actual del perfil</h2>
          <div>
            <div class="contenedorInputs">
              <label>Nombre:</label>
              <input
              type="text"
          maxlength="20"
          name=""
          id="nombre"
          v-model="nombre"
          placeholder="Ingrese el nombre"
              />
            </div>

            <div class="contenedorInputs">
              <label for="apellidos">Apellido paterno:</label>
              <input
              type="text"
          maxlength="20"
          name=""
          id="apellidoPaterno"
          v-model="apellidoPaterno"
          placeholder="Ingrese el apellido paterno"
              />
            </div>

            <div class="contenedorInputs">
              <label for="apellidos">Apellido materno:</label>
              <input
                
                type="text"
          maxlength="20"
          name=""
          id="apellidoMaterno"
          v-model="apellidoMaterno"
          placeholder="Ingrese el apellido materno"
              />
            </div>

            <!-- <div class="contenedorInputs">
              <label for="direccion">Dirección:</label>
              <input
                type="text"
                maxlength="50"
                id="direccion"
                name="direccion"
                value="Calle 123, Ciudad"
              />
            </div> -->

            <div class="contenedorInputs">
              <label for="telefono">Teléfono:</label>
              <input
              type="tel"
          maxlength="10"
          name=""
          id="telefono"
          v-model="telefono"
          placeholder="Ingrese un teléfono"
              />
            </div>

            <div class="contenedorInputs">
              <label for="telefono">Correo:</label>
              <input
              type="text"
          maxlength="40"
          name=""
          id="correo"
          v-model="correo"
          placeholder="Ingrese un correo electrónico"
              />
            </div>

            <div class="buttons">
              <Button class="btn-guardar" @click="actualizarUsuario">Guardar</Button>
            </div>
          </div>
        </section>
      </div>
      <div class="edit-form">
        <section class="informacion2">
          <h2>Notificaciones</h2>
          <section class="sombraInputNoti">
            <div class="contenedorNotificaciones">
              <div class="contenedorImgNoti">
                <img
                  class="imgNoti"
                  src="../assets/img/notificacion.png"
                  alt=""
                />
              </div>
              <div class="infoNotificacion">
                <div class="tituloNoti">Notificación</div>
                <div>Esta es una prueba de notificación</div>
              </div>
              <div class="tachitaNoti">
                <div>X</div>
              </div>
            </div>
          </section>
          <br />
          <section class="sombraInputNoti">
            <div class="contenedorNotificaciones">
              <div class="contenedorImgNoti">
                <img
                  class="imgNoti"
                  src="../assets/img/notificacion.png"
                  alt=""
                />
              </div>
              <div class="infoNotificacion">
                <div class="tituloNoti">Notificación</div>
                <div>Esta es una prueba de notificación</div>
              </div>
              <div class="tachitaNoti">
                <div>X</div>
              </div>
            </div>
          </section>
          <br />
          <section class="sombraInputNoti">
            <div class="contenedorNotificaciones">
              <div class="contenedorImgNoti">
                <img
                  class="imgNoti"
                  src="../assets/img/notificacion.png"
                  alt=""
                />
              </div>
              <div class="infoNotificacion">
                <div class="tituloNoti">Notificación</div>
                <div>Esta es una prueba de notificación</div>
              </div>
              <div class="tachitaNoti">
                <div>X</div>
              </div>
            </div>
          </section>
          <br />
          <section class="sombraInputNoti">
            <div class="contenedorNotificaciones">
              <div class="contenedorImgNoti">
                <img
                  class="imgNoti"
                  src="../assets/img/notificacion.png"
                  alt=""
                />
              </div>
              <div class="infoNotificacion">
                <div class="tituloNoti">Notificación</div>
                <div>Esta es una prueba de notificación</div>
              </div>
              <div class="tachitaNoti">
                <div>X</div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  </body>
</template>

<script>
import Header from "@/layouts/header.vue";
import Button from "@/components/Forms/Button.vue";
import store from '@/store';
import api from '@/api.js';
export default {
  created() {
  const role = localStorage.getItem('role');
  const id = localStorage.getItem('id');
  if (id) {
    store.commit('setId', id); // establecer el valor del id en el store
  }
  if (role) {
    store.commit('setRole', role); // establecer el valor del rol en el store
  }

},
  components: {
    Header,
    Button,
  },

  props: {},
  data() {
    return {
      showAddEditar: false,
      showAddProducto: false,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: '',
      fechaNacimiento: '',
      telefono: '',
      correo: '',
    
    };
  },
  methods: {
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
    actualizarUsuario() {
      const id = store.state.id;
      const role = store.state.role;
      
      if(role === 'ROLE_CLIENTE'){
        const cliente= {
         nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      sexo: this.sexo,
      fechaNacimiento: this.fechaNacimiento,
      telefono: this.telefono,
      correo: this.correo
      }
      api.put(`/clientes/${id}`, cliente)
        .then(response => {
          console.log(response)
          const nombreCompleto = `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
      localStorage.setItem('nombre',nombreCompleto);
      this.$store.dispatch('actualizarNombreCompleto', nombreCompleto);
          
          // Aquí puedes agregar alguna acción después de actualizar el usuario
        })
        .catch(error => {
          console.log(error)
          // Aquí puedes manejar el error de la solicitud PUT
        })
      }else{
        const empleado= {
          nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      sexo: this.sexo,
      fechaNacimiento: this.fechaNacimiento,
      rol:this.rol,
      telefono: this.telefono,
      correo: this.correo
      }
        api.put(`/empleados/${id}`, empleado)
        .then(response => {
          console.log(response)
          const nombreCompleto = `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
      localStorage.setItem('nombre',nombreCompleto);
      this.$store.dispatch('actualizarNombreCompleto', nombreCompleto);
        })
        .catch(error => {
          console.log(error)
          // Aquí puedes manejar el error de la solicitud PUT
        })
      }
    },
    
  },
  
  mounted() {
    const id = store.state.id;
    const role = store.state.role;
    if(role === 'ROLE_CLIENTE'){
      console.log(id);
    api.get(`/clientes/${id}`)
      .then(response => {
        this.nombre = response.data.nombre;
        this.apellidoPaterno = response.data.apellidoPaterno;
        this.apellidoMaterno = response.data.apellidoMaterno;
        this.sexo = response.data.sexo;
        this.fechaNacimiento = response.data.fechaNacimiento;
        this.telefono = response.data.telefono;
        this.correo = response.data.correo;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    } else{
      api.get(`/empleados/${id}`)
      .then(response => {
        this.nombre = response.data.nombre;
        this.apellidoPaterno = response.data.apellidoPaterno;
        this.apellidoMaterno = response.data.apellidoMaterno;
        this.sexo = response.data.sexo;
        this.fechaNacimiento = response.data.fechaNacimiento;
        this.rol=response.data.rol;
        this.telefono = response.data.telefono;
        this.correo = response.data.correo;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
};
</script>

<style scoped>
#return-to-top {
  /* bottom: 20px;
  right: 30px; */
  /* font-size: 15px;
  border: none;
  outline: none;
  color: solid black;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  background: #fafafa; */
  position: absolute;
  top: 100px;
  left: 30px;
}

body {
  font-family: Arial, sans-serif;
  margin: 70px 0px 0px;
  padding: 0;
  background: #fafafa;
}

/* Contenido principal */
main {
  padding: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 110px;
}
.perfil {
  box-shadow: 0px 3px 6px #00000029;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  /* background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px; */
  /* padding-bottom: 50px; */
}

.profile-info {
  flex-basis: 10%;
  /* margin-left: 30px; */
  justify-content: center;
  display: flex;
  align-items: center;
}

.profile-info h1 {
  margin-top: 0;
  /* margin-left: 15px; */
}

.profile-info img {
  width: 100%;
}

.edit-form {
  flex-basis: 45%;
  /* padding-left: 50px; */
}

.contenedorInputs {
  display: flex;
  flex-direction: column;
}

.informacion {
  box-shadow: 0px 3px 6px #00000029;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  /* border: 1px solid #ccc;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); */
  /* margin-left: 30px; */
}
.informacion2 {
  box-shadow: 0px 3px 6px #00000029;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  height: 525px;
  margin-left: 30px;
  /* border: 1px solid #ccc;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-left: 30px;
  height: 525px; */
}
.sombraInputNoti {
  box-shadow: 0px 3px 6px #00000029;
  background-color: #ffffff;
  /* padding: 20px; */
  border-radius: 10px;
}
.contenedorNotificaciones {
  width: 100%;
  height: 50px;
  background: #ffa5006e;
  display: flex;
  justify-content: space-between;
}
.contenedorImgNoti {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.imgNoti {
  height: 40px;
}
.infoNotificacion {
  width: 100%;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
}
.tituloNoti {
  font-weight: bold;
  font-size: 17px;
}
.tachitaNoti {
  padding: 7px 10px 0px 0px;
}
.informacion h2 {
  margin-top: 0;
}

.informacion label {
  /* display: block; */
  margin-bottom: 5px;
  font-weight: bold;
}

.informacion input {
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  margin-bottom: 15px;
  /* display: block; */
  /* width: 100%; */
  /* padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); */
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

/* .buttons button {
  background-color: #0077ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.buttons button:first-child {
  background-color: green;
} */
</style>
