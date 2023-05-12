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
          :value="idOrdenReparacion"
          @input="$emit('update:idOrdenReparacion', $event.target.value)"
          disabled
        />
      </div>
      <div>
    <div class="label">Seleccione la fecha de finalización:</div>
    <input class="inputEditar" type="date" v-model="fecha_fin" @change="formatoFecha" />
  </div>
       <section class="contenedorBotones">
         <Button class="btn-regresar" @click="cancelar">Regresar</Button>
         <Button class="btn-guardar" @click="registrarCliente">Guardar</Button>
       </section>
     </section>
    
   </ModalBase>
 </template>
 
 <script>
 import ModalBase from "@/components/Modales/ModalBase.vue";
 import Button from "@/components/Forms/Button.vue";
 import LoadScreen from "@/components/Forms/LoadScreen.vue";
 import axios from 'axios';
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
    idOrdenReparacion: {
    type: Number, // o el tipo de dato que corresponda
    required: true // o false, según sea necesario
    },
     tituloHeader: {
       type: String,
       default: "Agregar fecha ",
     },
   },
   data() {
     return {
       showAddProducto: false,
       mostrarLoader: false,
       mostrarModal: true,
       mostrarExito:false,
       mostrarError:false,
       
       fecha_fin: '',
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
      var partesFecha = this.fecha_fin.split('-'); // Divide la fecha en año, mes y día

      // Formato deseado: AAAA-MM-DD
      this.fecha_fin = partesFecha[0] + '-' + partesFecha[1] + '-' + partesFecha[2];

      console.log(this.fecha_fin); // Muestra la fecha formateada en la consola

      
    },
     registrarCliente: function(){
       const cliente = {
         fecha_fin:this.fecha_fin,
     
       }
       axios.put(`http://localhost:10000/ordenes/${this.idOrdenReparacion}/reparar`, cliente)
         .then(response => {
           console.log(response.cliente);
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
 };
 </script>