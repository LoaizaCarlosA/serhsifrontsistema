<template>
  <section class="contenedorPrincipal">
    <section class="contenedorLogin">
      <section class="contenedorInfoLogin">
        <img class="logo" src="../assets/img/LogotipoB.png" alt="" />
        <div class="bienvenidoCopie">Bienvenido</div>
        <Input
          class="contenedorInputUsuario"
          id="inputCorreo"
          placeholder="Correo electrónico"
          :maxlength="50"
        />
        <Input
          class="contenedorInputPassword"
          id="inputPass"
          placeholder="Contraseña"
          :maxlength="60"
          autocomplete="off"
          type="password"
        >
          <div class="ojo user-select-none" >
                  <i class="icon-visualizar"></i>
                </div>
        </Input>
        <div
          v-if="loginErrorMsg !== null"
          class="contenedorError error"
          :class="loginErrorMsg !== null ? 'active' : ''"
        >
          <!-- <img class="candadoImg" src="@assets/img/candado-error.svg" alt="" /> -->
          <div class="copieError">{{ loginErrorMsg }}</div>
        </div>
        <Button id="btnIngresar" class="user-select-none" @click="loginBtn"
          >Ingresar</Button
        >
      </section>
    </section>
    <section class="contenedorImagen">
      <div class="imagenLogin"></div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
body {
    margin: 0px;
    font-family: sans-serif;
}
.contenedorPrincipal {
    display: flex;
    width: 100%;
    height: 100vh;
    min-height: 450px;
  }
  .contenedorLogin {
    display: flex;
    width: 70%;
    background-repeat: no-repeat;
    background-size: 40rem;
    /* background-color: #171717; */
    background-color: #fefefe;
    background-position: left bottom;
    background-position: -261px;
    padding: 0px 20px;
    transition: all 0.2s;
  }
  .contenedorInfoLogin {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 20px;
    transition: all 0.2s;
  }
  .bienvenidoCopie {
    /* font-style: normal; */
    font-weight: 300;
    font-size: 32px;
    color: Black;
    display: flex;
    justify-content: center;
    padding-top: 70px;
    /* padding-bottom: 20px; */
    font-weight: 700;
    color: #ef7b14;
  }
  .contenedorInputUsuario {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 23px;
    height: 45px;
    padding-left: 36px;
    font-size: 18px;
    margin-top: 28px;
    color: #696969;
    outline: none;
    border: dashed;
  }
  .inputUsuario {
    width: 90%;
    height: 45px;
    border: 0;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
  .contenedorInputPassword {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 23px;
    height: 45px;
    padding-left: 36px;
    font-size: 18px;
    margin-top: 40px;
    color: #696969;
    outline: none;
    border: dashed;
  }
  .contenedorError {
    background: #ffffff4a;
    border-radius: 6px;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0px;
  }
  .candadoImg {
    padding-left: 15px;
    padding-right: 8px;
  }
  .copieError {
    color: #ebc032;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
  }
  #btnIngresar {
    margin-top: 25px;
    background: #414041;
    border-radius: 23px;
    color: white;
    border: 0;
    cursor: pointer;
    font-style: normal;
    font-size: 18px;
    padding: 12px 5px;
    transition: all 0.4s;
  }
  #btnIngresar:hover {
    background-color: #e37316;
    color: white;
  }
  #btnIngresar:active {
    background-color: #e37316;
    color: white;
  }
  .contenedorImagen {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b9b9b9;
  }
  .imagenLogin {
    background-image: url("../assets/img/final-final-final-final_Mesa-de-trabajo-1-2048x747.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-color: #b9b9b9;
    /* background-color: #b9b9b9; */
    background-position: center;
    transition: all 0.2s;
  }
  .logo {
    width: 60%;
    height: auto;
    align-self: center;
  }
  .error {
    overflow: hidden;
    opacity: 0;
    color: #fff;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
  .error.active {
    opacity: 1;
    margin-top: 15px;
  }
  .ojo.active {
    color: #c5b100;
  }
  #inputPass {
    margin-top: 40px;
  }
  .ojo {
    position: absolute;
    background-color: #fff;
    top: calc(4px / 2);
    right: 3px;
    font-size: 12px;
    cursor: pointer;
    width: 41px;
    height: 41px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  .ojo .icon-visualizar {
    display: flex;
    align-items: center;
  }
  .ojo:hover {
    background: #f6f6f6;
  }
  .ojo:active {
    background: #e5e5e5;
  }
  .ojo i::before {
    width: 2em;
  }
  @media (max-width: 1279px) {
    .contenedorLogin {
      width: 100%;
    }
    .contenedorImagen {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .contenedorLogin {
      width: 100%;
    }
    .contenedorInfoLogin {
      max-width: 346px;
    }
    .inputUsuario {
      font: 14px;
    }
    #btnIngresar {
      font: 14px;
    }
  }
  @media (max-height: 650px) {
    .imagenLogin {
      height: 100%;
      background-position: top;
    }
  }
</style>
