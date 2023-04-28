<template>
  <body>
    <span class="btn-buscar-mobile">
      <img class="botonBuscarMobile" src="img/imgBuscador.tif.svg" alt="" />
    </span>
    <div class="contenedor-buscar">
      <div>
        <div>
          <button>Acceder / Registrarse</button>
        </div>
      </div>
    </div>
    <div id="burguer-movil" class="barras-menu-movil">
      <div class="barra-uno"></div>
      <div class="barra-dos"></div>
    </div>
    <header id="scroll-inicio" class="header">
      <div>
        <div class="contenedor-buscar"></div>
        <div class="text-center">
          <img class="logo01" src="../assets/img/LogotipoSerhsi.png" alt="" />
        </div>
        <nav class="nav-bar barra-header">
          <!-- <a
            id="boton-inicio"
            data-seccion="scroll-inicio"
            class="botonInicioWeb"
            href=""
            >Inicio</a
          >
          <a id="boton-servicios" data-seccion="scroll-servicios" href=""
            >Servicios</a
          >
          <a id="boton-equipo" data-seccion="scroll-equipo" href="">Nosotros</a>
          <a id="boton-clinicas" data-seccion="scroll-clinicas" href=""
            >Ubicación</a
          > -->
        </nav>
      </div>
      <div id="header-movil" class="seccion-uno">
        <img
          src="../assets/svg/blanca-tachita.svg"
          id="tacha"
          class="equis-menu-movil"
        />
        <section id="contenedor-menu">
          <div class="logo-auplex-header">
            <img
              class="logo-auplex"
              src="../assets/img/LogotipoSerhsi.png"
              alt=""
            />
          </div>
        </section>
        <div id="boton-menu-movil" class="menu-movil-container">
          <ul class="clase-ul">
            <li
              id="inicio-menu-movil"
              class="dropdown-lista"
              data-seccion="scroll-inicio"
            >
              Inicio
            </li>
            <li
              id="servicios-menu-movil"
              class="dropdown-lista"
              data-seccion="scroll-servicios"
            >
              Servicios
            </li>
            <li
              id="equipo-menu-movil"
              class="dropdown-lista"
              data-seccion="scroll-equipo"
            >
              Nuestro equipo
            </li>
            <li
              id="clinicas-menu-movil"
              class="dropdown-lista2"
              data-seccion="scroll-clinicas"
            >
              <a class="menu__link">Ubicación</a>
            </li>
          </ul>
          <div class="footer-menu">
            <div>
              <a
                class="contenedor-icono"
                target="blank"
                href="https://www.instagram.com/spannamx/"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                class="contenedor-icono"
                target="blank"
                href="https://www.facebook.com/spannamx"
              >
                <i class="icon-facebook-squared"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="contenedor-picture">
      <div id="informacion-banner"></div>
      <section class="contenedor-copys-banner">
        <div class="contenedor-boton-banner">
          <button
            id="boton-agenda"
            data-seccion="scroll-agenda"
            class="BotonAgendaTuCita"
          >
            Genera tu cotización
          </button>
        </div>
      </section>
      <picture>
        <source
          media="(max-width: 768px)"
          srcset="../assets/img/bannerSerhsi.png"
          type="image/png"
        />
        <source
          media="(max-width: 1279px)"
          srcset="../assets/img/bannerSerhsi.png"
          type="image/png"
        />
        <img class="imagen-principal" src="../assets/img/bannerSerhsi.png" />
      </picture>
    </section>
    <!-- <div class="contenedorPrincipal"> -->

    <div id="scroll-servicios" class="nuestrosServicios">
      Nuestros Servicios
    </div>
    <div class="swiper-servicios text-center">
      <div class="swiper-wrapper">
        <!-- Slides -->
      </div>
    </div>
    <div class="labels text-center">
      <div class="item1">
        <div class="imgRedonda">
          <img
            id="imgDentroCirculo"
            src="../assets/img/01-conocimiento.jpg"
            alt=""
          />
        </div>
        <p>Conocimiento y experiencia de <br />nuestros asesores de venta.</p>
      </div>
      <div class="item2">
        <div class="imgRedonda">
          <img
            id="imgDentroCirculo"
            src="../assets/img/02-postventa.jpg"
            alt=""
          />
        </div>
        <p>Servicio postventa.</p>
      </div>
      <div class="item1">
        <div class="imgRedonda">
          <img
            id="imgDentroCirculo"
            src="../assets/img/03-recoleccion.jpg"
            alt=""
          />
        </div>
        <p>Servicio de recolección y entrega <br />a domicilio.</p>
      </div>
      <div class="item2">
        <div class="imgRedonda">
          <img
            id="imgDentroCirculo"
            src="../assets/img/04-asesoriatecnica.jpg"
            alt=""
          />
        </div>
        <p>Asesoría técnica especializada.</p>
      </div>
      <div class="item1">
        <div class="imgRedonda">
          <img
            id="imgDentroCirculo"
            src="../assets/img/05-mantenimiento.jpg"
            alt=""
          />
        </div>
        <p>Mantenimiento y reparación de <br />herramientas y equipos.</p>
      </div>
    </div>
    <div class="backg-nuestro">
      <div class="flor-izquierda"></div>
      <div class="flor-derecha"></div>
      <div class="contenedorFlexEquipo">
        <div id="scroll-equipo" class="text-info">
          <p id="titulo-nuestroEquipo">¿QUIÉNES SOMOS?</p>
          <p class="parrafoQuienes">
            En <span class="colorNaranja">SERHSI</span> trabajamos para ser
            referente y solución en el ramo de herramientas, equipos, accesorios
            y servicios para la industria y la construcción, ofreciendo
            <span class="colorNaranja">productos de calidad</span> de clase
            mundial que nos permitan seguir creciendo juntos. En nuestra área de
            sercicio con técnicos altamente capacitados ofrecemos soluciones
            oportunas en mantenimiento y reparación de los equipos de nuestro
            extenso y exclusivo catálogo.
          </p>
        </div>
        <div class="text-info">
          <div class="claseQuienes">
            <p id="titulo-nuestroEquipo">MISIÓN</p>
            <img class="imgQuienes" src="../assets/img/Recurso-4.png" alt="" />
          </div>
          <p class="parrafoQuienes">
            Ofrecer a la industria, talleres en general y al hogar, productos
            con calidad de lcase mundial. que los vuelvan más competitivos en
            sus procesos de fabricación y servicios. Nuestra principal arma
            competitiva será siemrpe el servicio postventa, superando los
            estándares de calidad y tiempos de entrega, soportado por
            refacciones genuinas y mano de obra calificada
          </p>
        </div>
        <div class="text-info">
          <div class="claseQuienes">
            <p id="titulo-nuestroEquipo">VISIÓN</p>
            <img class="imgQuienes" src="../assets/img/Recurso-6.png" alt="" />
          </div>
          <p class="parrafoQuienes">
            Ser el mejor proveedor local de productos y servicios especializados
            que requiere la industria, los talleres en general y el hogar,
            consolidándonos como uno de los más importantes a nivel regional.
          </p>
        </div>
        <div class="text-info">
          <div class="claseQuienes">
            <p id="titulo-nuestroEquipo">OBJETIVO</p>
            <img class="imgQuienes" src="../assets/img/Recurso-5.png" alt="" />
          </div>
          <p class="parrafoQuienes">
            Dar garantía de servicio con refacciones originales y mano de obra
            calificada.
          </p>
        </div>
      </div>
      <div class="backg-clinica">
        <div id="scroll-clinicas" class="nuestras-clinicas">Ubicaciones</div>
        <div class="contenedor-ubicaciones">
          <div class="contenedor-ubicacion">
            <div class="circulo-ubicacion">
              <img
                class="icono-ubicacion"
                src="/img/UBICACION-ICONO.svg"
                alt=""
              />
            </div>
            <div class="contenedor-direccion">
              <div id="nombre-clinica">MATRÍZ</div>
              <div id="direccion">
                Ignacio Aldama 534 sur, colonia Miguel Alemán
              </div>
              <div id="direccion">Culiacán, Sinaloa, México.</div>
              <div id="direccion">(667) 716-5440 / (667) 716-2240</div>
              <a
                class="contenedorBotonUbi"
                target="blank"
                href="https://www.google.com/maps/place/Av+Gral+Ignacio+Aldama+534,+Miguel+Alem%C3%A1n,+80200+Culiac%C3%A1n+Rosales,+Sin./@24.8000101,-107.3900517,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcd0b39fe22885:0x7c4c142d3fda994!8m2!3d24.8000101!4d-107.387863!16s%2Fg%2F11bw4wpyzc"
              >
                <button class="boton-ubi-guadalupe">¿Cómo llegar?</button>
              </a>
            </div>
          </div>
          <div class="separador"></div>
          <div class="contenedor-ubicacion">
            <img
              class="imgUbi"
              src="../assets/img/ubicacionMatriz.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex-container-column"></div>
      </div>
      <div id="scroll-agenda" class="backg-formulario">
        <h4 class="text-center2 mt-100 fs-df pd-lr">
          ¡Reparamos herramientas, de las mejores marcas!
        </h4>
        <div class="imagenesMarcas">
          <div>
            <img class="imgMarca" src="../assets/img/makita.jpg" alt="" />
          </div>
          <div>
            <img class="imgMarca" src="../assets/img/truper.jpg" alt="" />
          </div>
          <div>
            <img class="imgMarca" src="../assets/img/DeWalt-Logo.jpg" alt="" />
          </div>
          <div>
            <img class="imgMarca" src="../assets/img/bosch-nuevo.jpg" alt="" />
          </div>
        </div>
        <div class="contenedorCatalogo">
          <button class="botonCatalago">Comenzar cotización</button>
        </div>
      </div>
    </div>
    <div class="backg-footer">
      <div class="footer-spanna">
        <div class="footer-img">
          <img
            class="logo-footer"
            id="imgFooter"
            src="../assets/img/LogotipoSerhsi.png"
            alt=""
          />
        </div>
        <div class="footer-list">
          <div>
            <div>Servicios y Herramientas de Sinaloa SA de CV ®.</div>
            <div>Somos marca registrada | Copyright © | 2022</div>
            <p>
              Encuéntranos en:
              <a target="blank" href="https://www.instagram.com/spannamx/">
                <i class="icon-instagram"></i>
              </a>
              <a target="blank" href="https://www.facebook.com/spannamx">
                <i class="icon-facebook-squared"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {

  
};


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

