<template>
  <v-footer padless class="mt-15">
    <v-col cols="12" lg="12" class="pa-0">
      <v-card flat tile class="pink lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <a :href="icon.link" target="_blank" class="white--text">
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon></a
            >
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Follow Me on Social Media
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>© Copyrights My Portfolio - dulmichamathaka</strong>
        </v-card-text>
      </v-card>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterCom",
  data: () => ({
    icons: [
      { icon: "mdi-facebook", link: "#" },
      {
        icon: "mdi-github",
        link: "https://github.com/Dulmichamathka?tab=repositories",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/dulmi-chamathka-142a03325/",
      },
      { icon: "mdi-instagram", link: "#" },
    ],
  }),
};
</script>
<style></style>
