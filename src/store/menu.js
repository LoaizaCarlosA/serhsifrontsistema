import { defineStore } from 'pinia';

export const useMenuBahk = defineStore({
  id: 'menuBahk',
  state: () => ({
    collapsedMenu: false,
  }),
  actions: {
    setCollapsedMenu(collapse) {
      this.collapsedMenu = collapse;
    },
  },
});
