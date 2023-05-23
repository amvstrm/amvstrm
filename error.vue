<template>
  <div class="app-error-page">
    <v-card>
      <v-card-title>Error</v-card-title>
      <v-card-text>{{ error.message }}</v-card-text>
      <v-card-actions>
        <v-btn href="/" prepend-icon="mdi-home"> 
          Go home 
        </v-btn>
        <v-btn
          href="https://github.com/amvstrm/amvstrm/issues/new"
          target="blank"
          color="primary"
          prepend-icon="mdi-pencil"
        >
          Report Issue
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
useHead({
  title: "Error",
});
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object,
});
</script>
<style>
.app-error-page {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
