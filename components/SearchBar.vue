<script setup>


</script>

<template>
  <!-- <v-menu transition="scale-transition" offset-y offset-x>
    <template v-slot:activator="{ props }">
      <v-text-field
        v-model="search"
        variant="solo"
        color="green darken-2"
        label="Search"
        single-line
        hide-details
        @keydown.enter="onQueryChange"
        prepend-inner-icon="mdi-magnify"
        v-bind="props"
      ></v-text-field>
    </template>
    <v-card v-if="search" :dense="true" class="mx-auto overflow-auto mt-2">
      <v-list>
        <v-list-item
          v-for="item in searchResults.data"
          :key="item.id"
          :to="'/anime/' + item.id"
        >
          <template v-slot:prepend>
            <img
              v-if="item.coverImage.medium"
              class="ma-2"
              :src="item.coverImage.medium"
              :alt="item.id + '_img'"
              style="border-radius: 4px; width: 60px; height: 10%"
            />
          </template>
          <v-list-item-title>{{ item.title.userPreferred }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-if="searchResults.length > 0"
          :to="'/search?q=' + search"
        >
          <v-list-item-title>Search more...</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu> -->
  <v-autocomplete
    v-model:search-input="search"
    :items="searchResults"
    @update:search="onInput"
  />
</template>
<script>
import debounce from "lodash.debounce";
export default {
  data() {
    return {
      search: "",
      searchResults: [],
      query: this.searchAnime,
    };
  },
  methods: {
    searchAnime: debounce(async function () {
      const env = useRuntimeConfig();
      const { data: searchResultsA } = await useFetch(
        `${env.public.API_URL}/api/${env.public.version}/search?q=${this.search}&limit=5`
      );
      // if (this.searchResults.length === 0) {
      //   this.query = 'Not found'
      // } else if (this.searchResults.length > 0) {
      //   this.nosearchResults = true
      // }
      this.searchResults = searchResultsA;
    }, 500),
    onQueryChange(event) {
      if (event.target.value.trim().length === 0) {
        this.searchResults = null;
      }
    },
  },
};
</script>
