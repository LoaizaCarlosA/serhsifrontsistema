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
        <div class="label">Marca:</div>
        <select class="buscadorSelect" name="" id="marca" v-model="idMarca" >
          <option value="">Seleccionar...</option>
            <option :value="marca_herramienta.id_marca" v-for="marca_herramienta in marcas" :key="marca_herramienta.id_marca">
              {{ marca_herramienta.marca}}
            </option>
        </select>
      </div>
      <div>
        <div class="label">Modelo:</div>
        <input
          class="inputEditar"
          type="text"
          maxlength="10"
          name=""
          id="modelo"
          v-model="modelo"
          placeholder="Ingrese el modelo"
        />
      </div>
      <div>
        <div class="label">Tipo de herramienta:</div>
        <select class="buscadorSelect" name="" id="estatus" v-model="idTipoHerramienta" >
          <option value="">Seleccionar...</option>
            <option :value="tipo_herramienta.id_tipo_herramienta" v-for="tipo_herramienta in tipos" :key="tipo_herramienta.id_tipo_herramienta">
              {{ tipo_herramienta.tipo }}
            </option>
        </select>
      </div>
      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Regresar</Button>
        <Button class="btn-guardar" @click="registrarHerramienta">Guardar</Button>
      </section>
    </section>
  
  </ModalBase>
</template>

<script>
import api from '@/api.js';
import ModalBase from "@/components/Modales/ModalBase.vue";
import Button from "@/components/Forms/Button.vue";
import LoadScreen from "@/components/Forms/LoadScreen.vue";
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
      default: "Agregar herramienta",
    },
  },
  data() {
    return {
      showAddProducto: false,
      mostrarLoader: false,
      mostrarModal: true,
      mostrarExito:false,
      mostrarError:false,
      tipos: [],
      marcas:[],
      idMarca:'',

      idTipoHerramienta: '',
      modelo:'',
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
    cargarTipos() {
    api.get('/herramientas/tipo')
      .then(response => {
        this.tipos = response.data

      })
      .catch(error => {
        console.log(error)
      })
    },
    cargarMarcas() {
    api.get('/herramientas/marcas')
      .then(response => {
        this.marcas = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    registrarHerramienta: function(){
      const herramienta = {
        idMarca: this.idMarca,
        modelo: this.modelo,
        idTipoHerramienta: this.idTipoHerramienta,
        activo:true
      }
      api.post('/herramientas', herramienta)
        .then(response => {
          console.log(response.herramienta);
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
  this.cargarTipos();
  this.cargarMarcas();
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
