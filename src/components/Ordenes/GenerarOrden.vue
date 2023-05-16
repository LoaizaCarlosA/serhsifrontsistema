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
        <div class="label">Cliente:</div>
        <select class="buscadorSelect" name="" id="idcliente" v-model="idCliente" >
          <option value="" disabled selected>Seleccionar...</option>
            <option :value="cliente_nombre.idUsuario" v-for="cliente_nombre in clientes" :key="cliente_nombre.idUsuario">
              {{ `${cliente_nombre.nombre} ${cliente_nombre.apellidoPaterno} ${cliente_nombre.apellidoMaterno}`}}
            </option>
        </select>
      </div>
      <div>
        <div class="label">Reparador:</div>
        <select class="buscadorSelect" name="" id="idreparador" v-model="idReparador" >
          <option value="" disabled selected>Seleccionar...</option>
            <option :value="reparador_nombre.idUsuario" v-for="reparador_nombre in reparadores" :key="reparador_nombre.idUsuario">
              {{ `${reparador_nombre.nombre} ${reparador_nombre.apellidoPaterno} ${reparador_nombre.apellidoMaterno}`}}
            </option>
        </select>
      </div>
      <div>
        <div class="label">Herramienta:</div>
        <select class="buscadorSelect" name="" id="idherramienta" v-model="idHerramienta" >
          <option value="" disabled selected>Seleccionar...</option>
            <option :value="herramienta_nombre.id_herramienta" v-for="herramienta_nombre in herramientas" :key="herramienta_nombre.idUsuario">
              {{ `${herramienta_nombre.marca} ${herramienta_nombre.modelo}`}}
            </option>
        </select>
      </div>
      <div>
        <div class="label">Número de serie:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="10"
          name=""
          id=""
          placeholder="Ingrese el número de serie"
          v-model="numeroSerie" 
        />
      </div>

      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Regresar</Button>
        <Button class="btn-guardar" @click="registrarCotizacion">Guardar</Button>
      </section>
    </section>

  </ModalBase>
</template>

<script>
import ModalBase from "../Modales/ModalBase.vue";
import Button from "../Forms/Button.vue";
import LoadScreen from "../Forms/LoadScreen.vue";
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
    tituloHeader: {
      type: String,
      default: "Agregar cotización",
    },
  },
  data() {
    return {
      showAddProducto: false,
      mostrarLoader: false,
      mostrarModal: true,
      mostrarExito:false,
      mostrarError:false,
      clientes:[],
      reparadores:[],
      herramientas:[],
      idCliente:'',
      idReparador:'',
      idHerramienta:'',
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
    cargarClientes() {
    api.get('/clientes')
      .then(response => {
        this.clientes = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    cargarReparadores() {
    api.get('/empleados')
      .then(response => {
        this.reparadores = response.data.filter(empleado => empleado.rol === 'ROLE_REPARADOR');
      })
      .catch(error => {
        console.log(error)
      })
    },
    cargarHerramientas() {
    api.get('/herramientas')
      .then(response => {
        this.herramientas = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    enviarnotificacion(telefono){
      api.post('/api/v1/processSMS', {
        destinationSMSNumber: '+52' + telefono, // número de teléfono del destinatario
        smsMessage: 'USTED HA SIDO ASIGNADO A UNA NUEVA COTIZACIÓN' // contenido del mensaje
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    },
    
    obtenerNumeroTelefonoCliente(idCliente) {
    api.get(`/clientes/${idCliente}`)
      .then(response => {
        const cliente = response.data;
        const numeroTelefono = cliente.telefono;
        // Utiliza el número de teléfono como desees
        console.log(numeroTelefono);
        this.enviarnotificacion(numeroTelefono);
      })
      .catch(error => {
        console.log(error);
      });
  },
    registrarCotizacion: function(){
      const cotizacion = {
        idReparador:this.idReparador,
        idCliente: this.idCliente,
        idHerramienta:this.idHerramienta,
        numeroSerie:this.numeroSerie,
        
      }

      
      api.post('/cotizaciones', cotizacion)
        .then(response => {
          console.log(response.cotizacion);
          this.obtenerNumeroTelefonoCliente(this.idCliente);
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
          console.error(error);
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
  this.cargarClientes()
  this.cargarReparadores();
  this.cargarHerramientas();
  }
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
  max-width: 100%;
  padding: 0;
  /* margin: 20px auto 0 auto; */
  margin-top: 5px;
  margin-bottom: 30px;
}
.contenedorPrincipal {
  margin: 0px 30px;
}
.label {
  /* font-weight: 500; */
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
