import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
