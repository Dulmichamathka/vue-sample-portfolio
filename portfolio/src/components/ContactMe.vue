<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Contact</v-subheader>
      </v-col>

      <v-col cols="12" lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.83801076346!2d80.13405445928481!3d6.055971349015046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1732647858958!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>

      <v-col cols="12" lg="6">
        <v-form ref="form">
          <v-text-field
            v-model="contactInfo.name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="contactInfo.email"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea label="Message" v-model="contactInfo.message">
          </v-textarea>

          <v-btn color="success" class="mr-4"> Send </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactMe",

  data() {
    return {
      contactInfo: {},
    };
  },
};
</script>
