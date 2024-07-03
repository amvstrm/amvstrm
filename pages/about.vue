<script setup>
useSeoMeta({
  ogTitle: "About",
  ogDescription: "About amvstrm...",
  ogImage: "logo.png",
  ogUrl: "[og:url]",
  twitterTitle: "About",
  twitterDescription: "About amvstrm...",
  twitterImage: "logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "About",
});
</script>
<template>
  <v-container>
    <div class="pa-5" style="background-color: #212121">
      <h1><img src="/logo.png" alt="loho" height="50" /></h1>
      <p>
        amvstrm is an open source anime streaming platform that offer free anime
        with no ADs and install it as Android or IOS web app. <br />
        Build with Nuxt 3, Vuetify and amvstrm's V2 API.
      </p>
      <div class="mt-2">
        <v-btn
          class="mr-2"
          color="grey-darken-1"
          prepend-icon="mdi-github"
          href="https://github.com/amvstrm"
        >
          Github
        </v-btn>
        <v-btn
          color="blue-darken-1"
          prepend-icon="mdi-file-document"
          href="https://amvdocs.pages.dev"
        >
          Documentation
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
