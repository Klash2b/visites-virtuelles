import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import IdleVue from "idle-vue";
import i18n from './i18n'

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 30000, // 30 seconds,
  startAtIdle: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify,
  i18n,

  created() {
    // Prevent blank screen in Electron builds
    this.$router.push("/");
  }
}).$mount("#app");
