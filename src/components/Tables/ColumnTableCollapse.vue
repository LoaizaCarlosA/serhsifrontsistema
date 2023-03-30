<template>
  <td class="column-table-collapse">
    <div>
      <slot />
    </div>
  </td>
</template>

<script>
export default {
  name: 'ColumnTableCollapse',
}
</script>

<style scoped>
td {
  padding: 3px;
  text-align: center;
  font: normal normal normal 16px/24px Open Sans;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  font-family: 'Roboto';
  font-size: 16px;
}
td div {
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  /* word-break: break-all; */
}
.multi-rechazo.column-table-collapse {
  max-width: 260px;
}

@media (min-width: 767px) {
  .multi-rechazo.column-table-collapse {
    max-width: unset;
  }
}
@media (min-width: 1200px) {
  .font-size-warning.column-table-collapse {
    font-size: 13px;
  }
}
</style>
