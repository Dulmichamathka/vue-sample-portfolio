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
        :to="menu.route"
      >
        <v-btn
          :class="activeIndex === index ? 'active-btn' : ''"
          text
          @click="activeIndex = index"
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
      { title: "Home", route: "/" },
      { title: "About Me", route: "/about" },
      { title: "Portfolio", route: "protfolio" },
      { title: "Gallery", route: "galley" },
      { title: "Contact", route: "contact" },
    ],
    activeIndex: 0,
  }),
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
  color: #fff !important; /* Active button text color */
  border-radius: 5px; /* Make it rounded */
  transition: all 0.3s ease; /* Smooth effect */
}

.v-btn {
  transition: all 0.3s ease; /* Add transition for all buttons */
}

.v-list-item {
  padding: 0px;
}
</style>
