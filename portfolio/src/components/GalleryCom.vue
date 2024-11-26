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

      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="2">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
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
};
</script>
<style></style>
