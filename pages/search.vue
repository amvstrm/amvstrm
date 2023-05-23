<script setup>
useHead({
  title: "Search Anime",
});

import debounce from "lodash.debounce";
import axios from "axios";

const env = useRuntimeConfig();
const searchResults = ref();
const search = ref("");
const searchLoading = ref(true);

const debouncedSearch = debounce(async (query) => {
  const { data } = await axios.get(
    `${env.public.API_URL}/api/${env.public.version}/search?q=${query}&limit=18`
  );
  searchResults.value = data;
  setTimeout(() => {
    searchLoading.value = false;
  }, 200);
}, 500);

const query = useRoute().query

if (query.q) {
  search.value = query?.q;
  debouncedSearch(search.value)
}
</script>
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <v-container>
    <h1>Search Anime</h1>
    <v-text-field
      v-model="search"
      variant="solo"
      color="green"
      label="Search Anime"
      flat
      clearable
      single-line
      hide-details
      prepend-inner-icon="mdi-magnify"
      @update:model-value="debouncedSearch(search)"
    />
    <v-card class="mt-4">
      <v-card-text v-if="searchResults?.data ? false : true">
        <div class="loadingBlock" style="height:40vh;">
          <div class="d-flex flex-column align-center">
            <v-icon size="5rem">mdi-magnify</v-icon>
            <h2>Search Anime</h2>
          </div>
        </div>
      </v-card-text>
      <v-list v-if="searchResults?.data.length > 0" lines="two">
        <v-list-item title="Search result" />
        <v-divider />
        <div v-if="searchLoading" class="loadingBlock">
          <v-progress-circular :size="45" indeterminate />
        </div>
        <v-list-item
          v-for="item in searchResults.data"
          v-else
          :key="item.id"
          :to="'/anime/' + item.id"
        >
          <template #prepend>
            <img
              v-if="item.coverImage.medium"
              class="ma-2"
              :src="item.coverImage.medium"
              :alt="item.id + '_img'"
              style="border-radius: 4px; width: 60px; height: 10%"
            />
          </template>
          <v-list-item-title>{{ item.title.userPreferred }}</v-list-item-title>
          <v-list-item-subtitle>
            Episode {{ item.episodes }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>{{ item.status }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<style>
.loadingBlock {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
