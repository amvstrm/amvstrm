<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <v-alert
      closable
      title="Warning"
      text="amvstrm is still in a early stage of development 
      because we are migrating to Nuxtjs 3, updating the UI and more.
      There will be issue along the way."
      type="warning"
      variant="tonal"
    ></v-alert>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Redundant unused code to test treeshaking */
@import url("https://rsms.me/inter/inter.css");

body {
  font-family: "Inter";
}

a {
  color: rgb(230, 230, 230);
  list-style: none;
  text-decoration: none;
}

.unused-selector-app {
  color: orange;
}
</style>
