<template>
  <tr class="tr-base" :class="getClases">
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'RowBodyCollapse',
  props: {
    // flagCollapse: {
    //   type: Boolean,
    //   default: true
    // },
    // flagPointer: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    getClases() {
      return {
        
      }
    }
  }
}
</script>

<style scoped>
tr {
  transition: 0.3s all;
  height: 116px;
  margin-bottom: 20px;
}
.impar {
  background-color: #F8F8F8;
}
.par {
  background-color: #F8F8F8;
}
.active-collapse {
  background-color: rgba(132, 208, 240, 0.22) !important;
}
tr.pointer:hover {
  cursor: pointer;
}
.tr-base {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
  margin-bottom: 20px;
}
</style>
