<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Lista de empleados</div>
        <div>
          <input
            class="inputBuscador"
            type="text"
            v-model="searchText"
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
              <td>No. ID</td>

              <td>Nombre</td>

              <td>Puesto</td>

              <td>Teléfono</td>

              <td>Correo</td>

              <td>Acciones</td>
            </tr>
            <tbody>
         <tr v-for="empleado in filteredList" :key="empleado.idUsuario">

          <td>{{ empleado.idUsuario }}</td>
          <td>{{ nombreCompleto(empleado) }}</td>
          <td>{{ empleado.rol }}</td>
          <td>{{ empleado.telefono }}</td>
          <td>{{ empleado.correo }}</td>
          <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar(empleado.idUsuario)">Editar</Button>
                  <Button class="btn-eliminar" @click="eliminarEmpleado(empleado.idUsuario)">Eliminar</Button>
                </div>
              </td>
          </tr>
            </tbody>
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
      @cancelar="showAddProducto = false"
    ></AgregarEmpleados>
    <EditarEmpleado :idUsuario="idUsuario"
      v-if="showAddEditar"
      @cancelar="showAddEditar = false"
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
import api from '@/api.js';
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
      empleados: [],
      searchText: '',
    };
  },
  computed: {
  filteredList() {
    let list = this.empleados;
    if (this.searchText !== '') {
      list = list.filter(empleado => {
        const searchValue = this.searchText.toLowerCase();
        return empleado.nombre.toLowerCase().includes(searchValue)
          || empleado.apellidoPaterno.toLowerCase().includes(searchValue)
          || empleado.apellidoMaterno.toLowerCase().includes(searchValue)
          || empleado.idUsuario.toString().toLowerCase().includes(searchValue);
      });
    }
    return list;
  },
  nombreCompleto() {
    return (empleado) => {
      return `${empleado.nombre} ${empleado.apellidoPaterno} ${empleado.apellidoMaterno}`;
    };
  },
},
  methods: {
    mostrarEditar(idUsuario) {
      this.idUsuario = idUsuario;
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
    cargarEmpleados() {
      api.get('/empleados')
    .then(response => {
      let empleados = response.data;
      console.log(response.data);
      empleados.forEach(empleado => {
        if (empleado.rol=== 'ROLE_AUXILIAR') {
          empleado.rol = 'Auxiliar';
        }
        if (empleado.rol === 'ROLE_REPARADOR') {
          empleado.rol = 'Reparador';
        }
        if (empleado.rol === 'ROLE_ADMIN') {
          empleado.rol= 'Administrador';
        }
        
      });
      this.empleados = empleados;
    })
    },
    eliminarEmpleado(idUsuario) {
      api.delete(`/empleados/${idUsuario}`).then(() => {
        const indice = this.empleados.findIndex(
          (empleado) => empleado.idUsuario === idUsuario
        );
        this.empleados.splice(indice, 1);
      });
    },
  },
  mounted() {
  this.cargarEmpleados()
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
