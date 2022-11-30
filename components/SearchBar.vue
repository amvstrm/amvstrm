<template>
  <div>
    <v-menu transition="scale-transition" offset-y offset-x>
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="search"
          color="green darken-2"
          :label="$t('search')"
          single-line
          hide-details
          prepend-inner-icon="mdi-magnify"
          v-bind="attrs"
          @keyup="searchAnime"
          @input="query"
          v-on="on"
        ></v-text-field>
      </template>
      <v-card v-model="search" :dense="true" class="mx-auto overflow-auto mt-2">
        <v-list>
          <v-list-item
            v-for="item in searchResults"
            :key="item.id"
            :to="localePath('/anime/' + item.id)"
          >
            <img
              v-if="item.img"
              class="ma-2"
              :src="item.img"
              :alt="item.id + '_img'"
              style="border-radius: 4px; width: 60px; height: 10%"
            />
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="searchResults.length > 0" :to="localePath('/search?q=' + search)">
            <v-list-item-title>{{$t('search_more')}}...</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import debounce from 'lodash.debounce'
export default {
  data() {
    return {
      search: '',
      searchResults: [],
      query: this.searchAnime,
    }
  },
  methods: {
    searchAnime: debounce(function () {
      this.searchResultsAPI = this.$axios.get(`/api/v1/search?q=${this.search}`)
      this.searchResultsAPI.then((response) => {
        this.searchResults = response.data.search.splice(0, 4)
      })
      if (this.searchResults.length === 0) {
        this.searchResults = [
          {
            id: '404',
            title: this.$t('search_no_results'),
            img: '',
          },
        ]
      } else if (this.searchResults.length > 0) {
        this.nosearchResults = true
      }
    }, 500),
    onQueryChange(event) {
      if (event.target.value.trim().length === 0) {
        this.searchResults = null
      }
    },
  },
}
</script>
