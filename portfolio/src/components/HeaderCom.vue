<template>
  <v-app-bar
    style="padding: 0px 90px"
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
  >
    <v-toolbar-title class="font-weight-bold">My Portfolio.</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-list class="d-flex align-center">
      <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title>{{ menu.title }} </v-list-item-title>
      </v-list-item>
      <v-btn class="ml-7" text>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn outlined color="success" class="ml-6">Get Started</v-btn>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderCom",

  data: () => ({
    menus: [
      { title: "Home", route: "home" },
      { title: "About us", route: "about-us" },
      { title: "Portfolio", route: "protfolio" },
      { title: "Project", route: "project" },
      { title: "Gallery", route: "galley" },
      { title: "Contact", route: "contact" },
    ],
  }),
};
</script>
