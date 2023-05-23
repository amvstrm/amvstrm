<script setup>
import { useStorage } from "@vueuse/core";
const showAlert = ref(false);
const alert = {
  title: "",
  text: "",
  type: ""
}
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
      v-if="showAlert"
      closable
      :title="title"
      :text="text"
      :type="type"
      variant="tonal"
      @click:close="dontshowAlert"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
