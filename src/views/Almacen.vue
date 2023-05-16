<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Almacén</div>
        
      </section>
      <section>
        <section class="tablaPrincipal">
          <table class="default">
            <tr class="cabecera">
              <td>ID</td>

              <td>Sección</td>

              <td>Estado</td>

              


              <!-- <td>Acciones</td> -->
            </tr>

            <tbody>
              <tr v-for="seccion in almacenes" :key="seccion.idSeccion">
                <td>{{ seccion.idSeccion }}</td>
                <td>{{ seccion.nombreSeccion }}</td>
                <td>{{ seccion.ocupado ? 'Ocupado' : 'Libre' }}</td>
                
                
              </tr>
            </tbody>
          </table>
        </section>
       
      </section>
      <Paginacion></Paginacion>
    </ContainerWhite>
    <AgregarClientes v-if="showAddProducto" @cancelar="showAddProducto = false">
    </AgregarClientes>
    <EditarCliente
      v-if="showAddEditar"
      @cancelar="showAddEditar = false"
    ></EditarCliente>
  </LayoutPrincipal>
</template>

<script>
import api from '@/api.js';
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import ContainerWhite from "@/layouts/ContainerWhite.vue";
// import Button from "../components/Forms/Button.vue";
import Paginacion from "../components/Forms/Paginacion.vue";
import EditarCliente from "@/components/Clientes/EditarCliente.vue";
import AgregarClientes from "@/components/Clientes/AgregarClientes.vue";
// import TableCollapse from "../components/Tables/TableCollapse.vue";
// import HeadTableCollapse from "../components/Tables/HeadTableCollapse.vue";

export default {
  components: {
    LayoutPrincipal,
    ContainerWhite,
    // Button,
    Paginacion,
    EditarCliente,
    AgregarClientes,
    // TableCollapse,
    // HeadTableCollapse,
  },
  props: {},
  data() {
    return {
      showAddEditar: false,
      showAddProducto: false,
      almacenes: [
        
        // ...
      ],
      searchText: "",
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
    cargarAlmacen() {
    api.get('/almacenamiento')
      .then(response => {
        this.almacenes = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
  this.cargarAlmacen()
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
  overflow-x: auto;
}

.default {
  /* font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; */
  border-collapse: collapse;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  /*margin-bottom: 40px;*/
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
  /* adjust for tablets */
  .default {
    font-size: 14px; /* reduce font size for tablets */
  }

  .default td,
  .default th {
    padding: 6px; /* add padding to table cells for tablets */
  }
}
@media screen and (max-width: 768px) {
  /* adjust for iPad mini in portrait orientation */
  .default {
    font-size: 12px; /* reduce font size for iPad mini */
  }

  .default td,
  .default th {
    padding: 4px; /* add smaller padding to table cells for iPad mini */
  }

  .tituloModulo {
    font-size: 16px; /* reduce font size for iPad mini */
    transform: translateX(-20px);
  }

  .inputBuscador {
    font-size: 12px; /* reduce font size for iPad mini */
    padding: 6px; /* add smaller padding to input for iPad mini */
  }

  .btn-buscar,
  .btn-agregar {
    font-size: 12px; /* reduce font size for iPad mini */
    padding: 6px 12px; /* add smaller padding to buttons for iPad mini */
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  /* adjust for iPad mini in landscape orientation */
  .default {
    font-size: 12px; /* reduce font size for iPad mini */
  }

  .default td,
  .default th {
    padding: 4px; /* add smaller padding to table cells for iPad mini */
  }

  .tituloModulo {
    font-size: 16px; /* reduce font size for iPad mini */
  }

  .inputBuscador {
    font-size: 12px; /* reduce font size for iPad mini */
    padding: 6px; /* add smaller padding to input for iPad mini */
  }

  .btn-buscar,
  .btn-agregar {
    font-size: 12px; /* reduce font size for iPad mini */
    padding: 6px 12px; /* add smaller padding to buttons for iPad mini */
  }
}

@media screen and (max-width: 480px) {
  /* adjust for cellphones */
  .default {
    border-top: 1px solid #ccc;
    font-size: 12px; /* reduce font size for cellphones */
  }

  .cabecera {
    display: none; /* hide table header for cellphones */
  }

  .default td,
  .default th {
    display: block; /* display table cells as blocks for cellphones */
    text-align: center; /* center text within table cells for cellphones */
    width: 95%; /* set table cell width to 100% for cellphones */

    padding: 6px; /* add padding to table cells for cellphones */
  }

  .default td::before {
    content: attr(
      data-label
    ); /* add data-label as pseudo-element before table cell content for cellphones */
    display: block; /* display data-label as block element for cellphones */
    font-weight: bold; /* add bold font weight to data-label for cellphones */
    margin-bottom: 10px; /* add margin to data-label for cellphones */
  }
}

@media screen and (max-width: 1024px) {
  /* adjust for tablets */
  .tituloModulo {
    font-size: 20px; /* reduce font size for tablets */
  }

  .inputBuscador {
    font-size: 14px; /* reduce font size for tablets */
    padding: 8px; /* add padding to input for tablets */
  }

  .btn-buscar,
  .btn-agregar {
    font-size: 14px; /* reduce font size for tablets */
    padding: 8px 16px; /* add padding to buttons for tablets */
  }
}

@media screen and (max-width: 480px) {
  /* adjust for cellphones */
  .filtrosEmpleados {
    flex-direction: column; /* cambiar el flex direction a column */
    align-items: stretch; /* stretch items to full width for cellphones */
  }

  .tituloModulo {
    font-size: 18px; /* reducir font*/
    margin-bottom: 10px; /**/
    transform: translateX(-20px);
  }

  .inputBuscador {
    font-size: 12px; /* reducir font */
    padding: 6px;
    margin-bottom: 10px; /*  */
    transform: translateX(-20px);
    width: 100%;
  }

  .btn-agregar {
    font-size: 12px; /* reduce font size para celulares */
    padding: 6px 12px; /* agregar padding a boton  */
    position: absolute;
    top: 45px;
    right: 40px;
  }
}
</style>
