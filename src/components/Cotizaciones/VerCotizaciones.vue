<template>
  <ModalBase>
    <section class="contenedorPrincipal">
      <section>
        <div class="titulo">{{ tituloHeader }}</div>
        <div class="separador"></div>
      </section>
      <section class="contenedorSeccionPrincipal">
        <section class="seccionUno">
          <div>
            <div class="label">ID Cotización:</div>
            <input
              class="inputEditar"
              type="text"
              name=""
              id=""
              placeholder="5456"
              disabled
            />
          </div>
          <div>
            <div class="label">ID Cliente:</div>
            <input
              class="inputEditar"
              type="text"
              name=""
              id=""
              placeholder="12345"
              disabled
            />
          </div>
          <div>
            <div class="label">Nombre:</div>
            <input
              class="inputEditar"
              type="text"
              name=""
              id=""
              placeholder="Carlos Andrés Loaiza López"
              disabled
            />
          </div>
          <div>
            <div class="label">Fecha de Cotización:</div>
            <input
              class="inputEditar"
              type="text"
              name=""
              id=""
              placeholder="03/04/2023"
              disabled
            />
          </div>
          <div>
            <div class="label">Monto:</div>
            <input
              class="inputEditar"
              type="text"
              name=""
              id=""
              placeholder="$4,839.00"
              disabled
            />
          </div>
          <div>
            <div class="label">Comentarios:</div>
            <textarea
              class="inputTextArea"
              name=""
              id=""
              cols="30"
              rows="10"
              disabled
              placeholder="No sirve el enchufe"
            ></textarea>
          </div>
          <div>
            <div class="label">Estatus:</div>
            <input type="text" />
          </div>
        </section>
        <section class="separadorDos"></section>
        <section class="seccionDos">
          <div>
            <div>
              <div class="label">Marca:</div>
              <input
                class="inputEditar"
                type="text"
                name=""
                id=""
                placeholder="Makita"
                disabled
              />
            </div>
            <div>
              <div class="label">Modelo:</div>
              <input
                class="inputEditar"
                type="text"
                name=""
                id=""
                placeholder="MAK019239SJ"
                disabled
              />
            </div>
            <div>
              <div class="label">No. de serie:</div>
              <input
                class="inputEditar"
                type="text"
                name=""
                id=""
                placeholder="352156165"
                disabled
              />
            </div>
            <div>
              <div class="label">Tipo:</div>
              <input
                class="inputEditar"
                type="text"
                name=""
                id=""
                placeholder="Rotomartillo"
                disabled
              />
            </div>
            <div>
              <div class="label">Color:</div>
              <input
                class="inputEditar"
                type="text"
                name=""
                id=""
                placeholder="Rojo"
                disabled
              />
            </div>
            <div>
              <div class="label">Seguimiento:</div>
              <textarea
                class="inputTextArea"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </section>
        <section class="separadorDos"></section>
        <section>
          <section class="tablaPrincipal">
            <table class="default">
              <tr class="cabecera">
                <td>Cantidad:</td>

                <td>Descripción:</td>

                <td>Costo unitario:</td>

                <td>Costo total:</td>
              </tr>

              <tr>
                <td>10</td>

                <td>Fuente de alimentación</td>

                <td>$15.65</td>

                <td>$156.05</td>
              </tr>

              <tr>
                <td>10</td>

                <td>Fuente de alimentación</td>

                <td>$15.65</td>

                <td>$156.05</td>
              </tr>

              <tr>
                <td>10</td>

                <td>Fuente de alimentación</td>

                <td>$15.65</td>

                <td>$156.05</td>
              </tr>
            </table>
          </section>
        </section>
      </section>
      <section class="contenedorBotones">
        <Button class="btn-regresar" @click="cancelar">Regresar</Button>
        <Button class="btn-guardar" @click="mostrarAddService">Guardar</Button>
      </section>
    </section>
    <LoadScreen v-if="showAddProducto" @cerrar="ocultarAddProd"></LoadScreen>
  </ModalBase>
</template>

<script>
import ModalBase from "@/components/Modales/ModalBase.vue";
import Button from "@/components/Forms/Button.vue";
import LoadScreen from "@/components/Forms/LoadScreen.vue";

export default {
  components: {
    ModalBase,
    Button,
    LoadScreen,
  },
  props: {
    tituloHeader: {
      type: String,
      default: "Cotización",
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
  max-width: 80%;
  padding: 0;
  /* margin: 20px auto 0 auto; */
  margin-top: 5px;
  margin-bottom: 30px;
}
.contenedorSeccionPrincipal {
  display: flex;
}
.contenedorPrincipal {
  margin: 0px 30px;
}
.label {
  margin: 17px 0px 5px;
}
.inputTextArea {
  width: 300px;
  height: 100px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  padding-top: 5px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
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
.separadorDos {
  border-left: 1px solid #ef7b14;
  left: 50%;
  top: 0;
  margin: 0px 50px;
}
.contenedorBotones {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: auto;
  padding: 30px 0px 20px;
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
