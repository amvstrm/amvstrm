<script setup>
useSeoMeta({
  ogTitle: `DMCA`,
  ogDescription: `DMCA`,
  ogImage: "",
  ogUrl: useRoute().fullPath,
  twitterTitle: `DMCA`,
  twitterDescription: `DMCA`,
  twitterImage: "",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "DMCA",
});
</script>

<template>
  <div class="app-page">
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="ma-2 pa-4 text-center mx-auto"
    >
      <v-icon class="mb-5" color="blue" icon="mdi-information" size="112" />
      <div class="mb-4">
        <h1>Notice</h1>
        <p>
          Our website did not store copyrighted material and We only provided content from other provider. If anything that you think it against the law, please contact us at 
          <a href="mailto:amvstrm@skiff.com">amvstrm@skiff.com</a>
        </p>
        <v-divider class="my-2"></v-divider>
        <h1>DMCA</h1>
        <p>
          The Digital Millennium Copyright Act (DMCA) is a United States
          copyright law that implements two 1996 treaties of the World
          Intellectual Property Organization (WIPO).
        </p>
        <p>
          The DMCA criminalizes the production and dissemination of technology,
          devices, or services that are primarily designed or produced for the
          purpose of circumventing technological measures that effectively
          control access to copyrighted works.
        </p>
        <p>
          The DMCA also provides a safe harbor for online service providers from
          copyright infringement liability, provided that they meet certain
          conditions, such as promptly removing infringing material upon
          notification.
        </p>
        <p>
          If you believe that your copyright has been infringed, you can file a
          DMCA takedown notice with the online service provider that is hosting
          the infringing material.
        </p>
        <p>
          For more information about the DMCA, please visit the
          <a href="https://www.copyright.gov/dmca/">
            U.S. Copyright Office website
          </a>.
        </p>
      </div>
    </v-sheet>
  </div>
</template>
<style>
.app-page {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
