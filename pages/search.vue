<template>
  <div class="mx-xl-16 mx-lg-16 mx-md-8 mx-sm-4 mx-xs-2 pheight">
    <v-card>
      <v-card-title style="font-size: 24px">{{ $t('search') }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          :label="$t('search')"
          single-line
          hide-details
          prepend-inner-icon="mdi-magnify"
          @keyup="searchAnime(query)"
          @input="query"
        ></v-text-field>
      </v-card-text>
      <div class="pa-4">
        <div v-if="searchResults == 0" style="height: 600px">
          <div class="text-center">
            <v-icon color="grey--text" size="100"> mdi-magnify </v-icon>
            <h2>{{ $t('search') }} Anime...</h2>
          </div>
        </div>
        <div v-else class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4">
          <div v-for="item in searchResults" :key="item.id">
            <AnimeCard
              :imagesrc="item.img"
              :title="item.title"
              :path="localePath('/anime/' + item.id)"
            />
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import debounce from 'lodash.debounce'
// import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      searchResults: [],
      query: this.searchAnime,
    }
  },
  head() {
    return {
      title: 'Search Anime',
      link: [
        { rel: 'canonical', href: window.location.href },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Search Anime on amvstrm',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amvstr.ml/search',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Search Anime | amvstrm',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Search Anime on amvstrm',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'seoimg.png',
        },
        // twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://amvstr.ml/search',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Search Anime | amvstrm',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Search Anime on amvstrm',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/seoimg.png',
        },
      ],
    }
  },
  async mounted() {
    await this.searchAnimeUsingQuery()
  },
  methods: {
    searchAnime: debounce(function () {
      this.searchResultsAPI = this.$axios.get(`/api/v1/search?q=${this.search}`)
      this.searchResultsAPI.then((response) => {
        this.searchResults = response.data.search
      })
    }, 500),
    searchAnimeUsingQuery() {
      if (this.$route.query.q !== undefined) {
        this.search = this.$route.query.q
        this.searchAnime(this.search)
      }
    },
    onQueryChange(event) {
      if (event.target.value.trim().length === 0) {
        this.searchResults = null
      }
    },
  },
}
</script>
<style>
.grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
  justify-items: center;
}
</style>
