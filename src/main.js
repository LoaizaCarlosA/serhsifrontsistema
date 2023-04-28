import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '@/store';
// import Vue from "vue";

// import { createApp } from "vue";

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
