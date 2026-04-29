import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";

import "./assets/styles/theme.css";
import "./assets/tailwind.css";

import "./assets/styles/element-theme.scss";

import router from "./router";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