/* @font-face {
  font-style: normal;
  font-weight: 500;
} */

body {
  background-color: white;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}

.seccion-uno {
  display: none;
}

.botonBuscarMobile {
  display: none;
}

.text-center {
  text-align: center;
  overflow-x: auto;
}

.text-center2 {
  text-align: center;
  overflow-x: auto;
  margin-bottom: 0px;
  font-size: 20px;
}

.logo01 {
  width: 135px;
  margin-bottom: 18px;
  margin-top: 18px;
}

.title-spanna {
  margin: 0px;
  font-weight: 500;
  letter-spacing: 10px;
}

.subtitle-spanna {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 2px;
  margin-bottom: 19px;
}

.btn-cerrar {
  display: none;
  text-decoration: none;
  margin: 15px 25px;
  font-size: 20px;
}

.icono-buscador-movil {
  display: none;
}

.contenedor-buscar {
  height: auto;
  background-color: transparent;
  box-shadow: none;
  padding-right: 25px;
  overflow: hidden;
  transition: all 0.4s;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 2;
}

.contenedor-buscar > div {
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: flex-end;
}

.btn-buscar {
  width: 310px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  box-shadow: 0px 4px 5px #0000002b;
  padding: 0px 20px;
  margin: 0px 10px 25px 10px;
  box-sizing: border-box;
  margin-top: 27px;
}

