<template>
  <v-app>
    <HeaderCom />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderCom from "./components/HeaderCom.vue";
export default {
  name: "App",

  components: {
    HeaderCom,
  },
};
</script>
