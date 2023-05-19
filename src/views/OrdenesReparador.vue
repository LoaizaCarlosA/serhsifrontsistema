<template>
    <LoadScreen v-if="mostrarLoader"></LoadScreen>
   <ModalExito v-if="mostrarExito"></ModalExito>
   <ModalError v-if="mostrarError"></ModalError>
    <LayoutPrincipal>
      <ContainerWhite>
        <section class="filtrosEmpleados">
          <div class="tituloModulo">Lista de ordenes</div>
          
          <div>
          <select class="buscadorSelect" v-model="SelectEstatus" id="estatus">
              <option value="">Seleccionar...</option>
              <option v-for="estadoCotizacion in estados" :key="estadoCotizacion">
                {{ estadoCotizacion }}
              </option>
            </select>
  
  
            <input
              class="inputBuscador"
              type="text"
              placeholder="Inserte nombre o ID"
            />
            <!-- <Button class="btn-buscar">Buscar</Button> -->
            
            
          </div>
        </section>
        <section>
          <section class="tablaPrincipal">
            <table class="default">
              <tr class="cabecera">
                <td>ID orden</td>

                <td>Herramienta</td>
  
                <td>Fecha de entrada</td>
  
                <td>Fecha fin</td>
  
                <td>Estado</td>
  
                <td>Costo total</td>

                <td>Acciones</td>

              </tr>
              <tbody>
                <tr v-for="orden in FiltroCotizaciones" :key="orden.idOrdenReparacion">
                  <td>{{ orden.idOrdenReparacion }}</td>
                  <td>{{ `${orden.marca} ${orden.modelo} ${orden.numeroSerie}`}}</td>
                  <td>{{ orden.fechaInicio }}</td>
                  <td>{{ orden.fechaFin }}</td>
                  <td>{{ orden.estado }}</td>
                  <td>{{ orden.costoTotal }}</td>

                  <td>
                  <div class="botonesTabla">
                    <Button v-if="orden.estado === 'Pendiente'" class="btn-editar" @click="mostrarEditar(orden.idOrdenReparacion)"
                      >Actualizar</Button
                    >

                    <Button v-if="orden.estado === 'En Proceso'" id="btn-descargar" class="btn-guardar" @click="terminarOrden(orden.idOrdenReparacion)">Terminar</Button >
                    <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                  </div>
                </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <Paginacion></Paginacion>
      </ContainerWhite>
    
      <ActualizarOrden :idOrdenReparacion="idOrdenReparacion"
      v-if="showAddEditar"
        @cancelar="showAddEditar = false">
        
      </ActualizarOrden>
  
    </LayoutPrincipal>
  </template>
  
  <script>
  import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
  import ContainerWhite from "@/layouts/ContainerWhite.vue";
  import Paginacion from "../components/Forms/Paginacion.vue";
  // import EditarEmpleado from "@/components/Empleados/EditarEmpleado.vue";
  // import AgregarEmpleados from "@/components/Empleados/AgregarEmpleados.vue";
  import ActualizarOrden from "@/components/Ordenes/ActualizarOrden.vue";
  import Button from "../components/Forms/Button.vue";
  import store from '@/store';
  import api from '@/api.js';
  import ModalExito from "@/components/Modales/ModalExito.vue";
 import ModalError from "@/components/Modales/ModalError.vue";
 import LoadScreen from "@/components/Forms/LoadScreen.vue";
  // import TableCollapse from "../components/Tables/TableCollapse.vue";
  // import HeadTableCollapse from "../components/Tables/HeadTableCollapse.vue";
  
  export default {
    components: {
      LayoutPrincipal,
      ContainerWhite,
      Paginacion,
      Button,
      
      ActualizarOrden,
      LoadScreen,
     ModalExito,
     ModalError,

      // EditarEmpleado,
      // AgregarEmpleados,
  },
    created() {
    const id = localStorage.getItem('id');
    if (id) {
      store.commit('setId', id); // establecer el valor del id en el store
    }
  },
    
    props: {},
    data() {
      return {
        showAddEditar: false,
        showAddProducto: false,
        mostrarLoader: false,
       mostrarExito:false,
       mostrarError:false,
        ordenes: [
        ],
        estados: ["Pendiente","En proceso","Terminada"],
        SelectEstatus: "",
      };
    },
    methods: {
      mostrarEditar(idOrdenReparacion) {
        this.idOrdenReparacion = idOrdenReparacion;
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
      enviarnotificacion(telefono,idOrdenReparacion){
      api.post('/api/v1/processSMS', {
        destinationSMSNumber: '+52' + telefono, // número de teléfono del destinatario
        smsMessage: 'SU ORDEN DE REPARACIÓN CON EL FOLIO '+idOrdenReparacion+' HA TERMINADO, PUEDE PASAR POR SU HERRAMIENTA AL ESTABLECIMIENTO.' // contenido del mensaje
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    },

    obtenerNumeroTelefono(idOrdenReparacion) {
  return api.get(`/ordenes`)
    .then(response => {
      const ordenes = response.data; // Obtener todas las órdenes
      const orden = ordenes.find(orden => orden.idOrdenReparacion === idOrdenReparacion); // Filtrar la orden con el idOrdenReparacion
      if (orden) {
        return orden.telefono; // Devolver el telefonoCliente de la orden encontrada
      } else {
        throw new Error(`No se encontró ninguna orden con el idOrdenReparacion ${idOrdenReparacion}`);
      }
    })
    .catch(error => {
      console.error(error);
 
    });
},
      terminarOrden(idOrdenReparacion){
      api.put(`/ordenes/${idOrdenReparacion}/terminar`)
         .then(response => {
           console.log(response.cliente);
           this.mostrarLoader = true; // Mostrar el loader
           this.obtenerNumeroTelefono(idOrdenReparacion) // Llamada a la función para obtener el número de teléfono
        .then(telefono => {
          setTimeout(() => {
            this.mostrarLoader = false; // Ocultar el loader
          }, 1000);

          setTimeout(() => {
            this.mostrarExito = true;
          }, 1100);

          setTimeout(() => {
            this.mostrarExito = false;
            window.location.reload();
          }, 3000);

          this.enviarnotificacion(telefono,idOrdenReparacion); // Llamada al método enviarnotificacion con el número de teléfono como parámetro
        })
        .catch(error => {
          console.error(error);
        });
    })
         .catch(error => {
           console.error(error);
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
      cargarOrdenes() {
        const idReparador = store.state.id;
        api.get('/ordenes')
      .then(response => {
      
        let ordenes = response.data;
        this.ordenes = ordenes.filter(orden => orden.idReparador === parseInt(idReparador));
      })
      .catch(error => {
        console.log(error)
      })
  },
    
      
    },
   
    
    mounted() {
    this.cargarOrdenes();
  
    },
  
    computed: {
      FiltroCotizaciones() {
        if (!this.SelectEstatus) {
      return this.ordenes.slice().sort((a, b) => a.idOrdenReparacion - b.idOrdenReparacion);
    }
    return this.ordenes.filter(orden => orden.estado === this.SelectEstatus).slice().sort((a, b) => a.idOrdenReparacion - b.idOrdenReparacion);
  },
      
    },
  };
  </script>
  
  <style scoped>
  .proximamente {
    text-align: center;
    /* font-family: "Roboto"; */
    /* font-size: 30px; */
    display: flex;
    color: #707070;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  
  .buscadorSelect {
    width: 20%;
    height: 32px;
    border: 0px solid #000000;
    box-shadow: 0px 3px 6px #00000029;
    outline: none;
    margin-right: 20px;
    border-radius: 10px;
  }
  
  .filtrosEmpleados {
    justify-content: space-between;
    display: flex;
    padding: 20px 20px 20px 50px;
    align-items: center;
  }
  .tituloModulo {
    font-size: 25px;
    color: #ef7b14;
  }
  
  .inputBuscador {
    width: 300px;
    height: 32px;
    border: 0px solid #000000;
    box-shadow: 0px 3px 6px #00000029;
    outline: none;
    color: #000000;
    padding: 0px 7px;
    border-radius: 10px;
    margin-right: 20px;
  }
  
  .tablaPrincipal {
    /* padding-top: 10px; */
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .default {
    /* font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; */
    border-collapse: collapse;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 3px 6px #00000029;
    /* margin-bottom: 40px; */
  }
  .cabecera {
    background: black;
    color: white;
  }
  
  .default td,
  .default th {
    border: none;
    padding: 12px 15px;
    text-align: center;
  }
  
  .default tr:nth-child(even) {
    background-color: #f8f8f8;
  }
  
  .default th {
    background-color: #1abc9c;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
  }
  
  .default td a {
    color: #1abc9c;
    text-decoration: none;
    font-weight: bold;
  }
  
  .default td a:hover {
    text-decoration: underline;
  }
  </style>