.boton-input-buscar {
  border: none;
  width: 310px;
  height: 38px;
  outline: none;
}

.labels {
  justify-content: center;
  display: flex;
}

.contenedorFlex {
  flex-direction: row;
  align-items: flex-start;
}

.nav-bar {
  display: flex;
  justify-content: center;
  background-color: #696969;
  padding: 25px;
  font-weight: 600;
}

/* .nav-bar a {
  display: flex;
  padding: 0px 35px;
  font-size: 22px;
  text-decoration: none;
  color: white;
  font-weight: 400;
} */
#boton-inicio {
  width: 80px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 400;
}

#boton-servicios {
  width: 120px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 400;
}

#boton-equipo {
  width: 70px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 400;
}

#boton-clinicas {
  width: 100px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 400;
}

#boton-inicio:hover {
  font-weight: 600;
}

#boton-servicios:hover {
  font-weight: 600;
}

#boton-equipo:hover {
  font-weight: 600;
}

#boton-clinicas:hover {
  font-weight: 600;
}

.contenedor-picture {
  position: relative;
}

.imagen-principal {
  width: 100%;
  object-fit: cover;
  height: 520px;
}

#informacion-banner {
  max-width: 1300px;
  margin: auto;
  padding-top: 23px;
  position: absolute;
}

.circulo-icono-ins {
  margin-top: 11px;
  width: 58px;
  height: 58px;
  background-color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: 2%;
}

.circulo-icono-ins:hover {
  background: white;
  border: 1px solid #ef7b14;
  /* transition: 0.1s; */
}

.icon-instagram:hover {
  color: #ef7b14;
}

.circulo-icono-face {
  margin-top: 11px;
  width: 58px;
  height: 58px;
  background-color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 14%;
  left: 2%;
}

