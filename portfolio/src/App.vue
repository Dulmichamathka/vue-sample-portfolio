<template>
  <v-app>
    <!--Header Section-->
    <HeaderCom />

    <v-main>
      <!--Home content-->
      <HeroCom />

      <!--About Me-->
      <AboutMe />

      <PortfolioCom />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderCom from "./components/HeaderCom.vue";
import HeroCom from "./components/HeroCom.vue";
import AboutMe from "./components/AboutMe.vue";
import PortfolioCom from "./components/PortfolioCom.vue";
export default {
  name: "App",

  components: {
    HeaderCom,
    HeroCom,
    AboutMe,
    PortfolioCom,
  },
};
</script>
