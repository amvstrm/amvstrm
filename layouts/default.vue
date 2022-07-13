<template>
  <v-app>
    <div class="mx-xl-16 mx-lg-16 mx-md-8 mx-sm-4 mx-xs-2">
      <v-navigation-drawer
        v-model="drawer"
        app
        color="accent darken-2"
        temporary
      >
        <v-list-item>
          <v-list-item-content>
            <router-link to="/" style="display: flex">
              amvstrm BETA
            </router-link>
            <v-list-item-subtitle> Free Anime Contents </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-col cols="auto">
          <SearchBar />
        </v-col>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="localePath(item.href)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                $t(`menu.${item.title}`)
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app dark absolute>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-col>
          <router-link :to="localePath('/')">
            <!-- <img src="../static/logo.svg" height="120" width="120" alt="logo" /> -->
            amvstr.ml BETA
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <SearchBar />
        </v-col>
      </v-app-bar>
      <v-main>
        <v-snackbar v-model="showBanner">
          <v-icon slot="icon" color="warning" size="36">
            mdi-information
          </v-icon>
          Website/API is under construction. There will be 404/500 errors occurred. 
          <template #action="{ attrs }">
            <v-btn
              text
              color="primary"
              v-bind="attrs"
              @click="showBanner = false"
            >
              Ok
            </v-btn>
          </template>
        </v-snackbar>
        <Nuxt keep-alive />
      </v-main>
      <v-footer
        app
        dark
        height="auto"
        absolute
        xs
        dense
        style="
          bottom: initial;
          display: flex;
          flex-direction: row;
          align-content: start;
          align-items: center;
          justify-content: space-between;
        "
      >
        <v-col cols="auto">
          <span>{{ $t('copyright') }} {{ year }}</span
          ><br />
          <span style="opacity: 50%; font-size: 0.8em">
            Disclaimer : We do not store data in our database. We get data from
            3rd party sites and other site only. Our Website and Domain is
            Protected by Cloudflare.
          </span>
        </v-col>
        <v-col cols="auto">
          <LangSwitch />
          <v-chip label to="/about"> About </v-chip>
          <v-chip
            v-if="showGoTop"
            elevation="4"
            label
            background-color="primary"
            @click="goTop"
          >
            <v-icon>mdi-chevron-up-circle-outline</v-icon>
          </v-chip>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>
<script>
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { SearchBar },
  data() {
    return {
      drawer: null,
      search: null,
      searchResults: null,
      query: null,
      fab: false,
      showBanner: true,
      showGoTop: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'home',
          href: '/',
        },
        {
          icon: 'mdi-tag',
          title: 'genres',
          href: '/genres',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'popular',
          href: '/popular',
        },
        {
          icon: 'mdi-movie',
          title: 'movies',
          href: '/movies',
        },
        {
          icon: 'mdi-star',
          title: 'bookmark',
          href: '/bookmarks',
        },
        {
          icon: 'mdi-information-outline',
          title: 'about',
          href: '/about',
        },
      ],
      year: new Date().getFullYear(),
    }
  },
  created() {
    this.showBanner = true
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, #191919) !important;
}
</style>