.circulo-icono-face:hover {
  background: white;
  border: 1px solid #ef7b14;
  /* transition: 0.1s; */
}

.icon-facebook-squared:hover {
  color: #ef7b14;
}

.contenedor-copys-banner {
  position: absolute;
  left: 51%;
  top: 18%;
}

.contenedor-siempre-bella {
  padding-top: 4px;
}

.icon-instagram {
  font-size: 31px;
  color: white;
}

.icon-facebook-squared {
  font-size: 31px;
  color: white;
}

.copy-uno-banner {
  color: #262626;
  font-size: 85px;
  font-family: "Sinhala Sangam MN";
  letter-spacing: 3.4px;
}

.copy-dos-banner {
  padding-left: 10px;
  padding-bottom: 52px;
  font-size: 174px;
  font-family: "SignPainter";
  color: white;
  letter-spacing: 6.96px;
  text-shadow: 0px 3px 6px #00000080;
  line-height: 0.3;
}

.contenedor-boton-banner {
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 320px;
  padding-left: 275px;
}

.BotonAgendaTuCita {
  width: 378px;
  height: 60px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  border: none;
  font-size: 22px;
  color: black;
  cursor: pointer;
}

.BotonAgendaTuCita:hover {
  background-color: white;
  border: 2px solid #ef7b14;
  color: #ef7b14;
  /* transition: 0.1s; */
}

.swiper-wrapper {
  display: none;
}

.nuestrosServicios {
  display: flex;
  font-size: 30px;
  justify-content: center;
  padding: 50px 0px 50px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.item1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 0px 15px;
}

.item2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px 0px 15px;
}

.item {
  /* margin: 0px 25px 0px 25px; */
}

.item p {
  font-weight: 600;
  font-size: 13.5px;
}

#informacion {
  font-size: 18px;
  color: #585858;
}

#titulo-icono {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.titulo {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

#favIcon-Spanna {
  padding-left: 6px;
}

.imgRedonda {
  background-color: #020000;
  border-radius: 100px;
  box-shadow: 0px 3px 7px #0000002e;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 167px;
  height: 167px;
}

#imgDentroCirculo {
  width: 110px;
}

/* .backg-nuestro {
  background-image: url("../img/flor-loto-izq.svg");
} */

.contenedorFlexEquipo {
  flex-direction: column;
  /* flex-direction: row; */
  align-items: flex-start;
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
}

.copy-equipo-movil {
  display: none;
}

#titulo-nuestroEquipo {
  font-size: 30px;
  font-weight: 600;
  font-family: "Open Sans";
  letter-spacing: 1.2px;
}

.parrafoQuienes {
  margin-top: 0px;
  text-align: justify;
  font-size: 18px;
}

.colorNaranja {
  color: #ff7b00;
}

/* .text-info {
  padding-right: 90px;
} */

.claseQuienes {
  display: flex;
  align-items: center;
}

.imgQuienes {
  height: 60px;
  margin-left: 20px;
}

.borde-azul-equipo {
  width: 384px;
  height: 384px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0db8cb;
  border-radius: 100%;
}

.contenedor-imagen-equipo {
  position: relative;
  top: 8%;
  left: 2.7%;
}

.contenedorFlexCeo {
  flex-direction: row;
  align-items: flex-start;
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding-top: 65px;
}

.borde-azul-ceo {
  width: 328px;
  height: 328px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0db8cb;
  border-radius: 100%;
}

.contenedor-imagen-ceo {
  position: relative;
  top: 8%;
  left: 3%;
}

.text-info2 {
  padding: 55px 0px 0px 47px;
}

.borde-azul-doctor {
  width: 328px;
  height: 328px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0db8cb;
  border-radius: 100%;
}

.contenedorFlexDoctor {
  flex-direction: row;
  align-items: flex-start;
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding-top: 71px;
  align-items: center;
}

.imagen-dr {
  width: 300px;
}

.contenedor-imagen-doctor {
  position: relative;
  position: relative;
  top: 8%;
  left: 2%;
}

.backg-clinica {
  margin-top: 60px;
  background-color: #f0f3f4;
}

.nuestras-clinicas {
  display: flex;
  justify-content: center;
  font-size: 37px;
  letter-spacing: 1.48px;
  font-weight: 600;
  padding: 32px 0px 10px;
}

