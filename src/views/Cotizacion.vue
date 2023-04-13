<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Lista de cotizaciones</div>
        <div>
          <input
            class="inputBuscador"
            type="text"
            placeholder="Inserte nombre o ID"
          />
          <!-- <Button class="btn-buscar">Buscar</Button> -->
          <Button class="btn-agregar" @click="mostrarAddService"
            >Agregar</Button
          >
        </div>
      </section>
      <section>
        <section class="tablaPrincipal">
          <table class="default">
            <tr class="cabecera">
              <td>ID Cotización</td>

              <td>ID Cliente</td>

              <td>Cliente</td>

              <td>Fecha de Cotización</td>

              <td>Monto</td>

              <td>Estatus</td>

              <td>Acciones</td>
            </tr>

            <tr>
              <td>5456</td>

              <td>12345</td>

              <td>Carlos Andrés Loaiza López</td>

              <td>03/04/2023</td>

              <td>$0.00</td>

              <td>En espera</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar">Ver</Button>
                  <Button class="btn-guardar-cotizacion">Descargar</Button>
                  <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                </div>
              </td>
            </tr>
            <tr>
              <td>6154</td>

              <td>97854</td>

              <td>Ana Gabriel García Martínez</td>

              <td>03/04/2023</td>

              <td>$5,599.00</td>

              <td>En proceso</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar">Ver</Button>
                  <Button class="btn-guardar-cotizacion">Descargar</Button>
                  <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                </div>
              </td>
            </tr>
            <tr>
              <td>8456</td>

              <td>65482</td>

              <td>Javier López Hernández</td>

              <td>03/04/2023</td>

              <td>$9,548.00</td>

              <td>Finalizada</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar">Ver</Button>
                  <Button class="btn-guardar-cotizacion">Descargar</Button>
                  <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                </div>
              </td>
            </tr>
          </table>
        </section>
      </section>
      <Paginacion></Paginacion>
    </ContainerWhite>
    <AgregarCotizacion
      v-if="showAddProducto"
      @cancelar="showAddProducto = false"
    ></AgregarCotizacion>
    <VerCotizaciones
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

  props: {},
  data() {
    return {
      showAddEditar: false,
      showAddProducto: false,
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
