<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Lista de cotizaciones</div>
        
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
            v-model="searchText"
            placeholder="Inserte nombre o ID"
          />
          <!-- <Button class="btn-buscar">Buscar</Button> -->
          
          
        </div>
      </section>
      <section>
        <section class="tablaPrincipal">
          <table class="default">
            <tr class="cabecera">
              <td>ID Cotización</td>

              <td>Reparador</td>


              <td>Herramienta</td>

              <td>Costo(Sin IVA)</td>

              <td>Fecha</td>

              <td>Estatus</td>

              <td>Acciones</td>
            </tr>
            <tbody>
              <tr v-for="cotizacion in FiltroCotizaciones" :key="cotizacion.idCotizacion">
                <td>{{ cotizacion.idCotizacion }}</td>
                <td>{{ cotizacion.nombreReparador }}</td>
                <td>{{ `${cotizacion.marca} ${cotizacion.modelo} ${cotizacion.numeroSerie}`}}</td>
                <td>${{ cotizacion.costo }}</td>
                <td>{{ cotizacion.fechaEntrada }}</td>
                <td>{{ cotizacion.estadoCotizacion }}</td>

                <td>
                  <div class="botonesTabla">
                    <Button v-if="cotizacion.estadoCotizacion === 'Cotizado'" class="btn-editar" @click="mostrarEditar(cotizacion.idCotizacion)"
                      >Ver</Button
                    >
                    <Button v-if="cotizacion.estadoCotizacion === 'Cotizado'" id="btn-descargar" class="btn-guardar"  @click="descargarCotizacion(cotizacion.idCotizacion,cotizacion.costo)">Descargar</Button >
                    <Button v-if="cotizacion.estadoCotizacion === 'Cotizado'" class="btn-cancelar-cotizacion" @click="CancelarCotizacion(cotizacion.idCotizacion)">Cancelar</Button>
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
import Button from "../components/Forms/Button.vue";
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
    Button,
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
      cotizaciones: [
      ],
      estados: ["Pendiente","Cotizado"],
      SelectEstatus: "",
      searchText: '',
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
    cargarCotizaciones() {
  const id = store.state.id;
  const request1 = api.get(`/clientes/${id}/cotizaciones/pendientes`);
  const request2 = api.get(`/clientes/${id}/cotizaciones/realizadas`);

  Promise.allSettled([request1, request2])
    .then(results => {
      const cotizaciones1 = results[0].status === 'fulfilled' ? results[0].value.data : [];
      const cotizaciones2 = results[1].status === 'fulfilled' ? results[1].value.data : [];
      const cotizaciones = [...cotizaciones1, ...cotizaciones2];
      this.cotizaciones = cotizaciones;
    })
    .catch(error => {
      console.log(error);
    });
},
descargarCotizacion(idCotizacion,costo) {
    this.idCotizacion = idCotizacion;
    this.costo= costo
    this.$router.push({ name: 'HojaCotizacion', query: { idCotizacion, costo } });
  },

  CancelarCotizacion(idCotizacion) {
    api.delete(`/cotizaciones/${idCotizacion}`).then(() => {
        const indice = this.cotizaciones.findIndex(
          (cotizacion) => cotizacion.idUsuario === idCotizacion
        );
        this.cotizaciones.splice(indice, 1);
      });
    },
  
    
  },
 
  
  mounted() {
    this.cargarCotizaciones();

  },

  computed: {
    FiltroCotizaciones() {
  let cotizacionesFiltradas = [...this.cotizaciones];

  if (this.SelectEstatus) {
    cotizacionesFiltradas = cotizacionesFiltradas.filter(
      cotizacion => cotizacion.estadoCotizacion === this.SelectEstatus
    );
  }

  if (this.searchText.trim() !== '') {
    const searchText = this.searchText.toLowerCase().trim();
    cotizacionesFiltradas = cotizacionesFiltradas.filter(cotizacion => {
      const marcaModelo = `${cotizacion.marca} ${cotizacion.modelo}`.toLowerCase();
      const numeroSerie = cotizacion.numeroSerie.toLowerCase();
      const idCotizacion = cotizacion.idCotizacion.toString().toLowerCase();

      return (
        marcaModelo.includes(searchText) ||
        numeroSerie.includes(searchText) ||
        idCotizacion.includes(searchText)
      );
    });
  }

  return cotizacionesFiltradas;
},
}
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
