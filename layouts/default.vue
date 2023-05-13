<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary=""
    >
      <v-list>
        <v-list-item>
          <img
            src="/amv_wh.png"
            style="display: flex; width: 140px; height: 100%"
          >
          <!-- <SearchBar /> -->
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item
          title="Home"
          to="/"
        />
      </v-list>
      <v-divider />
      <v-list>
        <v-list-subheader>Catagory</v-list-subheader>
        <v-list-item
          title="Popular Anime"
          to="/popular"
        />
        <v-list-item
          title="Trending Anime"
          to="/trending"
        />
        <v-list-item
          title="Schedule Anime"
          to="/schedule"
        />
      </v-list>
      <v-divider />
      <v-list>
        <v-list-subheader>More</v-list-subheader>
        <v-list-item
          title="About us"
          to="/about"
        />
        <v-list-item
          title="Privacy Policy"
          to="/privacy"
        />
        <v-list-item
          title="Help"
          href="https://docs.amvstr.ml/help"
        >
          <template #append>
            <v-icon icon="mdi-help" />
          </template>
        </v-list-item>
        <v-list-item
          title="Github"
          href="https://github.com/amvstrm/amvstrm"
        >
          <template #append>
            <v-icon icon="mdi-github" />
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-col>
        <NuxtLink to="/">
          <img
            src="/amv_wh.png"
            style="display: flex; width: 140px; height: 100%"
          >
        </NuxtLink>
      </v-col>
      <!-- <v-spacer></v-spacer>
      <v-col class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
        <SearchBar />
      </v-col> -->
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
    <v-footer
      app
      height="auto"
      dense
      absolute
    >
      <span>amvstrm Cambodia © Copyright {{ new Date().getFullYear() }}. Build with
        Nuxt 3</span>
      <!-- <p>/</p>
      <span style="opacity: 50%; font-size: 0.8em">
        Disclaimer : We do not store data in our database. We get data from 3rd
        party sites and other site only. Our Website and Domain are protected by
        Cloudflare.
      </span> -->
    </v-footer>
  </v-app>
</template>
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
