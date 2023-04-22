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
              type="tel"
              maxlength="10"
              name=""
              id=""
              placeholder="12345"
            />
          </div>
          <div>
            <div class="label">Nombre:</div>
            <input
              class="inputEditar"
              type="text"
              maxlength="35"
              name=""
              id=""
              placeholder="Carlos Andrés Loaiza López"
            />
          </div>
          <div>
            <div class="label">Fecha de Cotización:</div>
            <input class="inputEditar" type="date" name="" id="" />
          </div>
        </section>
        <section class="separadorDos"></section>
        <section class="seccionDos">
          <div>
            <div>
              <div class="label">Marca:</div>
              <select class="buscadorSelect" name="" id="">
                <option value="rojo">Seleccionar...</option>
                <option value="rojo">MAKITA</option>
                <option value="verde">TRUPER</option>
                <option value="azul">DEWALT</option>
                <option value="amarillo">BOSCH</option>
              </select>
            </div>
            <div>
              <div class="label">Modelo:</div>
              <input
                class="inputEditar"
                type="text"
                maxlength="15"
                name=""
                id=""
                placeholder="Ingrese el modelo"
              />
            </div>
            <div>
              <div class="label">No. de serie:</div>
              <input
                class="inputEditar"
                type="tel"
                maxlength="15"
                name=""
                id=""
                placeholder="Ingrese número de serie"
              />
            </div>
            <div>
              <div class="label">Tipo:</div>
              <select class="buscadorSelect" name="" id="">
                <option value="rojo">Seleccionar...</option>
                <option value="rojo">Lima</option>
                <option value="verde">Sierra</option>
                <option value="azul">Segueta</option>
                <option value="azul">Cepillo</option>
                <option value="azul">Broca</option>
                <option value="azul">Taladro</option>
                <option value="azul">Segueta</option>
                <option value="azul">Soplete</option>
              </select>
            </div>
          </div>
        </section>
        <section class="separadorDos"></section>
        <section>
          <section class="tablaPrincipal">
            <table class="default">
              <tr class="cabecera">
                <td>Cantidad</td>

                <td>Descripción</td>

                <td>Costo unitario</td>

                <td>Costo total</td>

                <td>Acción</td>
              </tr>

              <tr>
                <td>1</td>

                <td>Fuente de alimentación</td>

                <td>$150.65</td>

                <td>$150.65</td>

                <td>
                  <div class="botonesTabla">
                    <Button class="btn-eliminar">Eliminar</Button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>12</td>

                <td>Tornillos</td>

                <td>$17.65</td>

                <td>$211.8</td>

                <td>
                  <div class="botonesTabla">
                    <Button class="btn-eliminar">Eliminar</Button>
                  </div>
                </td>
              </tr>

              <td>
                <input
                  class="inputCantidad"
                  type="tel"
                  maxlength="3"
                  name=""
                  id=""
                />
              </td>

              <td>
                <input class="inputDescripcion" type="text" maxlength="30" />
              </td>

              <td>
                <input
                  class="inputCantidad"
                  type="tel"
                  step="any"
                  maxlength="5"
                />
              </td>

              <td>
                <input class="inputCantidad" type="number" disabled />
              </td>
              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar">Guardar</Button>
                  <!-- <Button class="btn-guardar-cotizacion">Descargar</Button> -->
                  <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                </div>
              </td>
            </table>
          </section>
          <div class="contenedorSecundarioTabla">
            <div>
              <div class="label">Comentarios:</div>
              <textarea
                class="inputTextArea"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Ingrese un comentario adicional"
              ></textarea>
            </div>
            <div class="contenedorReparaciones">
              <div class="inputRadio">
                <input type="radio" />
                <div>
                  Servicio de reparación
                  <span class="spanServicios">(+ $360)</span>
                </div>
              </div>
              <div class="inputRadio">
                <input type="radio" />
                <div>
                  Servicio de limpieza
                  <span class="spanServicios">(+ $180)</span>
                </div>
              </div>
              <!-- <div class="inputRadio">
                <input type="radio" />
                <div>+IVA <span class="spanServicios">(+ 16%)</span></div>
              </div> -->
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
  max-width: 100%;
  padding: 0;
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
  width: 420px;
  height: 100px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  padding-top: 5px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  resize: none;
  font-size: 15px;
}
.inputEditar {
  width: 200px;
  height: 34px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 15px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
.inputEditar::placeholder {
  color: rgba(47, 46, 46, 0.715);
}
.buscadorSelect {
  width: 100%;
  height: 34px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  padding: 0px 7px;
  border-radius: 10px;
}
.inputRadio input:checked ~ .check {
  background-color: red;
  border: none;
}
.separadorDos {
  border-left: 1px solid #ef7b14;
  left: 50%;
  top: 0;
  margin: 0px 20px;
  height: 500px;
}
.contenedorBotones {
  display: flex;
  justify-content: space-evenly;
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
.inputCantidad {
  width: 60px;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
}
.inputDescripcion {
  width: 200px;
  height: 32px;
  border: 0px solid #000000;
  box-shadow: 0px 3px 6px #00000029;
  outline: none;
  color: #000000;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 15px;
}
.contenedorSecundarioTabla {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.contenedorReparaciones {
  padding-top: 30px;
}
.inputRadio {
  padding: 5px;
  display: flex;
}
.spanServicios {
  font-size: 12px;
  color: dimgrey;
}
.contenedorTotales {
  margin-top: 40px;
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  /* -webkit-appearance: none; */
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
