<template>
  <v-app>
    <!--Header Section-->
    <HeaderCom />

    <v-main>
      <!-- Home Section -->
      <div id="home">
        <HeroCom />
      </div>

      <!-- About Me Section -->
      <div id="about">
        <AboutMe />
      </div>

      <!-- Portfolio Section -->
      <div id="portfolio">
        <PortfolioCom />
      </div>

      <!-- Gallery Section -->
      <div id="gallery">
        <GalleryCom />
      </div>

      <!-- Contact Section -->
      <div id="contact">
        <ContactMe />
      </div>

      <FooterCom />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderCom from "./components/HeaderCom.vue";
import HeroCom from "./components/HeroCom.vue";
import AboutMe from "./components/AboutMe.vue";
import PortfolioCom from "./components/PortfolioCom.vue";
import GalleryCom from "./components/GalleryCom.vue";
import ContactMe from "./components/ContactMe.vue";
import FooterCom from "./components/FooterCom.vue";
export default {
  name: "App",

  components: {
    HeaderCom,
    HeroCom,
    AboutMe,
    PortfolioCom,
    GalleryCom,
    ContactMe,
    FooterCom,
  },
};
</script>
