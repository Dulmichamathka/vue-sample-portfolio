<template>
  <v-container
    fluid
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <v-row>
      <v-col lg="7">
        <v-container>
          <div style="height: 525px">
            <v-card
              color="#880E4F"
              style="
                border-radius: 35px;
                width: 700px;
                height: 500px;
                margin-top: 70px;
                margin-left: 50px;
              "
            >
              <v-container>
                <h1 align="center" class="white--text mt-10">About Me</h1>
                <p
                  class="white--text pa-12"
                  style="text-align: center; font-size: 20px"
                >
                  Hi, I’m Dulmi Chamathka, a 21-year-old frontend developer with
                  a passion for creating beautiful, user-friendly websites and
                  applications. I have strong skills in HTML, CSS, JavaScript,
                  and frameworks like React and Vue, along with experience in
                  using Figma for designing intuitive interfaces. I focus on
                  building responsive and functional web applications while
                  continuously improving my skills to deliver my best in every
                  project.
                </p>

                <v-row>
                  <div
                    style="width: 100%"
                    class="d-flex align-center justify-center pl-2"
                  >
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="black"
                      style="border: 1px solid"
                    >
                      <a href="#"
                        ><v-icon large dark color="#d81b60 "
                          >mdi-facebook</v-icon
                        ></a
                      >
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="black"
                      style="border: 1px solid"
                    >
                      <a href="#"
                        ><v-icon large dark color="#d81b60 "
                          >mdi-instagram</v-icon
                        ></a
                      >
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="black"
                      style="border: 1px solid"
                    >
                      <a
                        href="https://github.com/Dulmichamathka?tab=repositories"
                        ><v-icon large dark color="#d81b60 "
                          >mdi-github</v-icon
                        ></a
                      >
                    </v-btn>
                  </div>
                </v-row>
              </v-container>
            </v-card>
          </div>
        </v-container>
      </v-col>

      <v-col lg="5">
        <div style="position: relative">
          <div style="position: relative; z-index: 1">
            <v-img
              style="
                margin-top: 50px;
                width: 400px;
                height: 500px;
                border-radius: 15px;
              "
              src="profile.jpg"
            ></v-img>
          </div>

          <div
            style="
              width: 400px;
              height: 500px;
              border: 1px solid #880e4f;
              position: absolute;
              background: #880e4f;
              left: 25px;
              top: 28px;
              border-radius: 15px;
            "
          ></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped></style>
