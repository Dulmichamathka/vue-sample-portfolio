<template>
  <v-app>
    <HeaderCom />
    <v-content>
      <HeroCom />
    </v-content>
    <v-main>
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
