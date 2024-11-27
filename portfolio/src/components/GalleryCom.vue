<template>
  <v-container
    fluid
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Gallery</v-subheader>
        <h3 class="font-weight-bold mb-6 mt-2" justify="center">
          Welcome to My Gallery Area!
        </h3>
      </v-col>

      <v-col
        v-for="(image, index) in images"
        :key="index"
        class="d-flex child-flex"
        cols="3"
      >
        <v-img :src="image" aspect-ratio="2" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "GalleryCom",

  data() {
    return {
      images: [
        "01.PNG",
        "02-scrolled-rightsidebar.PNG",
        "dashboard.PNG",
        "dashboard01.PNG",
        "login2 (1).PNG",
        "login2 (2).PNG",
        "page01.PNG",
        "page02.PNG",
        "pageDown.PNG",
        "pageUp.PNG",
      ],
    };
  },
};
</script>
<style></style>
