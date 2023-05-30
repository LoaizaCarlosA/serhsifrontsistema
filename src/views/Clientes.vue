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
         <tr v-for="cliente in filteredList" :key="cliente.idUsuario">

          <td>{{ cliente.idUsuario }}</td>
          <td>{{ nombreCompleto(cliente) }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>{{ cliente.correo }}</td>
          <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="mostrarEditar(cliente.idUsuario)">Editar</Button>
                  <Button class="btn-eliminar" @click="eliminarCliente(cliente.idUsuario)">Eliminar</Button>
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
    <EditarCliente :idUsuario="idUsuario"
      v-if="showAddEditar"
      @cancelar="showAddEditar=false"
    ></EditarCliente>
  </LayoutPrincipal>
</template>

<script>
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import api from '@/api.js';
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
      clientes: [],
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
          || cliente.apellidoPaterno.toLowerCase().includes(searchValue)
          || cliente.apellidoMaterno.toLowerCase().includes(searchValue)
          || cliente.idUsuario.toString().toLowerCase().includes(searchValue);
      });
    }
    return list;
  },
  nombreCompleto() {
    return (cliente) => {
      return `${cliente.nombre} ${cliente.apellidoPaterno} ${cliente.apellidoMaterno}`;
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
    cargarClientes() {
    api.get('/clientes')
      .then(response => {
        this.clientes = response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    eliminarCliente(idUsuario) {
      api.delete(`/clientes/${idUsuario}`).then(() => {
        const indice = this.clientes.findIndex(
          (cliente) => cliente.idUsuario === idUsuario
        );
        this.clientes.splice(indice, 1);
      });
    }
  },
  mounted() {
  this.cargarClientes()
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
  overflow-x:auto;
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
