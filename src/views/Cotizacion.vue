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

           

              <td>Cliente</td>

              <td>Herramienta</td>

              <td>Costo</td>

              <td>Fecha</td>

              <td>Estatus</td>

              <td>Acciones</td>
            </tr>
            <tbody>
              <tr v-for="cotizacion in FiltroCotizaciones" :key="cotizacion.idCotizacion">
                <td>{{ cotizacion.idCotizacion }}</td>
             
                <td>{{ cotizacion.nombreCliente }}</td>
                <td>{{ `${cotizacion.marca} ${cotizacion.modelo} ${cotizacion.numeroSerie}`}}</td>
                <td>${{ cotizacion.costo }}</td>
                <td>{{ cotizacion.fechaEntrada }}</td>
                <td>{{ cotizacion.estadoCotizacion }}</td>

                <td>
                  <div class="botonesTabla">
                    <Button class="btn-editar" @click="mostrarEditar(cotizacion.idCotizacion)"
                      >Ver</Button
                    >
                    <Button class="btn-guardar-cotizacion">Descargar</Button>
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
    <VerCotizaciones :idCotizacion="idCotizacion"
      v-if="showAddEditar"
      @cancelar="showAddEditar = false"
    ></VerCotizaciones>
  </LayoutPrincipal>
</template>

<script>
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import ContainerWhite from "@/layouts/ContainerWhite.vue";
import Button from "../components/Forms/Button.vue";
import Paginacion from "../components/Forms/Paginacion.vue";
// import EditarEmpleado from "@/components/Empleados/EditarEmpleado.vue";
// import AgregarEmpleados from "@/components/Empleados/AgregarEmpleados.vue";
import VerCotizaciones from "@/components/Cotizaciones/VerCotizaciones.vue";
import AgregarCotizacion from "@/components/Cotizaciones/AgregarCotizacion.vue";
import store from '@/store';
import axios from 'axios';
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
    VerCotizaciones,
    AgregarCotizacion,

    // TableCollapse,
    // HeadTableCollapse,
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
      estados: ["Pendiente","Aceptada"],
      SelectEstatus: "",
    };
  },
  methods: {
    mostrarEditar(idCotizacion) {
      this.showAddEditar = true;
      this.idCotizacion = idCotizacion;
     
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
    axios.get(`http://localhost:10000/reparadores/${id}/cotizaciones/pendientes`)
      .then(response => {
        this.cotizaciones = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.cargarCotizaciones();
  },

  computed: {
    FiltroCotizaciones() {
      if (!this.SelectEstatus) {
        return this.cotizaciones;
      }
      return this.cotizaciones.filter(
        (cotizacion) => cotizacion.estadoCotizacion === this.SelectEstatus
      );
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