.contenedor-ubicaciones {
  margin: auto;
  max-width: 1200px;
  display: flex;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.contenedor-ubicacion {
  display: flex;
  align-items: center;
}

.separador {
  width: 2px;
  height: 300px;
  background-color: #ef7b14;
  margin: 40px 1px 40px;
}

.circulo-ubicacion {
  display: none;
  /* background-color: white;
  width: 102px;
  height: 102px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0px 3px 6px #00000029;
  border: 0px solid #ffffff; */
}

.icono-ubicacion {
  width: 50px;
  height: 73px;
}

.contenedor-direccion {
  /* padding-left: 32px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imgUbi {
  height: 270px;
}

#nombre-clinica {
  font-size: 40px;
  font-family: "Open Sans";
  font-weight: bold;
  color: #ef7b14;
  padding-bottom: 10px;
}

#direccion {
  font-size: 20px;
}

.boton-ubi-guadalupe {
  width: 190px;
  height: 40px;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 18px;
  margin: 21px 0px 0px 0px;
}

.contenedorBotonUbi {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-decoration: none;
}

.boton-ubi-guadalupe:hover {
  background-color: white;
  border: 1px solid #ef7b14;
  color: #ef7b14;
  /* transition: 0.2s; */
}

.forms {
  max-width: 1200px;
  margin: auto;
}

textarea {
  resize: none;
}

.flex-container-form {
  flex-direction: column;
}

.flex-container-form > div {
  display: flex;
}

.flex-container-form input {
  margin: 10px;
}

.form-contacto {
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.418);
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
}

.inputUno {
  width: 100%;
  margin-right: 20px;
}

.inputDos {
  width: 100%;
  margin-right: 20px;
}

.inputTres {
  width: 100%;
  margin-right: 20px;
}

.inputCuatro {
  width: 100%;
  margin-right: 20px;
}

.error {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: #fb5353;
  word-break: break-word;
}

.errorMensaje {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: #fb5353;
  word-break: break-word;
}

.flex-container-form02 {
  flex-direction: row;
  display: flex;
}

.flex-container-form02 > div {
  flex: 1;
  padding: 10px;
}

.h4-pref {
  margin-top: 0px;
  text-align: center;
  margin-bottom: 17px;
}

.flex-container-row {
  display: flex;
  flex-direction: row;
}

.btn-pref {
  font-size: 20px;
  flex: 1;
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.418);
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  margin: 0px 7px 20px 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #757575;
}

.btn-pref.active {
  background-color: #ef7b14;
  color: white;
}

.espacio-error {
  padding-left: 20px;
}

.espacio-error-mensaje {
  padding-left: 15px;
}

.btn-pref:last-child {
  margin: 0px 0px 20px 7px;
}

.form-contacto-textarea {
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.418);
  border-radius: 5px;
  height: 40px;
  padding: 15px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  /* margin-bottom: 20px; */
  height: 80px;
  width: 100%;
  box-sizing: border-box;
}

.text-right {
  padding: 0px 20px;
  margin-bottom: 34px;
  text-align: right;
}

.btn-enviar {
  color: white;
  background-color: #ef7b14;
  border-radius: 20px;
  height: 40px;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  box-shadow: 0px 3px 7px #00000061;
  width: 20%;
  cursor: pointer;
}

.btn-enviar:hover {
  background-color: white;
  border: 1px solid #0eb8cc;
  color: #0eb8cc;
  transition: 0.2s;
}

.backg-footer {
  background-color: #696969;
}

.footer-spanna {
  justify-content: center;
  max-width: 1200px;
  padding: 0px 200px;
  align-items: center;
  height: 250px;
  margin: 0 auto;
  display: flex;
}

.footer-img {
  /* padding: 6px 0px 0px 5px; */
  flex: 1;
  display: flex;
  justify-content: right;
}

.footer-list {
  list-style: none;
  flex: 2;
  color: white;
  opacity: 1;
  margin: auto;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: center;
}

