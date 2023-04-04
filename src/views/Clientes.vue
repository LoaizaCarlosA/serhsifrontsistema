<template>
  <LayoutPrincipal>
    <ContainerWhite>
      <section class="filtrosEmpleados">
        <div class="tituloModulo">Lista de clientes</div>
        <div>
          <input
            class="inputBuscador"
            type="text"
            v-model="searchText"
            placeholder="Inserte nombre o ID"
          />
          <Button class="btn-buscar">Buscar</Button>
          <Button class="btn-agregar" @click="mostrarAddService" >Agregar</Button>
        </div>
      </section>
      <section>
        <section class="tablaPrincipal">
          <table class="default">
            <tr class="cabecera">
              <td>No. ID</td>

              <td>Nombre</td>

              <td>Teléfono</td>

              <td>Correo</td>

              <td>Acciones</td>
            </tr>

            <tbody>
         <tr v-for="cliente in filteredList" :key="cliente.id">

          <td>{{ cliente.id }}</td>
          <td>{{ nombreCompleto(cliente) }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>{{ cliente.correo }}</td>
          <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar">Editar</Button>
                  <Button class="btn-eliminar">Eliminar</Button>
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
    <AgregarClientes
    v-if="showAddProducto"
    @cancelar="showAddProducto=false">
    </AgregarClientes>
    <EditarCliente
      v-if="showAddEditar"
      @cancelar="showAddEditar=false"
    ></EditarCliente>
  </LayoutPrincipal>
</template>

<script>
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import ContainerWhite from "@/layouts/ContainerWhite.vue";
import Button from "../components/Forms/Button.vue";
import Paginacion from "../components/Forms/Paginacion.vue";
import EditarCliente from "@/components/Clientes/EditarCliente.vue";
import AgregarClientes from "@/components/Clientes/AgregarClientes.vue";
// import TableCollapse from "../components/Tables/TableCollapse.vue";
// import HeadTableCollapse from "../components/Tables/HeadTableCollapse.vue";

export default {
  components: {
    LayoutPrincipal,
    ContainerWhite,
    Button,
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
      clientes: [
        { id: 1, nombre: 'Juan', apellido_paterno: 'Pérez', apellido_materno: 'González', telefono: '1234567890', correo: 'juan.perez@prueba.com' },
        { id: 2, nombre: 'Ana', apellido_paterno: 'García', apellido_materno: 'Martínez', telefono: '2345678901', correo: 'ana.garcia@prueba.com' },
        { id: 3, nombre: 'Carlos', apellido_paterno: 'López', apellido_materno: 'Sánchez', telefono: '3456789012', correo: 'carlos.lopez@prueba.com' },
        // ...
        
      ],
      searchText: '',
    };
  },
  computed: {
  filteredList() {
    let list = this.clientes;
    if (this.searchText !== '') {
      list = list.filter(cliente => {
        const searchValue = this.searchText.toLowerCase();
        return cliente.nombre.toLowerCase().includes(searchValue)
          || cliente.apellido_paterno.toLowerCase().includes(searchValue)
          || cliente.apellido_materno.toLowerCase().includes(searchValue)
          || cliente.id.toString().toLowerCase().includes(searchValue);
      });
    }
    return list;
  },
  nombreCompleto() {
    return (cliente) => {
      return `${cliente.nombre} ${cliente.apellido_paterno} ${cliente.apellido_materno}`;
    };
  },
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
  padding:20px 20px 20px 50px;
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
</style>
