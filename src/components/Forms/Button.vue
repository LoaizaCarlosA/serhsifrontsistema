<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  //   props: {
  //     isDiasable: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     sombras: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     descarga: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   computed: {
  //     getClass() {
  //       return {
  //         'btn-sombra': this.sombras,
  //       }
  //     },
  //   },
  //   methods: {
  //     action() {
  //       if (this.descarga != false) {
  //         this.$emit('descargar')
  //       }
  //     },
  //   },
};
</script>

<style scoped>
.btn-continuar {
  background: white 0% 0% no-repeat padding-box;
  border: 1px solid #000000;
  border-radius: 18px;
  opacity: 1;
  width: 100px;
  height: 32px;
  cursor: pointer;
  box-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}
.btn-continuar:hover {
  background: black 0% 0% no-repeat padding-box;
  color: white;
}
.btn-buscar {
  background: white 0% 0% no-repeat padding-box;
  border: 1px solid #00bbef;
  color: #00bbef;
  border-radius: 18px;
  opacity: 1;
  width: 100px;
  height: 32px;
  cursor: pointer;
  box-shadow: 0px 3px 6px #00000029;
  font-weight: 700;
}
.btn-buscar:hover {
  background: #00bbef 0% 0% no-repeat padding-box;
  color: white;
}
</style>
