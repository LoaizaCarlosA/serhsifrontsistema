<template>
  <LayoutPrincipal>
    <ContainerWhite id="contenedorPrincipal" class="containerWhiteEmpleados">
      <div class="contenedor-content">
        <div class="tabla-filtros">
          <div class="contenedor-filtros">
            <div class="titular">
              <h1>Lista de empleados</h1>
              <div class="separadores">
                <div class="barra-naranja"></div>
                <div class="separador"></div>
              </div>
            </div>
            <div class="action-inputs">
              <div class="contenedor-btn">
                <button id="btnAddEmpleado" @click="addEmpleado">Nuevo empleado</button>
                <!-- <div class="contenedor-input" v-if="$windowWidth <= 1279">
                  <Input v-model="busqueda" id="inputBuscador" :flagSinBorder="true" class="input-precios" :height43="true" @update:modelValue="valueBusqueda">
                    <div class="lupa-on">
                      <div class="icon-lupa">
                        <img class="lupa" src="~@assets/icons/svg/lupa-buscador.svg" alt="" />
                      </div>
                    </div>
                  </Input>
                </div> -->
                <div class="contenedor-selects">
                  <!-- <DropDown
                    id="dropStatus"
                    @click="outsideClick($event)"
                    :showDrop="statusBoolean"
                    :flagEmpleados="true"
                    :options="statusEmpleado"
                    :valueSelect="selectStatus.text"
                    @filtroChange="dropStatus"
                  ></DropDown>
                  <DropDown
                    v-if="mostrarSucursales"
                    id="dropSucursal"
                    :flagEmpleados="true"
                    @click="outsideClick($event)"
                    :options="statusSucursal"
                    :showDrop="sucursalBoolean"
                    :valueSelect="selectSucursal.text"
                    @filtroChange="dropSucursal"
                  ></DropDown> -->
                </div>
              </div>
              <div class="contenedor-input">
                <Input id="inputBuscador" v-model="busqueda" placeholder="Buscar" :flagSinBorder="true" class="input-precios" :height43="true" @update:modelValue="valueBusqueda">
                  <div class="lupa-on">
                    <div class="icon-lupa">
                      <!-- <img class="lupa" src="~@assets/icons/svg/lupa-buscador.svg" alt="" /> -->
                    </div>
                  </div>
                </Input>
              </div>
            </div>
            <!--<Filtros> </Filtros>-->
          </div>
          <TableCollapse id="contenedor-table" v-show="!load" :class="showEmptyResults ? 'off' : ''">
            <HeadTableCollapse
              class="thead-sticky"
              :titles="[
                { nombre: 'Nombre', ocultar: '' },
                { nombre: 'Apellidos', ocultar: '' },
                { nombre: 'Puesto', ocultar: 'sm' },
                { nombre: 'Fecha de alta', ocultar: 'md' },
                { nombre: 'Correo electrónico', ocultar: 'md' },
                { nombre: 'Teléfono', ocultar: 'md' },
                { nombre: '', ocultar: '' },
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
          </TableCollapse>
          <div v-if="showEmptyResults" v-show="!load" class="contenedor-empty">
            <!-- <img src="~@assets/icons/svg/empty-empleados.svg" alt="" /> -->
            <p class="empty-text">Aún no se encuentran empleados registrados</p>
          </div>
          <LoadSkeleton v-if="load" id="bounce"></LoadSkeleton>
        </div>
        <!-- <Paginacion :total="totalPagina" :paginaActualEntrada="paginaActual" @changePagina="changePagina" v-if="showPaginacionInicial && listaEmpleados.length > 0" v-show="!load"></Paginacion> -->
      </div>
    </ContainerWhite>
  </LayoutPrincipal>
</template>

<script>
import layoutPrincipal from "@/layouts/layoutPrincipal.vue";
import ContainerWhite from '@/layouts/ContainerWhite.vue';

export default {
  components: {
    layoutPrincipal,
    ContainerWhite
  },
};
</script>

<style scoped>
.proximamente {
  text-align: center;
  font-family: "Roboto";
  font-size: 30px;
  display: flex;
  color: #707070;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
