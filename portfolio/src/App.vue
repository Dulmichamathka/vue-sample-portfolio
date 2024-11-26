<template>
  <v-app>
    <HeaderCom />

    <v-main>
      <HeroCom />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderCom from "./components/HeaderCom.vue";
import HeroCom from "./components/HeroCom.vue";
export default {
  name: "App",

  components: {
    HeaderCom,
    HeroCom,
  },
};
</script>
