<template>
  <LoadScreen v-if="mostrarLoader"></LoadScreen>
  <ModalExito v-if="mostrarExito"></ModalExito>
  <ModalError v-if="mostrarError"></ModalError>
  <ModalBase v-if="mostrarModal">
    <section class="contenedorPrincipal">
      <section>
        <div class="titulo">{{ tituloHeader }}</div>
        <div class="separador"></div>
      </section>
      <div>
        <div class="label">No. ID:</div>
        <input type="text"
        class="inputEditar"
          name=""
          :value="idUsuario"
          @input="$emit('update:idUsuario', $event.target.value)"
          disabled
        />
      </div>
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
        <div>
          <select class="buscadorSelect" name="" id="" v-model="sexo" >
            <option value="" disabled selected>Seleccionar...</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            
          </select>
        </div>
      </div>
      <div>
      <div class="label">Fecha de nacimiento:</div>
      <input class="inputEditar" type="date" v-model="fechaNacimiento" @change="formatoFecha" />

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
      
      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Regresar</Button>
        <Button class="btn-guardar" @click="actualizarCliente">Guardar</Button>
      </section>
    </section>
 
  </ModalBase>
</template>

<script>
import ModalBase from "@/components/Modales/ModalBase.vue";
import Button from "@/components/Forms/Button.vue";
import LoadScreen from "@/components/Forms/LoadScreen.vue";
import api from '@/api.js';
import ModalExito from "../Modales/ModalExito.vue";
import ModalError from "../Modales/ModalError.vue";

export default {
  components: {
    ModalBase,
    Button,
    LoadScreen,
    ModalExito,
    ModalError,
  },
  props: {
    idUsuario: {
    type: Number, // o el tipo de dato que corresponda
    required: true // o false, según sea necesario
    },
    tituloHeader: {
      type: String,
      default: "Editar cliente",
    },
    
    
  },
  data() {
    return {
      showAddProducto: false,
      mostrarLoader: false,
      mostrarModal: true,
      mostrarExito:false,
      mostrarError:false,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      sexo: '',
      fechaNacimiento: '',
      telefono: '',
      correo: '',
      clave: '',
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
    formatoFecha() {
      var partesFecha = this.fechaNacimiento.split('-'); // Divide la fecha en año, mes y día

      // Formato deseado: AAAA-MM-DD
      this.fechaNacimiento = partesFecha[0] + '-' + partesFecha[1] + '-' + partesFecha[2];

      console.log(this.fechaNacimiento); // Muestra la fecha formateada en la consola

      
    },
    actualizarCliente() {
    const cliente = {
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      sexo: this.sexo,
      fechaNacimiento: this.fechaNacimiento,
      telefono: this.telefono,
      correo: this.correo
    };
    api.put(`/clientes/${this.idUsuario}`, cliente)
      .then(response => {
        console.log(response);
        this.mostrarModal = false; // Ocultar el modal
          this.mostrarLoader = true; // Mostrar el loader
          setTimeout(() => {
            this.mostrarLoader = false; // Ocultar el loader
        }, 1000);
   
        setTimeout(() => {
          this.mostrarExito=true;
        }, 1100);   
          setTimeout(() => {
            this.mostrarExito=false;
            window.location.reload();
        }, 3000);
      })
      .catch(error => {
        console.log(error);
        this.mostrarModal = false; // Ocultar el modal
          this.mostrarLoader = true; // Mostrar el loader
          setTimeout(() => {
            this.mostrarLoader = false; // Ocultar el loader
        }, 1000);
   
        setTimeout(() => {
          this.mostrarError=true;
        }, 1100);   
          setTimeout(() => {
            this.mostrarError=false;
            window.location.reload();
        }, 3000);
      });
  },

    
  },
  mounted() {
    // aquí puedes utilizar el idUsuario para obtener los datos del usuario
    // y asignarlos a la variable usuario
    console.log('ID USUARIO: ' + this.idUsuario);
    api.get(`/clientes/${this.idUsuario}`)
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
