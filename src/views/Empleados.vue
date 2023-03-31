<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Lista de empleados</div>
        <div>
          <input
            class="inputBuscador"
            type="text"
            placeholder="Inserte nombre o ID"
          />
          <Button class="btn-buscar">Buscar</Button>
          <Button class="btn-buscar" @click="mostrarAddService">Agregar</Button>
        </div>
      </section>
      <section>
        <section class="tablaPrincipal">
          <table class="default">
            <tr class="cabecera">
              <td>No. ID</td>

              <td>Nombre</td>

              <td>Puesto</td>

              <td>Teléfono</td>

              <td>Correo</td>

              <td>Acciones</td>
            </tr>

            <tr>
              <td>12345</td>

              <td>Carlos Andrés Loaiza López</td>

              <td>Gerente</td>

              <td>6672476316</td>

              <td>carlos-andres-loaiza@hotmail.com</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar"
                    >Editar</Button
                  >
                  <Button class="btn-eliminar">Eliminar</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>12345</td>

              <td>Carlos Andrés Loaiza López</td>

              <td>Gerente</td>

              <td>6672476316</td>

              <td>carlos-andres-loaiza@hotmail.com</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="a">Editar</Button>
                  <Button class="btn-eliminar">Eliminar</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>12345</td>

              <td>Carlos Andrés Loaiza López</td>

              <td>Gerente</td>

              <td>6672476316</td>

              <td>carlos-andres-loaiza@hotmail.com</td>

              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="a">Editar</Button>
                  <Button class="btn-eliminar">Eliminar</Button>
                </div>
              </td>
            </tr>
          </table>
        </section>
        <!-- <TableCollapse>
          <HeadTableCollapse
            class="thead-sticky"
            :titles="[
              { nombre: 'Nombre' },
              { nombre: 'Apellidos' },
              { nombre: 'Puesto' },
              { nombre: 'Fecha de alta' },
              { nombre: 'Correo electrónico' },
              { nombre: 'Teléfono' },
              { nombre: '' },
            ]"
          >
          </HeadTableCollapse>
           <BodyTableCollapse v-show="!load">
              <RowEmpleadosCollapse
                v-for="(empleado, index) in listaEmpleados"
                :key="empleado.id"
                :empleado="empleado"
                :flagPar="(index + 1) % 2 == 0"
                :idActivo="idActivo"
                :flagModalError="showModalError"
                :puestoApi="puesto"
                :sucursalApi="statusSucursal"
                @editExito="mostrarExito"
                @reactExito="mostrarExito"
                @modalError="mostrarError"
                @hayActivo="hayActivo"
                @pinExito="getEmpleados"
                @desactivarExito="getEmpleados"
                @exitoReestablecer="mostrarExitoReestablecer"
              >
              </RowEmpleadosCollapse>
            </BodyTableCollapse>
        </TableCollapse> -->
      </section>
      <Paginacion></Paginacion>
    </ContainerWhite>
    <AgregarEmpleados
      v-if="showAddProducto"
      @cancelar="showAddProducto=false"
    ></AgregarEmpleados>
    <EditarEmpleado
      v-if="showAddEditar"
      @cancelar="showAddEditar=false"
    ></EditarEmpleado>
  </LayoutPrincipal>
</template>

<script>
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import ContainerWhite from "@/layouts/ContainerWhite.vue";
import Button from "../components/Forms/Button.vue";
import Paginacion from "../components/Forms/Paginacion.vue";
import EditarEmpleado from "@/components/Empleados/EditarEmpleado.vue";
import AgregarEmpleados from "@/components/Empleados/AgregarEmpleados.vue";

// import TableCollapse from "../components/Tables/TableCollapse.vue";
// import HeadTableCollapse from "../components/Tables/HeadTableCollapse.vue";

export default {
  components: {
    LayoutPrincipal,
    ContainerWhite,
    Button,
    Paginacion,
    EditarEmpleado,
    AgregarEmpleados,

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
  padding: 20px;
  align-items: center;
}
.tituloModulo {
  font-size: 22px;
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
