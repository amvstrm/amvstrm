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

const { data: animedl, pending: aniDLpending } = useFetch(
  `${env.public.API_URL}/api/v1/download/${getGogoID}`,
  {
    cache: "force-cache",
  }
);

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
  <div class="app-page">
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
        {{ anime?.title.userPreferred + " Episode " + getEP }}
      </p>
      <v-divider class="mb-4" />
      <div class="text-end">
        <v-btn
          :loading="aniDLpending"
          :href="animedl?.download"
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
.app-page {
  height: 90vh;
  display: grid;
  place-items: center;
}
</style>
