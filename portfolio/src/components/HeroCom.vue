<template>
  <v-container>
    <v-row class="pa-5">
      <v-col cols="12" sm="5" md="5" lg="4">
        <v-row align="center" justify="center">
          <div class="responsive-img-wrapper">
            <v-img
              style="border-radius: 100%"
              class="custom-shadow img"
              src="profile.jpg"
              contain
              height="auto"
            ></v-img
            ><!-- v- img acts as block level element by default.-->
          </div>
        </v-row>
      </v-col>
      <v-col sm="7" md="7" lg="8" class="pl-15 col">
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
            class="mr-5 white--text btn"
            color="#EF5350"
            rounded
            large
            elevation="6"
            ><v-icon class="mr-2">mdi-download-circle</v-icon> Download
            CV</v-btn
          >
          <v-btn
            class="white--text btn"
            color="#00C853"
            rounded
            large
            elevation="6"
            ><v-icon class="mr-2">mdi-phone-in-talk</v-icon>Contact Me</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
.custom-shadow {
  box-shadow: 0 8px 16px rgba(255, 0, 0, 0.8);
}

h1.intro-text {
  font-size: 60px;
  font-weight: 900;
  font-family: system-ui;
}

.responsive-img-wrapper {
  display: inline-block; /* Prevent the wrapper from stretching */
  max-width: 100%; /* Ensures it doesn't exceed container width */
  height: auto;
}

.img {
  width: 100% !important;
  height: auto !important;
  border-radius: 50%;
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

@media (min-width: 899px) and (max-width: 1264px) {
  h1.intro-text {
    font-size: 40px;
  }
  p {
    font-size: 16px;
    margin-left: 0px;
    text-align: justify;
  }

  .ma-2 {
    margin: 0px !important;
  }

  span.medium-text {
    font-size: 30px;
  }

  .btn {
    font-size: 14px;
  }
}

@media (min-width: 729px) and (max-width: 898px) {
  h1.intro-text {
    font-size: 35px;
  }
  p {
    font-size: 15px;
    margin-left: 0px;
    text-align: justify;
  }

  .ma-2 {
    margin: 0px !important;
  }

  span.medium-text {
    font-size: 25px;
  }

  .btn {
    font-size: 11px;
  }
}

@media (min-width: 600px) and (max-width: 702px) {
  .btn {
    padding: 4px 6px !important; /* Smaller padding */
    font-size: 10px !important; /* Smaller font size */
    height: 35px !important; /* Reduce button height */
    min-width: auto !important; /* Remove default min-width */
    margin-right: 6px !important;
  }
}

@media (min-width: 600px) and (max-width: 728px) {
  h1.intro-text {
    font-size: 30px;
  }
  p {
    font-size: 14px;
    margin-left: 0px;
    text-align: justify;
  }

  .ma-2 {
    margin: 0px !important;
  }

  span.medium-text {
    font-size: 20px;
  }

  .btn {
    font-size: 10px;
  }
}

@media (max-width: 600px) {
  .img {
    width: 200px !important; /* Set a reduced width for the image */
    height: 300px !important;
    border-radius: 50%; /* Maintain aspect ratio */
  }

  h1.intro-text {
    font-size: 30px;
  }
  p {
    font-size: 14px;
    margin-left: 0px;
    text-align: justify;
  }

  .ma-2 {
    margin: 0px !important;
  }

  span.medium-text {
    font-size: 20px;
  }

  .btn {
    font-size: 10px;
  }
}
</style>
