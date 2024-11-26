import Vue from "vue";
import VueRouter from "vue-router";
import HeroCom from "../components/HeroCom.vue";
import AboutMe from "../components/AboutMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HeroCom,
  },
  {
    path: "/",
    name: "about",
    component: AboutMe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
