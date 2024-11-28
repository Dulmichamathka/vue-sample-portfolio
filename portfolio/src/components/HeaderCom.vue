<template>
  <v-app-bar
    style="padding: 0px 15px"
    app
    color="#FFEBEE"
    light
    elevation="6"
    elevate-on-scroll
  >
    <v-toolbar-title
      class="font-weight-bold"
      style="font-family: cursive; font-weight: 600; font-size: x-large"
      >My Portfolio.</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-list
      color="#FFEBEE"
      class="d-flex align-center list-content responsiveMenu"
    >
      <v-list-item
        class="hidden-xs-only"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <v-btn
          text
          :class="activeIndex === index ? 'active-btn' : ''"
          @click="scrollTo(menu.route, index)"
        >
          <v-list-item-title style="color: #263238"
            >{{ menu.title }}
          </v-list-item-title>
        </v-btn>
      </v-list-item>
      <v-btn class="ml-7" text>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div class="hidden-sm-and-up">
        <template>
          <div class="text-center">
            <v-menu offset-y class="menu-wrapper">
              <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
              </template>
              <v-list>
                <v-list-item
                  v-for="(menu, index) in menus"
                  :key="index"
                  :to="menu.route"
                >
                  <v-list-item-title style="color: #263238"
                    >{{ menu.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </div>

      <v-btn outlined color="success" class="ml-6 hidden-xs-only"
        >Download CV</v-btn
      >
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderCom",

  data: () => ({
    menus: [
      { title: "Home", route: "home" },
      { title: "About Me", route: "about" },
      { title: "Projects", route: "portfolio" },
      { title: "Gallery", route: "gallery" },
      { title: "Contact", route: "contact" },
    ],
    activeIndex: 0,
  }),

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    scrollTo(sectionId, index) {
      this.activeIndex = index; // Highlight the clicked button
      const element = document.getElementById(sectionId); // Get section by id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      }
    },

    handleScroll() {
      const sectionPositions = this.menus.map((menu) => {
        const section = document.getElementById(menu.route);
        //Fetches the DOM element with the id that matches the route of the current menu item.
        // For menu.route = "home", it finds the section with id="home" in the DOM.
        return section ? section.offsetTop : 0;
        // offset take the distance of sections in  .
        // If the "Home" section starts 200 pixels down the page, section.offsetTop for "Home" will be 200.
        //The map function creates an array of vertical positions for all sections.
        //sectionPositions = [200,800,1400,2100,2600]
      });

      const scrollPosition = window.scrollY;

      for (let i = 0; i < sectionPositions.length; i++) {
        if (
          scrollPosition >= sectionPositions[i] &&
          (i === sectionPositions.length - 1 ||
            scrollPosition < sectionPositions[i + 1])
        ) {
          this.activeIndex = i;
          break;
        }
      }
    },
  },
};
</script>

<style>
.responsiveMenu {
  padding: 0px 0px;
}

.v-menu__content {
  width: 162px;
  top: 42px;
  left: 361px;
}

.active-btn {
  background-color: #d81b60 !important; /* Active button background color */
  color: white !important; /* Active button text color */
  border-radius: 5px; /* Make it rounded */
  transition: all 0.3s ease; /* Smooth effect */
}

.active-btn .v-list-item__title {
  color: white !important; /* Ensure text color changes */
}

.v-btn {
  transition: all 0.3s ease; /* Add transition for all buttons */
}

.v-list-item {
  padding: 0px;
}
</style>
