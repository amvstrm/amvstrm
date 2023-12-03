<script setup>
import { useStorage } from "@vueuse/core";
const get_key = useStorage("cloud-cfg", {});
const bk_state = useStorage("site-bookmarker", []);
const t_d_state = useStorage("artplayer_settings", {});
// const swatch_d_state = useStorage("site-watch", {});

if (get_key.value.enabled) {
  const { data, pending } = await useFetch("/api/getData", {
    method: "GET",
    headers: {
      "x-space-collection": get_key.value.deta_collection_key,
    },
  });
  if (!pending.value) {
    console.log('saved!')
    bk_state.value = data.value?.data?.app_bookmark_data;
    t_d_state.value = data.value?.data?.app_player_data;
  }
}
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout :name="/\/pwa\.*/.test(useRoute().path) ? 'webapp' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
