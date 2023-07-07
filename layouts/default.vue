<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary="">
      <v-list>
        <v-list-item>
          <img
            src="/logo.png"
            style="display: flex; width: 140px; height: 100%"
          />
        </v-list-item>
        <ClientOnly>
          <SearchBar />
        </ClientOnly>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item title="Home" to="/" append-icon="mdi-home" />
        <v-list-item title="Search Anime" to="/search" append-icon="mdi-magnify" />
        <v-list-item title="Bookmarker" to="/bookmarks" append-icon="mdi-bookmark-box-multiple" />
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
            src="/logo.png"
            style="display: flex; width: 140px; height: 100%"
          />
        </NuxtLink>
      </v-col>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <slot />
      <ClientOnly>
        <AppCookieBanner />
      </ClientOnly>
    </v-main>
    <v-footer app height="auto" dense absolute>
      <span>
        amvstrm Cambodia © Copyright {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>
<style scoped></style>
