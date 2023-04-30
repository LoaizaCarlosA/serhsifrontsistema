<template>
  <LayoutPrincipal>
    <div class="proximamente">
      <div>
        <img class="imgServicio" src="../assets/img/ordenes.png" alt="" />
      </div>
      <div>
        <Button class="btn-agregar" @click="mostrarAddService"
          >Generar cotización</Button
        >
      </div>
    </div>
  </LayoutPrincipal>
  <GenerarOrden
    v-if="showAddProducto"
    @cancelar="showAddProducto = false"
  ></GenerarOrden>
</template>

<script>
import LayoutPrincipal from "@/layouts/LayoutPrincipal.vue";
import Button from "@/components/Forms/Button.vue";
import GenerarOrden from "@/components/Ordenes/GenerarOrden.vue";

export default {
  components: {
    LayoutPrincipal,
    Button,
    GenerarOrden,
  },
  data() {
    return {
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
  font-size: 30px;
  display: flex;
  color: #707070;
  flex-direction: column;
  height: 85vh;
  justify-content: center;
  align-items: center;
}
.imgServicio {
  padding-bottom: 40px;
  width: 50%;
}
.btn-agregar {
  width: 200px;
  height: 40px;
  font-size: 17px;
}
</style>
