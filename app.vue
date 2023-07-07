<script setup>
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout :name="/\/pwa\.*/.test(useRoute().path) ? 'webapp' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
