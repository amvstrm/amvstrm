<template>
  <v-app>
    <!-- <v-dialog v-model="dialoginfo">
      <v-btn slot="activator" color="primary">Dialog</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Page Not Found</span>
        </v-card-title>
        <v-card-text>
          The page you are looking for does not exist or has been removed.
        </v-card-text>
      </v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialoginfo = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-dialog> -->
    <v-navigation-drawer v-model="drawer" app color="accent darken-2" temporary>
      <v-list-item>
        <v-list-item-content>
          <router-link to="/" style="display: flex">
            <img src="../static/logo.svg" width="125" alt="logo" />
          </router-link>
          <v-list-item-subtitle> Anime Streaming Website </v-list-item-subtitle>
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
      <v-spacer></v-spacer>
      <template #append>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="item in items2"
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
      </template>
    </v-navigation-drawer>
    <div class="mx-xl-16 mx-lg-16 mx-md-8 mx-sm-0 mx-xs-0">
      <v-app-bar app dark absolute>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link :to="localePath('/')" style="display: flex">
          <img src="../static/logo.svg" height="100%" alt="logo" />
        </router-link>
        <v-spacer></v-spacer>
        <v-col cols="6" sm="2">
          <SearchBar />
        </v-col>
      </v-app-bar>
      <v-main>
        <v-snackbar v-model="showBanner">
          <v-icon slot="icon" color="warning" size="36">
            mdi-information
          </v-icon>
          This website is still under development, Some functions and features
          may be not working properly. There will be 500 error showing up.
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
          <span style="opacity: 50%"
            >Disclaimer : We do not store video on our database.</span
          >
        </v-col>
        <v-col cols="auto">
          <v-chip to="/about"> About </v-chip>
          <v-chip
            v-if="showGoTop"
            elevation="4"
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
          icon: 'mdi-view-list',
          title: 'animelist',
          href: '/animelist',
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
      ],
      items2: [
        {
          icon: 'mdi-star',
          title: 'bookmark',
          href: '/bookmarks',
        },
        {
          icon: 'mdi-account-circle-outline',
          title: 'account',
          href: '/account',
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
    // check if the scroll is on the top if not show the go top button
    // checkScroll() {
    //   if (window.scrollY > 0) {
    //     this.showGoTop = true
    //   } else {
    //     this.showGoTop = false
    //   }
    // },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, #191919) !important;
}
</style>
