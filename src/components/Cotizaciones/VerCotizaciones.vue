<template>
  <ModalBase>
    <section class="contenedorPrincipal">
      <section>
        <div class="titulo">{{ tituloHeader }}</div>
        <div class="separador"></div>
      </section>
      <section class="contenedorSeccionPrincipal">
        <div>
          <div class="contenedorSecciones">
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
              <!-- <div>
                <div class="label">Monto:</div>
                <input
                  class="inputEditar"
                  type="text"
                  name=""
                  id=""
                  placeholder="$4,839.00"
                  disabled
                />
              </div> -->
            </section>
            <section class="separadorTres"></section>
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
                <!-- <div>
                  <div class="label">Color:</div>
                  <input
                    class="inputEditar"
                    type="text"
                    name=""
                    id=""
                    placeholder="Rojo"
                    disabled
                  />
                </div> -->
              </div>
            </section>
          </div>
          <div>
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
          </div>
        </div>
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
          <div class="seccionEstatus">
            <div class="inputSeguimiento">
              <div class="label">Seguimiento:</div>
              <div>
                <textarea
                  class="inputTextArea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Ingrea un comentario adicional"
                ></textarea>
              </div>
            </div>
            <div class="inputEstatus">
              <div class="label">Estatus:</div>
              <select class="buscadorSelect" name="" id="">
                <option value="rojo">Seleccionar...</option>
                <option value="rojo">En espera</option>
                <option value="verde">En proceso</option>
                <option value="azul">Reparado</option>
                <option value="amarillo">Finalizado</option>
              </select>
            </div>
          </div>
          <section class="contenedorTotales">
            <div class="total">
              <div>Subtotal:</div>
              <div>$ 9,827.00</div>
            </div>
            <div class="total">
              <div>IVA:</div>
              <div>$ 1,723.00</div>
            </div>
            <div class="separadorTotal"></div>
            <div class="total">
              <div>Total:</div>
              <div>$ 11,550.00</div>
            </div>
          </section>
          <section class="contenedorBotones">
            <Button class="btn-regresar" @click="cancelar">Regresar</Button>
            <Button class="btn-guardar" @click="mostrarAddService"
              >Guardar</Button
            >
          </section>
        </section>
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

<style scoped>
.titulo {
  padding: 30px 0px 0px 0px;
  font-size: 30px;
}
.separador {
  border-top: 3px solid #ef7b14;
  height: 2px;
  width: 100%;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 30px;
}
.contenedorSecciones {
  display: flex;
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
.inputEstatus {
  width: 40%;
}
.inputTextArea {
  width: 98%;
  height: 100px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  padding-top: 5px;
  resize: none;
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
  /* left: 50%; */
  /* top: 0; */
  margin: 0px 20px;
  height: 441px;
  /* border-left: 1px solid #ef7b14;
  left: 50%;
  top: 0;
  margin: 0px 50px; */
}
.separadorTres {
  border-left: 1px solid #ef7b14;
  margin: 0px 20px;
  height: 293px;
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
.seccionEstatus {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.inputSeguimiento {
  width: 55%;
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
.contenedorTotales {
  margin-top: 43px;
}
.total {
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
}
.separadorTotal {
  border-top: 1px solid #ef7b14;
  max-width: 100%;
  padding: 0;
  justify-content: right;
  display: flex;
}
</style>
