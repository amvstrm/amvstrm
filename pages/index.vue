<script setup>
useSeoMeta({
  ogTitle: "Home",
  ogDescription: "amvstrm - A streaming service for weebo...",
  ogImage: "logo.png",
  ogUrl: useRoute().fullPath,
  twitterTitle: "Home",
  twitterDescription: "amvstrm - A streaming service for weebo...",
  twitterImage: "logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Home",
});
</script>

<template>
  <PgCompsLandingPage />
</template> 

<style></style>