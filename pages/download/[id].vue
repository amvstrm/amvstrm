<script setup>
const env = useRuntimeConfig();

const getID = useRoute().params.id.split("-")[0];
const getGogoID = useRoute().params.id.split(`${getID}-`)[1];
const getEP = getGogoID.split(`-episode-`)[1];

const { data: anime } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/info/${getID}`,
  {
    cache: "force-cache",
  }
);

const { data: animedl, pending: aniDLpending } = await useFetch(
  `${env.public.API_URL}/api/v1/download/${getGogoID}`,
  {
    cache: "force-cache",
  }
);

useSeoMeta({
  ogTitle: `${
    anime.value?.title.userPreferred
      ? "Download " + anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } - amvstrm`,
  ogDescription: `${
    anime.value?.title.userPreferred
      ? "Download " + anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } on amvstrm`,
  ogImage: anime?.value.coverImage.large,
  ogUrl: useRoute().fullPath,
  twitterTitle: `${
    anime.value?.title.userPreferred
      ? "Download " + anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } - amvstrm`,
  twitterDescription: `${
    anime.value?.title.userPreferred
      ? "Download " + anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } on amvstrm`,
  twitterImage: anime?.value.coverImage.large,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: anime.value?.title.userPreferred
    ? "Download " + anime.value?.title.userPreferred + " Episode " + getEP
    : "amvstrm",
});
</script>

<template>
  <div class="app-error-page">
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="ma-2 pa-4 text-center mx-auto"
    >
      <v-icon class="mb-5" color="blue" icon="mdi-download" size="112" />
      <h2 class="mb-6">Download</h2>
      <p class="mb-4">
        {{ anime.title.userPreferred + " Episode " + getEP }}
      </p>
      <v-divider class="mb-4" />
      <div class="text-end">
        <v-btn
          v-if="!aniDLpending"
          :href="animedl.download"
          target="blank"
          prepend-icon="mdi-download"
          color="blue"
        >
          Download
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>
<style>
.app-error-page {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
