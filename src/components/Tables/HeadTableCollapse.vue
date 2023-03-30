<template>
  <thead class="thead">
    <tr>
      <th>Hola</th>
      <th v-for="(title, index) in titles" :key="index" >{{ title.nombre }}</th>
    </tr>
  </thead>
</template>

<script>
// import { vueWindowSizeMixin } from 'vue-window-size/option-api'

export default {
  name: 'HeadTableCollapse',
  components: {},
  // props: {
  //   flagCollapse: {
  //     type: Boolean,
  //     default: true,
  //   },
    titles: {
      type: Array,
      Number: [],
    },
  //   resolucion: {
  //     type: Number,
  //     default: 1280,
  //   },
  //   getFlagCollapse: {
  //     type: Boolean,
  //     default: false
  //   },
  // },
  // mixins: [vueWindowSizeMixin()],
  // computed: {
  // },
  data() {
    return {}
  },
}
</script>

<style scoped>
thead {
  background-color: #84d0f0;
  height: 58px;
  background-color: #F5F5F5;
  color: #707070;
  font-family: Roboto;
  display: none;
}
th {
  padding: 8px;
  white-space: nowrap;
  text-align: center;
  font: normal normal 600 16px/24px Open Sans;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  font-family: 'Roboto';
  }
.thead-sticky.thead {
  position: sticky;
  top: 0px;
}
.thead-sticky-modalmov.thead {
  position: sticky;
  top: -15px;
  z-index: 98;
}
/*CSS WEB (CLASE PARA MEMBRESIA)*/
.web {
  display: none;
}

@media (max-width: 1279px) {
  .md {
    display: none;
  }
  .th-catalogo-nombre {
    width: 35%;
  }
}
@media (max-width: 767px) {
  .sm {
    display: none;
  }
  .th-catalogo-nombre {
    width: 45%;
  }
  .th-catalogo35 {
    width: 35%;
  }
}

@media (min-width: 767px) {
  .web {
    display: initial;
  }
  .subregalos {
    display: none;
  }
}
@media (min-width: 1025px) {
  .web {
    display: none;
  }
}
@media (min-width: 1279px) {
  .th-catalogo-descripcion {
    width: 24%;
  }
}
</style>
