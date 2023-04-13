<template>
  <ModalBase>
    <section class="contenedorPrincipal">
      <section>
        <div class="titulo">{{ tituloHeader }}</div>
        <div class="separador"></div>
      </section>
      <!-- <div>
        <div class="label">No. ID:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Agrega un ID"
        />
      </div> -->
      <div>
        <div class="label">Nombre:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Ingrese el nombre"
        />
      </div>
      <!-- <div>
        <div class="label">Puesto:</div>
        <div>
          <select class="buscadorSelect" name="" id="">
            <option value="rojo">Seleccionar...</option>
            <option value="rojo">Administrador</option>
            <option value="verde">Gerente</option>
            <option value="azul">Auxiliar</option>
            <option value="amarillo">Reparador</option>
          </select>
        </div>
      </div> -->
      <div>
        <div class="label">Apellido paterno:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div>
        <div class="label">Apellido materno:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div>
        <div class="label">Teléfono:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Ingrese un correo electrónico"
        />
      </div>
      <div>
        <div class="label">Correo:</div>
        <input
          class="inputEditar"
          type="text"
          name=""
          id=""
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div>
        <div class="label">Contraseña:</div>
        <input
          class="inputEditar"
          type="password"
          name=""
          id=""
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div>
        <div class="label">Confirmar contraseña:</div>
        <input
          class="inputEditar"
          type="password"
          name=""
          id=""
          placeholder="Ingrese un teléfono"
        />
      </div>
      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Cancelar</Button>
        <Button class="btn-guardar" @click="mostrarAddService">Registrarme</Button>
      </section>
    </section>
    <LoadScreen v-if="showAddProducto" @cerrar="ocultarAddProd"></LoadScreen>
  </ModalBase>
</template>

<script>
import ModalBase from "../Modales/ModalBase.vue";
import Button from "../Forms/Button.vue";
import LoadScreen from "../Forms/LoadScreen.vue";

export default {
  components: {
    ModalBase,
    Button,
    LoadScreen,
  },
  props: {
    tituloHeader: {
      type: String,
      default: "Registro",
    },
  },
  data() {
    return {
      showAddProducto: false,
    };
  },
  emits: ["cancelar"],
  methods: {
    mostrarAddService() {
      this.showAddProducto = true;
    },
    ocultarAddProd() {
      this.showAddProducto = false;
    },
    cancelar() {
      this.$emit("cancelar");
    },
  },
};
</script>

<style>
.titulo {
  padding: 30px 0px 0px 0px;
  font-size: 30px;
}
.separador {
  border-top: 3px solid #ef7b14;
  height: 2px;
  max-width: 100%;
  padding: 0;
  /* margin: 20px auto 0 auto; */
  margin-top: 5px;
  margin-bottom: 30px;
}
.contenedorPrincipal {
  margin: 0px 30px;
}
.label {
  margin: 17px 0px 5px;
}
.inputEditar {
  width: 300px;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
}
.buscadorSelect {
  width: 100%;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  padding: 0px 7px;
  border-radius: 10px;
}
.contenedorBotones {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: auto;
  padding: 30px 0px 20px;
}
</style>
