<template>
  <router-link :to="'/' + url" class="item" @click="closeMenu">
    <img :src="require('../../assets/' + icon)" alt="icon" />
      <p v-if="collapsedMenu" :class="collapsedMenu ? 'active' : ''">{{ name }}</p>
  </router-link>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useMenuBahk } from '../../store/menu';

export default {
  name: 'ItemListModulo',
  props: ['name', 'icon', 'url'],
  computed: {
    ...mapState(useMenuBahk, ['collapsedMenu']),
  },
  methods: {
    ...mapActions(useMenuBahk, ['setCollapsedMenu']),
    closeMenu() {
      this.setCollapsedMenu(false);
    },
  },
};
</script>

<style scoped>
.item {
  min-height: 30px;
  display: flex;
  align-items: center;
  padding: 9px 20px;
  color: #616161;
  transition: 0.3s all;
}
.item img {
  margin-right: 10px;
  width: 24px;
  height: 24px;
  min-width: 24px;
}
.item p {
  font-size: 12px;
  font-weight: 400;
  transition: 0.3s all;
  white-space: nowrap;
  overflow: hidden;
}
.item.router-link-exact-active {
  background-color: #f2f2f2;
}
.item.router-link-exact-active img,
.item.router-link-exact-active p {
  opacity: 1;
}
.item img,
.item p {
  opacity: 0.3;
}
.item:hover img,
.item:hover p {
  opacity: 0.95;
}
.item.router-link-exact-active p {
  font-weight: 400;
  font-size: 14px;
}
.item:hover {
  background-color: #f2f2f2;
  transition: 0.3s all;
}
.item:active {
  background-color: #d1d1d1;
  transform: scale(0.9);
  border-radius: 6px;
}
.item:active p {
  color: #000000;
}
.lateral-menu.collapsed-menu .item {
  min-width: auto;
}
.lateral-menu.collapsed-menu .item img {
  margin-right: 0px;
}
.lateral-menu.collapsed-menu .item p {
  width: 0px;
  height: 0px;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s all;
  overflow: hidden;
}
@media (max-width: 767px) {
  .item:active {
    transform: scale(0.97);
  }
}
</style>
