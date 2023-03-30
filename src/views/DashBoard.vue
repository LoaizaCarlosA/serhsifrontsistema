<template>
  <LayoutPrincipal>
    <div class="proximamente">
      <div>Citas</div>
      <div>¡Próximamente!</div>
    </div>
  </LayoutPrincipal>
</template>

<script>
import LayoutPrincipal from '@/layouts/LayoutPrincipal.vue'

export default {
  components: {
    LayoutPrincipal,
  },
}
</script>

<style scoped>
.proximamente {
  text-align: center;
  font-family: 'Roboto';
  font-size: 30px;
  display: flex;
  color: #707070;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
