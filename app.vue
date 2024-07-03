<script setup>
</script>

<template>
  <NuxtPwaManifest />
  <NuxtLoadingIndicator />
  <NuxtLayout :name="/\/pwa\.*/.test(useRoute().path) ? 'webapp' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
