<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary="">
      <v-list>
        <v-list-item>
          <img
            v-if="scode == false || scode == undefined" 
            src="/logo.png"
            style="display: flex; width: 140px; height: 100%"
          >
          <img
            v-else
            src="/logo-secret.png"
            style="display: flex; width: 140px; height: 100%"
          >
        </v-list-item>
        <SearchBar />
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item title="Home" to="/" />
        <v-list-item title="Search Anime" to="/search" />
      </v-list>
      <v-divider />
      <v-list>
        <v-list-subheader>More</v-list-subheader>
        <v-list-item title="About us" to="/about" />
        <v-list-item title="Privacy Policy" to="/privacy" />
        <v-list-item title="Help" href="https://docs.amvstr.ml/help">
          <template #append>
            <v-icon icon="mdi-help" />
          </template>
        </v-list-item>
        <v-list-item title="Github" href="https://github.com/amvstrm/amvstrm">
          <template #append>
            <v-icon icon="mdi-github" />
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar absolute="">
      <v-col>
        <NuxtLink to="/">
          <img
            v-if="scode == false || scode == undefined"
            src="/logo.png"
            style="display: flex; width: 140px; height: 100%"
          >
          <img
            v-else
            src="/logo-secret.png"
            style="display: flex; width: 140px; height: 100%"
          >
        </NuxtLink>
      </v-col>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <slot />
      <AppCookieBanner />
    </v-main>
    <v-footer app height="auto" dense absolute>
      <span>
        amvstrm Cambodia © Copyright {{ new Date().getFullYear() }}. Build with Nuxt 3
      </span>
    </v-footer>
  </v-app>
</template>
<script setup>
import { useStorage } from '@vueuse/core';
const scode = useStorage('gayjmr');

if (new Date().getMonth() !== 5) {
  scode.value = false;
}

if (useRoute().query.code === 'gayjmr') {
  scode.value = true
}
</script>
<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Home",
        href: "/",
      },
      { type: "subheader", title: "Catagory" },
      {
        title: "Trending Anime",
        value: 1,
      },
      {
        title: "Top 100 Anime",
        value: 2,
      },
      {
        title: "Popular Anime",
        value: 3,
      },
      { type: "divider" },
      { type: "subheader", title: "Other" },
      {
        title: "About us",
        value: 4,
      },
    ],
  }),
};
</script>
<style scoped></style>
