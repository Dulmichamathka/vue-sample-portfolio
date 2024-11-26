<template>
  <v-container class="my-">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Protfolio</v-subheader>
        <h3 class="font-weight-bold mb-6 mt-2" justify="center">
          Welcome to My Portfolio!
        </h3>
        <p>
          Here, you’ll find a collection of the projects I’ve created using a
          variety of modern web development tools and design techniques. These
          projects showcase my skills in HTML, CSS, JavaScript, Vue, React, and
          Figma, demonstrating my ability to craft responsive, visually
          appealing, and user-friendly web applications. Each project highlights
          my creativity, technical expertise, and problem-solving abilities,
          reflecting my dedication to delivering high-quality work. Take a look
          below to explore my journey as a frontend developer and see how I
          bring ideas to life through code and design.
        </p>
      </v-col>

      <v-col lg="12">
        <div class="text-center">
          <v-chip
            @click="activePortfolio = 'webdesign'"
            :color="activePortfolio === 'webdesign' ? 'success' : ''"
            class="mx-5"
            >Web Design</v-chip
          >
          <v-chip
            @click="activePortfolio = 'mobileapp'"
            :color="activePortfolio === 'mobileapp' ? 'success' : ''"
            class="mx-5"
            >Mobile App</v-chip
          >
        </div>
      </v-col>
      <slot v-if="activePortfolio === 'webdesign'">
        <v-col lg="4" v-for="(web, webIndex) in webDesigns" :key="webIndex">
          <v-card class="mb-15">
            <v-img
              :src="web.img"
              class="white--text align-end"
              style="height: 300px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ web.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>

      <slot v-if="activePortfolio === 'mobileapp'" :to="vuedesign">
        <v-col
          lg="4"
          v-for="(mobile, mobileIndex) in mobileApp"
          :key="mobileIndex"
        >
          <v-card class="mb-15">
            <v-img
              :src="mobile.img"
              class="white--text align-end"
              style="height: 300px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ mobile.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PortfolioCom",

  data() {
    return {
      activePortfolio: "webdesign",

      webDesigns: [
        { title: "Vue Web-Design", img: "vue.jpeg" },
        { title: "React Web-Design", img: "react.jpeg" },
      ],

      mobileApp: [
        { title: "Figma ", img: "figma2.jpg" },
        { title: "AdobeXD", img: "adobexd.jpeg" },
      ],
    };
  },
};
</script>

<style></style>
