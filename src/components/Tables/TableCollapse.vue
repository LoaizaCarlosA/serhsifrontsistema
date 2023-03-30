<template>
  <div class="content-table">
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableCollapse'
}
</script>

<style scoped>
.content-table {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
}
table {
  width: 100%;
}
.anti-overflow.content-table {
  overflow-y: unset;
}
</style>