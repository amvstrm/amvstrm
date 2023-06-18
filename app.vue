<script setup>
import { useStorage } from "@vueuse/core";
const showAlert = ref(false);
const alert = {
  title: "",
  text: "",
  type: "",
};
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

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <div
    :style="{
      height: '100vh',
      'overflow-y': loading ? 'hidden' : 'inherit',
    }"
  >
    <NuxtLoadingIndicator />
    <div
      v-if="loading"
      style="height: 100vh; display: grid; place-items: center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
          margin: auto;
          background: none;
          display: block;
          shape-rendering: auto;
        "
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#ff312d"
          stroke-width="9"
          r="32"
          stroke-dasharray="150.79644737231007 52.26548245743669"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
    <NuxtLayout :name="/\/pwa\.*/.test(useRoute().path) ? 'webapp' : 'default'">
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
  </div>
</template>
