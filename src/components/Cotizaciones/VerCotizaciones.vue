<template>
 <LoadScreen v-if="mostrarLoader"></LoadScreen>
  <ModalExito v-if="mostrarExito"></ModalExito>
  <ModalError v-if="mostrarError"></ModalError>
  <ModalBase v-if="mostrarModal">
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
                  :value="idCotizacion"
          @input="$emit('update:idCotizacion', $event.target.value)"
                  disabled
                />
              </div>
              <div>
                <div class="label">Cliente:</div>
                <input
                  class="inputEditar"
                  type="text"
                  name=""
                  id=""
                  v-model="nombreCliente"
                  
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
                  v-model="fechaEntrada"
                  disabled
                />
              </div>
              <div>
                  <div class="label">Marca:</div>
                  <input
                    class="inputEditar"
                    type="text"
                    name=""
                    id=""
                    v-model="marca"
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
                  <div class="label">Modelo:</div>
                  <input
                    class="inputEditar"
                    type="text"
                    name=""
                    id=""
                    v-model="modelo"
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
                    v-model="numeroSerie"
                    disabled
                  />
                </div>
                <div>
                  <div class="label">Seccion:</div>
                  <input
                    class="inputEditar"
                    type="text"
                    name=""
                    id=""
                    v-model="nombreSeccion"
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
                v-model="descripcion"
              ></textarea>
            </div>
          </div>
        </div>
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

              <tbody>
              <tr v-for="refaccion in refacciones" :key="refaccion.idRefaccion">
                <td>{{ refaccion.cantidad }}</td>
                <td>{{ refaccion.descripcion }}</td>
                <td>$ {{ refaccion.costoUnitario }}</td>
                <td>$ {{ refaccion.cantidad * refaccion.costoUnitario }}</td>
                <td>
                  <div class="botonesTabla">
                    <Button class="btn-eliminar" @click="EliminarRefaccion(refaccion.idRefaccion)">Eliminar</Button>
                  </div>
                </td>
                
              </tr>
            </tbody>

              <td>
                <input
                  class="inputCantidad"
                  type="tel"
                  maxlength="3"
                  name=""
                  id=""
                  v-model="cantidad"
                />
              </td>

              <td>
                <input class="inputDescripcion" type="text" maxlength="30"  v-model="descripcionRefaccion"/>
              </td>

              <td>
                <input
                  class="inputCantidad"
                  type="tel"
                  step="any"
                  maxlength="5"
                  v-model="costoUnitario"
                />
              </td>

              <td>
                <input class="inputCantidad" type="number" v-model="costoTotal" disabled />
              </td>
              <td>
                <div class="botonesTabla">
                  <Button class="btn-editar" @click="registrarRefaccion">Guardar</Button>
                  <!-- <Button class="btn-guardar-cotizacion">Descargar</Button> -->
                  <!-- <Button class="btn-eliminar">Eliminar</Button> -->
                </div>
              </td>
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
              <select class="buscadorSelect" name="" id="" v-model="estadoCotizacion">
                <option value="rojo">Seleccionar...</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Cotizado">Cotizado</option>
              </select>
            </div>
          </div>
          <section class="contenedorTotales">
            <div class="total">
              <div>Subtotal:</div>
              <div>$ {{ total }}</div>
            </div>
            <div class="total">
              <div>IVA:</div>
              <div>$ {{ iva }}</div>
            </div>
            <div class="separadorTotal"></div>
            <div class="total">
              <div>Total:</div>
              <div>$ {{ cantidadtotal }}</div>
            </div>
          </section>
          <section class="contenedorBotones">
            <Button class="btn-regresar" @click="cancelar">Regresar</Button>
            <Button class="btn-guardar" @click="cotizar"
              >Guardar</Button
            >
          </section>
        </section>
      </section>
    </section>
  </ModalBase>
</template>