.footer-list p {
  margin: 15px 0px 10px 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.footer-list > div {
  border-left: 2px solid #ef7b14;
  padding-left: 15px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#imgFooter {
  width: 120px;
}

.imagenesMarcas {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0px;
}

.imgMarca {
  height: 150px;
  margin: 0px 20px;
}

.contenedorCatalogo {
  max-width: 1200px;
  margin: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0px 0px 60px;
}

.botonCatalago {
  border: none;
  width: 300px;
  height: 45px;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  background-color: black;
  color: white;
  box-shadow: 0px 3px 6px #00000029;
}

.botonCatalago:hover {
  background-color: black;
  border: 2px solid #ef7b14;
  color: #ef7b14;
}

@media (max-width: 1279px) {
  .contenedor-icono-buscar {
    padding-top: 24px;
    padding-right: 13px;
  }

  .botonBuscarMobile {
    display: flex;
  }

  .icono-buscador-movil {
    display: block;
  }

  .contenedor-buscar {
    background-color: #e5f9fc;
    box-shadow: 0px 4px 5px #0000002b;
    height: 0px;
    overflow: hidden;
    transition: all 0.4s;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 2;
  }

  .contenedor-buscar > div {
    height: 124px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: flex-end;
  }

  .btn-cerrar {
    text-decoration: none;
    margin: 0px 25px;
    font-size: 20px;
    display: block;
  }

  .btn-buscar-mobile {
    margin: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    display: block;
  }

  .contenedor-buscar-abierto {
    height: 124px;
    padding: 0px;
  }

  .btn-buscar {
    width: 97%;
    margin-top: 15px;
  }

  .boton-input-buscar {
    width: 100%;
  }

  .logo01 {
    margin-top: 30px;
  }

  #informacion {
    font-size: 16px;
  }

  .titulo {
    font-size: 20px;
  }

  #titulo-icono {
    font-size: 18px;
  }

  .imagen-principal {
    height: 378px;
  }

  .circulo-icono-face {
    display: none;
  }

  .circulo-icono-ins {
    display: none;
  }

  .copy-uno-banner {
    font-size: 45px;
    letter-spacing: 1.8px;
  }

  .copy-dos-banner {
    font-size: 93px;
    letter-spacing: 3.72px;
    line-height: 0.4;
  }

  .contenedor-copys-banner {
    top: 14%;
    left: 51%;
  }

  .contenedor-boton-banner {
    padding-top: 15px;
  }

  .BotonAgendaTuCita {
    width: 274px;
    height: 44px;
    font-size: 20px;
    z-index: 4;
  }

  .nuestrosServicios {
    font-size: 25px;
  }

  .labels {
    display: none;
  }

  /* .icono-swiper-med {
    width: 30%;
  } */

  .swiper-wrapper {
    display: flex;
  }

  .icono-swiper {
    width: 50%;
  }

  .swiper-servicios {
    overflow-x: hidden;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 0px 10px;
  }

  .imgRedonda {
    width: 106px;
    height: 106px;
  }

  /* #titulo-nuestroEquipo {
    display: none;
  } */

  .copy-equipo-movil {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 72px;
    font-size: 25px;
    font-weight: 600;
  }

  .imagen-equipo {
    width: 250px;
    position: relative;
    bottom: 5.5%;
    right: 2%;
  }

  .contenedorFlexEquipo {
    max-width: 700px;
    padding-top: 0px;
  }

  .text-info {
    padding-right: 20px;
  }

  .borde-azul-equipo {
    width: 257px;
    height: 257px;
  }

  .img-info {
    padding-top: 17px;
  }

  .nuestras-clinicas {
    font-size: 27px;
    padding: 16px 0px 32px;
  }

  .separador {
    height: 130px;
  }

  .contenedorFlexCeo {
    max-width: 700px;
    padding-top: 20px;
  }

  .text-info2 {
    padding: 20px 0px 0px 30px;
  }

  .borde-azul-ceo {
    width: 250px;
    height: 250px;
  }

  .imagen-ceo {
    width: 240px;
    position: relative;
    bottom: 5%;
    right: 2.5%;
  }

  .contenedorFlexDoctor {
    max-width: 700px;
    padding-top: 20px;
  }

  .borde-azul-doctor {
    width: 250px;
    height: 250px;
  }

  .imagen-dr {
    width: 240px;
    position: relative;
    bottom: 4.5%;
    right: 1%;
  }

  .contenedor-direccion {
    padding-left: 19px;
  }

  .contenedor-ubicaciones {
    max-width: 720px;
  }

  #nombre-clinica {
    font-size: 18px;
  }

  #direccion {
    font-size: 15.5px;
  }

  .circulo-ubicacion {
    width: 74px;
    height: 74px;
  }

  .icono-ubicacion {
    width: 36px;
    height: 53px;
  }

  .boton-ubi-chapule {
    width: 139px;
    font-size: 14px;
    margin: 13px 0px 34px;
  }

  .boton-ubi-guadalupe {
    width: 139px;
    font-size: 14px;
    margin: 13px 0px 34px;
  }

  .flex-container-form {
    max-width: 575px;
    margin: auto;
  }

  .flex-container-form > div {
    display: flex;
    flex-direction: column;
  }

  .flex-container-form input {
    margin: 10px 0px;
  }

  .flex-container-form02 {
    max-width: 575px;
    margin: auto;
    flex-direction: column;
  }

  .flex-container-form02 > div {
    flex: 1;
    padding: 0px;
  }

  .text-right {
    padding: 0px 104px;
  }

  .btn-enviar {
    width: 45%;
    font-size: 20px;
  }

  .footer-spanna {
    max-width: 750px;
    padding: 0px 0px;
  }
}

