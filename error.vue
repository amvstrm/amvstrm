<template>
  <Html>
    <Head>
      <Title>
        {{ error.statusCode || 500 }}
      </Title>
    </Head>
  </Html>
  <div class="app-error-page">
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="ma-2 pa-4 text-center mx-auto"
    >
      <v-icon class="mb-5" color="error" icon="mdi-exclamation" size="112" />
      <h2 class="mb-6">
        Error
      </h2>
      <p class="mb-4">
        {{ error.statusCode === 404 ? 'Page not found!' : 'Internal server error!' }}
      </p>
      <v-divider class="mb-4" />
      <div class="text-end">
        <v-btn class="mr-1" :href="/\/pwa\.*/.test(useRoute().path) ? '/pwa' : '/'" prepend-icon="mdi-home"> Go home </v-btn>
        <v-btn
          v-if="error.statusCode !== 404"
          href="https://github.com/amvstrm/amvstrm/issues/new"
          target="blank"
          color="primary"
          prepend-icon="mdi-pencil"
        >
          Report Issue
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>
<script setup>
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object,
});
console.log(error)
</script>
<style>
.app-error-page {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