<script>
import ModalBase from "@/components/Modales/ModalBase.vue";
import Button from "@/components/Forms/Button.vue";
import LoadScreen from "@/components/Forms/LoadScreen.vue";
import axios from 'axios';
import ModalExito from "../Modales/ModalExito.vue";
import ModalError from "../Modales/ModalError.vue";
const IVA_TASA = 0.16;
export default {
  components: {
    ModalBase,
    Button,
    LoadScreen,
    ModalExito,
    ModalError,
  },
  props: {
    idCotizacion: {
    type: Number, // o el tipo de dato que corresponda
    required: true // o false, según sea necesario
    },
    tituloHeader: {
      type: String,
      default: "Cotización",
    },
  },
  data() {
    return {
      showAddProducto: false,
      mostrarLoader: false,
      mostrarModal: true,
      mostrarExito:false,
      mostrarError:false,
      nombreCliente: '',
      marca:'',
      modelo:'',
      numeroSerie:'',
      nombreSeccion:'',
      fechaEntrada:'',
      estadoCotizacion:'',

      //datos refacciones
      cantidad:'',
      descripcionRefaccion:'',
      costoUnitario:'',
      costoTotal:'',

      refacciones:[
      ],

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
    cargarRefacciones() {
    axios.get('http://localhost:10000/refacciones')
      .then(response => {
        console.log(this.idCotizacion);
        let refacciones = response.data;
        
      this.refacciones = refacciones.filter(refaccion => refaccion.idCotizacion === this.idCotizacion);
      })
      .catch(error => {
        console.log(error)
      })
    },
    EliminarRefaccion(idRefaccion){
      axios.delete(`http://localhost:10000/refacciones/${idRefaccion}`).then(() => {
        const indice = this.refacciones.findIndex(
          (refaccion) => refaccion.descripcion === this.refacciones.descripcionRefaccion
        );
        this.refacciones.splice(indice, 1);
      });

    },
    registrarRefaccion: function(){
      const refa = {
        idCotizacion:this.idCotizacion,
        descripcion: this.descripcionRefaccion,
        costoUnitario: this.costoUnitario,
        cantidad: this.cantidad,
        
        
        
      }
      axios.post('http://localhost:10000/refacciones', refa)
        .then(response => {
          console.log(response.refa);
          axios.get('http://localhost:10000/refacciones')
      .then(response => {
        console.log(this.idCotizacion);
        let refacciones = response.data;
        
      this.refacciones = refacciones.filter(refaccion => refaccion.idCotizacion === this.idCotizacion);
      this.cantidad ='';
      this.descripcionRefaccion ='';
      this.costoUnitario ='';


      })
      .catch(error => {
        console.log(error);
      })
          
        })
        .catch(error => {
          console.error(error);
        });
    },


    cotizar: function(){
      const cotizacion = {
        descripcion: this.descripcion,
      }
      axios.put(`http://localhost:10000/cotizaciones/${this.idCotizacion}/cotizar`, cotizacion)
        .then(response => {
          console.log(response.cotizacion);
          this.mostrarModal = false; // Ocultar el modal
          this.mostrarLoader = true; // Mostrar el loader
          setTimeout(() => {
            this.mostrarLoader = false; // Ocultar el loader
        }, 1000);
   
        setTimeout(() => {
          this.mostrarExito=true;
        }, 1100);   
          setTimeout(() => {
            this.mostrarExito=false;
            window.location.reload();
        }, 3000);
        })
        .catch(error => {
          console.error(error);
          this.mostrarModal = false; // Ocultar el modal
          this.mostrarLoader = true; // Mostrar el loader
          setTimeout(() => {
            this.mostrarLoader = false; // Ocultar el loader
        }, 1000);
   
        setTimeout(() => {
          this.mostrarError=true;
        }, 1100);   
          setTimeout(() => {
            this.mostrarError=false;
            window.location.reload();
        }, 3000);
        });
    },
    cancelar() {
      this.$emit("cancelar");
    },
  },
  mounted() {
    // aquí puedes utilizar el idUsuario para obtener los datos del usuario
    // y asignarlos a la variable usuario
    console.log('ID Cotizacion: ' + this.idCotizacion);
    axios.get(`http://localhost:10000/cotizaciones/${this.idCotizacion}`)
      .then(response => {
        this.nombreCliente = response.data.nombreCliente;
        this.marca = response.data.marca;
        this.modelo = response.data.modelo;
        this.numeroSerie = response.data.numeroSerie;
        this.nombreSeccion = response.data.nombreSeccion;
        this.fechaEntrada = response.data.fechaEntrada ;
        this.estadoCotizacion=response.data.estadoCotizacion;

        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

     this.cargarRefacciones();
  },
  computed: {
  total() {
    return this.refacciones.reduce((sum, refaccion) => {
      return sum + (refaccion.cantidad * refaccion.costoUnitario);
    }, 0);
  },
  iva() {
    return (this.total * IVA_TASA).toFixed(2);
  },
  cantidadtotal() {
    const ivaNumero = parseFloat(this.iva);
    return this.total + ivaNumero;
  },
  
}
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