@media (max-width: 768px) {
  .equis-menu-movil {
    width: 17px;
    height: 17px;
    text-align: center;
    font-size: 30px;
    color: #e3e3e3;
    align-self: flex-end;
    margin-right: 30px;
  }

  .botonBuscarMobile {
    display: flex;
  }

  #header-movil.menu-activado {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 35px;
  }

  .seccion-uno {
    padding-top: 53px;
    justify-content: center;
    align-items: center;
    /* justify-content: space-around; */
    background-color: #262626;
    width: 100%;
    display: none;
  }

  .menu-activado {
    padding-top: 53px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #696969;
    width: 100%;
    flex-direction: column;
    position: fixed;
    z-index: 50;
    height: 100vh;
    top: 0;
    bottom: 0;
  }

  #header-movil.menu-activado .menu-movil-container {
    display: flex;
    flex: 1;
  }

  .menu-movil-container {
    /* background-image: url("../img/flor-menu.png"); */
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #696969;
    overflow-x: hidden;
    overflow-y: hidden;
    color: white;
    background-repeat: no-repeat;
    background-position: 0;
  }

  #header-movil.menu-activado .menu-movil-container .footer-menu {
    position: fixed;
    bottom: 10%;
    width: 90%;
    align-self: center;
  }

  .clase-ul {
    /* width: 100%; */
    list-style: none;
    font-family: "Roboto";
    padding: 0px 30px;
  }

  .footer-menu {
    display: flex;
    justify-content: space-between;
    padding: 0px 37px 10px 32px;
  }

  .dropdown-lista {
    height: 50px;
    display: flex;
    align-items: center;
    font-family: "Open Sans";
  }

  .dropdown-lista2 {
    height: 50px;
    display: flex;
    align-items: center;
    font-family: "Open Sans";
  }

  .contenedor-icono {
    text-decoration: none;
  }

  .logo01 {
    margin-top: 0px;
    width: 80px;
  }

  .menu-movil-contenido {
    right: 80%;
    position: relative;
  }

  .contenedor-buscar {
    padding: 0px;
  }

  .btn-buscar input {
    outline: none;
    border: 0px;
    flex: 1;
    height: 40px;
    font-size: 16px;
    color: #bdbdbd;
  }

  .btn-buscar-mobile {
    margin: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    display: block;
  }

  .contenedor-buscar {
    background-color: #e5f9fc;
    box-shadow: 0px 4px 5px #0000002b;
    height: 0px;
    overflow: hidden;
    transition: all 0.4s;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 2;
  }

  .contenedor-buscar > div {
    height: 124px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: flex-end;
  }

  .contenedor-buscar-abierto {
    height: 124px;
  }

  .btn-cerrar {
    text-decoration: none;
    margin: 15px 25px;
    font-size: 20px;
    display: block;
  }

  .btn-buscar {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 94%;
    border-radius: 100px;
    box-shadow: 0px 4px 5px #0000002b;
    padding: 0px 20px;
    margin: 0px 10px 25px 10px;
    box-sizing: border-box;
  }

  .btn-buscar img {
    width: 20px;
    margin-left: 10px;
    cursor: pointer;
  }

  .contenedor-icono-buscar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px;
  }

  .barras-menu-movil {
    margin-top: 20px;
    margin-left: 20px;
    width: 40px;
    height: 10px;
  }

  .barra-uno {
    width: 27px;
    height: 2px;
    background: #606060;
    margin-bottom: 4px;
    transition: all 0.3s;
    border-radius: 1px;
  }

  .barra-dos {
    width: 18px;
    height: 2px;
    background: #606060;
    margin-bottom: 4px;
    transition: all 0.3s;
    border-radius: 1px;
  }

  .icono-buscador-movil {
    margin-right: 20px;
    margin-top: 20px;
  }

  .nav-bar {
    display: none;
  }

  .contenedor-copys-banner {
    top: 77%;
    left: 73%;
  }

  .imagen-principal {
    height: 100%;
  }

  .copy-uno-banner {
    font-size: 29px;
    letter-spacing: 1.16px;
  }

  .copy-dos-banner {
    font-size: 61px;
    letter-spacing: 2.44px;
    padding-bottom: 35px;
  }

  .contenedor-boton-banner {
    padding: 0px;
  }

  .BotonAgendaTuCita {
    width: 160px;
    height: 40px;
    font-size: 13px;
  }

  .icono-swiper-med {
    width: 30%;
  }

  .contenedorFlexEquipo {
    flex-direction: column;
    align-items: center;
  }

  .copy-equipo-movil {
    font-size: 18px;
    font-weight: 600;
    padding-top: 31px;
  }

  .borde-azul-equipo {
    width: 135px;
    height: 135px;
  }

  .imagen-equipo {
    width: 130px;
    position: relative;
    bottom: 5%;
    right: 2%;
  }

  .text-info {
    order: 2;
    max-width: 500px;
    padding: 10px 0px 0px;
  }

  .img-info {
    order: 1;
    padding-top: 14px;
  }

  .contenedorFlexCeo {
    align-items: center;
    flex-direction: column;
    padding-top: 22px;
  }

  .borde-azul-ceo {
    width: 127px;
    height: 127px;
  }

  .imagen-ceo {
    width: 122px;
    position: relative;
    bottom: 5%;
    right: 2%;
  }

  .text-info2 {
    max-width: 380px;
    padding: 0px;
  }

  .contenedor-titulo {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .titulo {
    padding-top: 3px;
    font-size: 18px;
    letter-spacing: 0.72px;
  }

  #titulo-icono {
    font-size: 16px;
  }

  #favIcon-Spanna {
    display: none;
  }

  #informacion {
    padding: 0px;
    margin: 6px 0px 0px 0px;
    font-size: 14px;
  }

  .contenedorFlexDoctor {
    flex-direction: column;
    align-items: center;
    padding-top: 11px;
  }

  .borde-azul-doctor {
    width: 127px;
    height: 127px;
  }

  .imagen-dr {
    width: 123px;
    position: relative;
    bottom: 5.5%;
    right: 1.3%;
  }

  .backg-clinica {
    margin-top: 71px;
  }

  .nuestras-clinicas {
    font-size: 30px;
    padding: 30px 0px 0px;
  }

  .contenedor-ubicaciones {
    flex-direction: column;
  }

  .contenedor-ubicacion {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contenedor-direccion {
    padding-left: 0px;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .separador {
    display: none;
  }

  #nombre-clinica {
    font-size: 26px;
    padding-top: 15px;
    padding-bottom: 12px;
  }

  .imgUbi {
    padding-bottom: 35px;
  }

  .boton-ubi-guadalupe {
    margin: 11px 0px 45px;
  }

  .boton-ubi-chapule {
    margin: 11px 0px 48px;
  }

  .forms {
    max-width: 380px;
  }

  .text-right {
    padding: 0px;
  }

  .btn-enviar {
    width: 100%;
  }

  .errorMensaje {
    padding-left: 6px;
    padding-bottom: 10px;
  }

  .backg-footer {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-img {
    padding-right: 40px;
  }

  .logo-footer {
    width: 99px;
  }

  .footer-list {
    display: flex;
    flex-direction: column;
  }

  .footer-list p {
    font-size: 16px;
  }

  .listado-dos {
    padding-top: 10px;
  }

  #titulo-nuestroEquipo {
    font-size: 25px;
  }
  .parrafoQuienes {
    font-size: 16px;
  }

  .imgQuienes {
    height: 35px;
  }

  .imagenesMarcas {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
  }
}

