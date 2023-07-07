<script setup>
useSeoMeta({
  ogTitle: 'About',
  ogDescription: 'About amvstrm...',
  ogImage: 'logo.png',
  ogUrl: '[og:url]',
  twitterTitle: 'About',
  twitterDescription: 'About amvstrm...',
  twitterImage: 'logo.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: "About"
})

</script>
<template>
  <v-container>
    <v-card>
      <v-card-title>About amvstrm</v-card-title>
      <v-card-text>
        amvstrm is an open source anime streaming platform that offer free anime
        with no ADs and install it as Android or IOS web app. <br>
        Build with Nuxt 3, Vuetify and amvstrm's V2 API.
      </v-card-text>
    </v-card>
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
