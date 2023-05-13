<script setup>
import { useStorage } from "@vueuse/core";
const showAlert = ref(false);
const { data: alert } = useLazyFetch("/api/dataalert");
const d = useStorage("dataalert", {
  showalert: false,
});

onMounted(() => {
  if (d.value.showalert === true) {
    showAlert.value = false;
  }
});

const dontshowAlert = () => {
  d.value.showalert = true;
};
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <v-alert
      v-cloak
      v-if="showAlert"
      closable
      :title="alert.alerts.title"
      :text="alert.alerts.text"
      :type="alert.alerts.alertType"
      variant="tonal"
      @click:close="dontshowAlert"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
[v-cloak] {
  display: none;
}
</style>
