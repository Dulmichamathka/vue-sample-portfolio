import ReactDesigns from "@/views/ReactDesigns.vue";
import VueDesign from "@/views/VueDesign.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/vuedesign",
    name: "VueDesign",
    component: VueDesign,
  },

  {
    path: "/reactdesign",
    name: "ReactDesign",
    component: ReactDesigns,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
