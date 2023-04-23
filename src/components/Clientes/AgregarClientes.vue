<template>
  <ModalBase>
    <section class="contenedorPrincipal">
      <section>
        <div class="titulo">{{ tituloHeader }}</div>
        <div class="separador"></div>
      </section>
      
      <div>
        <div class="label">Nombre:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="20"
          name=""
          id="nombre"
          v-model="nombre"
          placeholder="Ingrese el nombre"
        />
      </div>
      <div>
        <div class="label">Apellido paterno:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="20"
          name=""
          id="apellidoPaterno"
          v-model="apellidoPaterno"
          placeholder="Ingrese el apellido paterno"
        />
      </div>
      <div>
        <div class="label">Apellido materno:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="20"
          name=""
          id="apellidoMaterno"
          v-model="apellidoMaterno"
          placeholder="Ingrese el apellido materno"
        />
      </div>
      <div>
        <div class="label">Genero:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="20"
          name=""
          id="sexo"
          v-model="sexo"
          placeholder="Ingrese su genero"
        />
      </div>
      <div>
      <div class="label">Fecha de nacimiento:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id="fechaNacimiento"
          v-model="fechaNacimiento"
          placeholder="Ingrese su fecha de nacimiento"
        />
      </div>
      <div>
        <div class="label">Teléfono:</div>
        <input
          class="inputEditar"
          type="tel"
          maxlength="10"
          name=""
          id="telefono"
          v-model="telefono"
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div>
        <div class="label">Correo:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="40"
          name=""
          id="correo"
          v-model="correo"
          placeholder="Ingrese un correo electrónico"
        />
      </div>
      <div>
        <div class="label">Contraseña:</div>
        <input
          class="inputEditar"
          type="password"
          name=""
          id="clave"
          v-model="clave"
          placeholder="Ingrese un teléfono"
        />
      </div>
      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Regresar</Button>
        <Button class="btn-guardar" @click="registrarCliente">Guardar</Button>
      </section>
    </section>
    <LoadScreen v-if="showAddProducto" @cerrar="ocultarAddProd"></LoadScreen>
  </ModalBase>
</template>

<script>
import ModalBase from "@/components/Modales/ModalBase.vue";
import Button from "@/components/Forms/Button.vue";
import LoadScreen from "@/components/Forms/LoadScreen.vue";
import axios from 'axios';
export default {
  components: {
    ModalBase,
    Button,
    LoadScreen,
  },
  props: {
    tituloHeader: {
      type: String,
      default: "Agregar cliente",
    },
  },
  data() {
    return {
      showAddProducto: false,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: '',
      fechaNacimiento: '',
      telefono: '',
      correo: '',
      clave: ''
    };
  },
  emits: ["cancelar"],
  methods: {
    mostrarAddService() {
      this.showAddProducto = true;
    },
    ocultarAddProd() {
      this.showAddProducto = false;
    },
    cancelar() {
      this.$emit("cancelar");
    },
    registrarCliente: function(){
      const cliente = {
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        sexo:this.sexo,
        fechaNacimiento:this.fechaNacimiento,
        telefono:this.telefono,
        correo:this.correo,
        clave:this.clave
      }
      axios.post('http://localhost:10000/clientes', cliente)
        .then(response => {
          console.log(response.cliente);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.titulo {
  padding: 30px 0px 0px 0px;
  font-size: 30px;
}
.separador {
  border-top: 3px solid #ef7b14;
  height: 2px;
  max-width: 80%;
  padding: 0;
  /* margin: 20px auto 0 auto; */
  margin-top: 5px;
  margin-bottom: 30px;
}
.contenedorPrincipal {
  margin: 0px 30px;
}
.label {
  margin: 17px 0px 5px;
}
.inputEditar {
  width: 300px;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
}
.buscadorSelect {
  width: 100%;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  padding: 0px 7px;
  border-radius: 10px;
}
.contenedorBotones {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: auto;
  padding: 30px 0px 20px;
}
</style>
