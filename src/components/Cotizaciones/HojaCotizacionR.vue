<template>
    <section class="bodyPrincipal" ref="vueComponent">
      <section class="infoLocal">
        <div>
          <img class="imgLogo" src="@/assets/img/LogotipoB.png" alt="" />
        </div>
        <div class="contenedorInfo">
          <div class="tituloSerhsi">
            Servicios y Herramientas de Sinaloa SA de CV
          </div>
          <div class="infoCabecera">Ignacio Aldama #534 sur</div>
          <div class="infoCabecera">
            Col. Miguel Alemán, Culiacán, Sinaloa, México.
          </div>
          <div class="infoCabecera">6675026781</div>
        </div>
      </section>
      <section class="tituloCotizacion">
  
        <Button class="btn-editar" v-show="mostrarBotonRegresar" @click="regresarCotizaciones"
                  >Regresar</Button
                >
      </section>
      <section class="separador"></section>
      <section>
        <div class="contenedorClientes">
          <div class="tituloCont">Cliente:</div>
          <div class="infoDelCont">{{cotizaciones.nombreCliente}}</div>
        </div>
        <div class="contenedorClientes">
          <div class="tituloCont">ID Cotización:</div>
          <div class="infoDelCont">{{this.$route.query.idCotizacion}}</div>
        </div>
        <div class="contenedorClientes">
          <div class="tituloCont">Fecha de cotización:</div>
          <div class="infoDelCont">{{cotizaciones.fechaEntrada}}</div>
        </div>
        <div class="contenedorClientes">
          <div class="tituloCont">Herramienta:</div>
          <div class="infoDelCont">{{`${cotizaciones.marca} ${cotizaciones.modelo} ${cotizaciones.numeroSerie}`}}</div>
        </div>
      </section>
      <section class="separador"></section>
      <section class="tablaPrincipal">
        <table class="default">
          <tr class="cabecera">
            <td>Cantidad:</td>
            <td>Descripción:</td>
            <td>Costo unitario:</td>
            <td>Costo total:</td>
          </tr>
          <tbody>
                <tr v-for="refaccion in refacciones" :key="refaccion.idRefaccion">
                  <td>{{ refaccion.cantidad }}</td>
                  <td>{{ refaccion.descripcion }}</td>
                  <td>$ {{ refaccion.costoUnitario }}</td>
                  <td>$ {{ refaccion.cantidad * refaccion.costoUnitario }}</td>
                  
                  
                </tr>
              </tbody>
        </table>
      </section>
      <section class="infoPago">
        <section class="contenedorNota">
          <div class="tituloNotas">Notas:</div>
          <div class="nota">-Precios en pesos mexicanos.</div>
          <div class="nota">
            -Vigencia de cuidado despues de reparar la herramienta es de 10 días
            hábiles, tanscurrido este tiempo, se cobra $50.00 por día.
          </div>
          <div class="nota">
            -Se requiere el 50% para comenzar la reparación, el resto al terminar.
          </div>
          <div class="nota">
            -Cualquier servicio o producto no especificado en esta cotización,
            tiene un costo adicional.
          </div>
        </section>
        <section class="contenedorTotales">
          <div class="total">
            <div>Subtotal:</div>
            <div>$ {{this.$route.query.costo}}</div>
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
      </section>
    </section>
  </template>
  
  <script>
  import Button from "@/components/Forms/Button.vue";
  import api from '@/api.js';
  import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
  const IVA_TASA = 0.16;
  export default {
    components: {
        
        Button,
      
      },
    data() {
      return {
        mostrarBotonRegresar: false,
        cotizaciones: [
        ],
        refacciones: [
        ],
      
      };
    },
  
    methods: {
      cargarCotizacion() {
        api.get(`/cotizaciones/${this.$route.query.idCotizacion}`)
        .then(response => {
          this.cotizaciones = response.data
        })
        .catch(error => {
          console.log(error)
        })
      },
      regresarCotizaciones(){
        this.$router.push('/Cotizacion')
      },
      generarPDF() {
        
    const vueComponent = this.$refs.vueComponent;
    
    const options = {
      scale: 2, 
      useCORS: true, 
    };
    
    const width = vueComponent.offsetWidth; 
    const height = vueComponent.offsetHeight; 
    
    html2canvas(vueComponent, { ...options, width, height }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [width, height], 
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height); 
      pdf.save("Cotizacion - "+this.cotizaciones.nombreCliente+".pdf");
      
    });
  },
  
     
      cargarRefacciones() {
      api.get('/refacciones')
        .then(response => {
          console.log(this.$route.query.idCotizacion);
          const idCotizacion = parseInt(this.$route.query.idCotizacion);
          let refacciones = response.data;
          this.refacciones = refacciones.filter(refaccion => refaccion.idCotizacion === idCotizacion);
        })
        .catch(error => {
          console.log(error)
        })
      },
    },
    mounted() {
      this.cargarCotizacion();
      this.cargarRefacciones();
      setTimeout(() => {
        this.generarPDF(); 
      }, 500);
      setTimeout(() => {
        this.mostrarBotonRegresar = true;
      }, 800);
      
  
    },
    computed: {
    iva() {
      return (parseFloat(this.$route.query.costo) * IVA_TASA).toFixed(2);
    },
    cantidadtotal() {
      const ivaNumero = parseFloat(this.iva);
      return parseFloat(this.$route.query.costo) + ivaNumero;
    },
  }
  };
  
  
  </script>
  
  <style scoped>
  .bodyPrincipal {
    padding: 50px 80px;
  }
  .infoLocal {
    display: flex;
  }
  .imgLogo {
    height: 150px;
  }
  .contenedorInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
  }
  .tituloSerhsi {
    padding: 5px;
    font-size: 26px;
    font-weight: bold;
  }
  .infoCabecera {
    padding: 5px;
    font-size: 18px;
  }
  .tituloCotizacion {
    display: flex;
    justify-content: right;
    font-size: 24px;
    padding: 35px 20px 0px;
  }
  .tituloCont {
    font-weight: bold;
    font-size: 18px;
  }
  .infoDelCont {
    font-size: 18px;
    align-items: center;
    display: flex;
    padding: 0px 0px 0px 10px;
  }
  .separador {
    border-top: 4px solid #ef7b14;
    height: 2px;
    max-width: 100%;
    padding: 0;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .contenedorClientes {
    display: flex;
    padding: 5px 0px;
  }
  .tablaPrincipal {
    padding-top: 10px;
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
  .infoPago {
    justify-content: space-between;
    display: flex;
    padding-top: 200px;
    text-align: justify;
  }
  .contenedorNota {
    width: 50%;
  }
  .tituloNotas {
    font-size: 18px;
    font-weight: bold;
  }
  .nota {
    padding: 5px 60px 5px 10px;
  }
  .contenedorTotales {
    /* margin-top: 43px; */
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .total {
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
  }
  .separadorTotal {
    border-top: 2px solid #ef7b14;
    max-width: 100%;
    padding: 0;
    justify-content: right;
    display: flex;
  }
  </style>