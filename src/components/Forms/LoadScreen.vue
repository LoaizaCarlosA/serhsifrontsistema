<template>
  <div class="bounce-loader">
    <div class="circulo-load"></div>
    <p class="info" v-if="info != ''">{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadScreen',
  props: {
    info: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      key_random: 0,
    };
  },
  mounted() {
    // agregar la clase loader_NUMERO al levantar un modal para evitar el
    // scroll de la seccion debajo del modal, (cada modal crea su propio
    // id para evitar problemas al detonar dos a la vez)
    const random = Math.floor(Math.random() * (100000 - 1000)) + 1000;
    this.key_random = random;
    document.body.classList.add('loader_' + random);
  },
  unmounted() {
    // remover la clase creada en mounted para volver a activar el scroll
    // en el body al quitar el modal
    document.body.classList.remove('loader_' + this.key_random);
  },
};
</script>

<style scoped>
.info {
  max-width: 400px;
  padding: 14px;
  color: white;
}
.bounce-loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 3000;
}
.circulo-load {
  height: 80px;
  width: 80px;
  border: 5px solid #ef7b14;
  border-radius: 50%;
  border-top: #fff;
  animation: circular-loader 1s linear infinite;
}
@keyframes circular-loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
