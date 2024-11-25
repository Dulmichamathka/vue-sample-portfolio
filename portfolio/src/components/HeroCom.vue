<template>
  <v-container>
    <v-row class="pa-5">
      <v-col cols="12" lg="4">
        <v-row align="center" justify="center">
          <v-img
            style="border-radius: 100%"
            class="custom-shadow"
            src="profile.jpg"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="12" lg="8" class="pl-15">
        <h1 class="intro-text">
          <span class="medium-text">Hi...</span><br />
          I'm <span style="color: red"> Dulmi Chamathka</span><br />
          a Frontend Developer
        </h1>
        <v-row class="ma-2">
          <p class="my-5 para">
            I'm 21 years old and a proud top performer in my Higher National
            Diploma program. As a passionate frontend developer, I bring
            dedication, hard work, and creativity to every project. I believe in
            giving my best to achieve impactful results.
          </p>
        </v-row>
        <v-row justify="start" class="ma-2">
          <v-btn
            class="mr-5 white--text"
            color="#EF5350"
            rounded
            large
            elevation="6"
            ><v-icon class="mr-2">mdi-download-circle</v-icon> Download
            CV</v-btn
          >
          <v-btn class="white--text" color="#00C853" rounded large elevation="6"
            ><v-icon class="mr-2">mdi-phone-in-talk</v-icon>Contact Me</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style>
.custom-shadow {
  box-shadow: 0 8px 16px rgba(255, 0, 0, 0.8);
}

h1.intro-text {
  font-size: 60px;
  font-weight: 900;
  font-family: system-ui;
}

span.medium-text {
  font-size: 50px;
  font-weight: 700;
  font-family: system-ui;
  text-align: left;
}

p {
  font-size: 18px;
  font-family: system-ui;
}
</style>
