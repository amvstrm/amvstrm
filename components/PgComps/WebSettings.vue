<script setup>
import { useStorage } from "@vueuse/core";

const cfg = useStorage("site-settings", {});
const bk_state = useStorage("site-bookmarker", []);
const t_d_state = useStorage("artplayer_settings", {});
const swatch_d_state = useStorage("site-watch", {});

const dataInput = reactive({
  apiUrl: "",
});

const saveSetting = () => {
  if (dataInput.apiUrl) {
    console.log(dataInput.apiUrl);
  }
};
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="headline">Settings</span>
    </v-card-title>
    <v-list lines="three">
      <v-list-item
        title="API URL (SOON)"
        subtitle="Use other API URL instead of the default one, This will help our API server not to be overloaded with the requests."
        disabled=""
      >
        <v-text-field
          v-model="dataInput.apiUrl"
          clearable
          prepend-icon="mdi-link"
          variant="underlined"
        />
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn @click="saveSetting()"> Ok </v-btn>
    </v-card-actions>
  </v-card>
</template>
