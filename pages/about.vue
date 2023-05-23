<script setup>
useHead({
  title: "About",
});
</script>
<template>
  <v-container>
    <h1>About amvstrm</h1>
    <p>
      amvstrm is an open source anime streaming platform that offer free anime
      with no ADs. Build with Nuxt 3, Vuetify and amvstrm's V2 API.
    </p>
    <v-row class="my-5">
      <v-col cols="12">
        <h1>Other :</h1>
      </v-col>
      <v-col cols="12">
        <v-btn
          prepend-icon="mdi-github"
          href="https://github.com/amvstrm/amvstrm"
        >
          Github
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn prepend-icon="mdi-github" href="https://github.com/amvstrm/api">
          Github (API)
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn prepend-icon="mdi-bookshelf" href="https://docs.amvstr.ml">
          Docs
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
