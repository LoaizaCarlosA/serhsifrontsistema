<template>
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

              </tr>
              <tbody>
                <tr v-for="orden in FiltroCotizaciones" :key="orden.idOrdenReparacion">
                  <td>{{ orden.idOrdenReparacion }}</td>
                  <td>{{ `${orden.marca} ${orden.modelo} ${orden.numeroSerie}`}}</td>
                  <td>{{ orden.fechaInicio }}</td>
                  <td>{{ orden.fechaFin }}</td>
                  <td>{{ orden.estado }}</td>
                  <td>{{ orden.costoTotal }}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <Paginacion></Paginacion>
      </ContainerWhite>
      <AgregarCotizacion
        v-if="showAddProducto"
        @cancelar="showAddProducto = false"
      ></AgregarCotizacion>
      <VerCotizacionCliente :idCotizacion="idCotizacion"
      v-if="showAddEditar"
        @cancelar="showAddEditar = false">
        
      </VerCotizacionCliente>
  
    </LayoutPrincipal>
  </template>
  
  <script>
  import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
  import ContainerWhite from "@/layouts/ContainerWhite.vue";
  import Paginacion from "../components/Forms/Paginacion.vue";
  // import EditarEmpleado from "@/components/Empleados/EditarEmpleado.vue";
  // import AgregarEmpleados from "@/components/Empleados/AgregarEmpleados.vue";
  import AgregarCotizacion from "@/components/Cotizaciones/AgregarCotizacion.vue";
  import store from '@/store';
  import api from '@/api.js';
  import VerCotizacionCliente from "@/components/Cotizaciones/VerCotizacionCliente.vue";
  // import TableCollapse from "../components/Tables/TableCollapse.vue";
  // import HeadTableCollapse from "../components/Tables/HeadTableCollapse.vue";
  
  export default {
    components: {
      LayoutPrincipal,
      ContainerWhite,
      Paginacion,
      // EditarEmpleado,
      // AgregarEmpleados,
      AgregarCotizacion,
      VerCotizacionCliente
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
        ordenes: [
        ],
        estados: ["Pendiente","En proceso","Terminada"],
        SelectEstatus: "",
      };
    },
    methods: {
      mostrarEditar(idCotizacion) {
        this.idCotizacion = idCotizacion;
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
      cargarOrdenes() {
        const idCliente = store.state.id;
        api.get('/ordenes')
      .then(response => {
      
        console.log(idCliente);
        let ordenes = response.data;
        this.ordenes = ordenes.filter(orden => orden.idCliente === parseInt(idCliente));
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
    width: 100%;
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

  @media screen and (max-width: 1024px) { 
  .default {
    font-size: 14px; 
  }
  
  .default td, .default th {
    padding: 6px; 
  }
}
@media screen and (max-width: 768px) { 
  .default {
    font-size: 12px;
  }
  
  .default td, .default th {
    padding: 4px; 
  }
  
  .tituloModulo {
    font-size: 16px; 
    transform: translateX(-20px);
  }
  
  .inputBuscador {
    font-size: 12px; 
    padding: 6px; 
  }
  
  .btn-buscar, .btn-agregar {
    font-size: 12px; 
    padding: 6px 12px; 
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) { 
  .default {
    font-size: 12px; 
  }
  
  .default td, .default th {
    padding: 4px;
  }
  
  .tituloModulo {
    font-size: 16px; 
    
  }
  
  .inputBuscador {
    font-size: 12px; 
    padding: 6px;
  }
  
  .btn-buscar, .btn-agregar {
    font-size: 12px; 
    padding: 6px 12px; 
  }
}

@media screen and (max-width: 480px) { 
  .default {
    border-top: 1px solid #ccc;
    font-size: 12px; 
  }
  
  .cabecera {
    display: none; 
  }
  
  .default td, .default th {
    display: block;
    text-align: center;
    width: 95%;
  
    padding: 6px; 
  }
  
  
  .default td::before {
    content: attr(data-label);
    display: block; 
    font-weight: bold; 
    margin-bottom: 10px; 
  }

  
}

@media screen and (max-width: 1024px) { 
  .tituloModulo {
    font-size: 20px; 
  }
  
  .inputBuscador {
    font-size: 14px; 
    padding: 8px; 
  }
  
  .btn-buscar, .btn-agregar {
    font-size: 14px; 
    padding: 8px 16px; 
  }
}

@media screen and (max-width: 480px) { 
  .filtrosEmpleados {
    flex-direction: column;
    align-items: stretch;
   
    
  }
  
  .tituloModulo {
    font-size: 18px; 
    margin-bottom: 10px; 
    transform: translateX(-20px);
  }
  
  .inputBuscador {
    font-size: 12px; 
    padding: 6px; 
    margin-bottom: 10px; 
    transform: translateX(-20px);
    width: 100%;
  }
  
  .btn-agregar {
    font-size: 12px; 
    padding: 6px 12px; 
       position: absolute;
    top: 45px;
    right: 40px;
  }
}
  </style>