@media (max-width: 425px) {
  .logo-auplex {
    height: 100px;
  }
  .contenedor-copys-banner {
    top: 68%;
    left: 75%;
  }

  .copy-dos-banner {
    padding-bottom: 30px;
  }

  .nuestrosServicios {
    font-size: 25px;
    padding: 30px 0px 35px;
  }

  .copy-equipo-movil {
    padding-top: 25px;
  }

  .text-info {
    max-width: 320px;
    padding-top: 15px;
  }

  .text-info2 {
    max-width: 320px;
    padding-top: 15px;
  }

  .backg-clinica {
    margin-top: 51px;
  }

  .nuestras-clinicas {
    font-size: 20px;
  }

  .backg-formulario {
    max-width: 320px;
    margin: auto;
  }

  .BotonAgendaTuCita {
    width: 100px;
  }
}

@media (max-width: 340px) {
  .copy-dos-banner {
    font-size: 57px;
  }

  .imgRedonda {
    width: 100px;
    height: 100px;
  }

  .text-info {
    max-width: 300px;
  }

  .text-info2 {
    max-width: 300px;
  }

  .backg-formulario {
    max-width: 320px;
    margin: auto;
  }

  .backg-formulario {
    max-width: 300px;
  }

  .footer-img {
    padding-right: 10px;
  }

  .item p {
    font-size: 15px;
  }
}
</style>
