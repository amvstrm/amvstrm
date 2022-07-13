<template>
  <div>
    <!-- <v-btn class="d-flex d-sm-none d-md-none d-lg-none d-xl-none" @click="smdevice = true">
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->
    <v-menu
      :offset-y="true"
      :offset-x="true"
      :offset-overflow="offsetovf"
      :bottom="btm"
      :left="lft"
      :right="rgt"
      :top="top"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="search"
          :label="$t('search')"
          single-line
          hide-details
          prepend-inner-icon="mdi-magnify"
          v-bind="attrs"
          @keyup="searchAnime(query)"
          @input="query"
          v-on="on"
        ></v-text-field>
      </template>
      <v-list
        v-model="search"
        :dense="true"
        class="mx-auto overflow-auto"
      >
        <v-list-item
          v-for="item in searchResults"
          :key="item.id"
          :to="localePath('/anime/' + item.id)"
        >
          <v-list-item-avatar>
            <v-img
              v-if="item.img"
              :src="item.img"
              aspect-ratio="1"
              contain
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- <v-card
        v-model="search"
        :dense="true"
        class="mx-auto overflow-auto"
      >
        <p>Search Anime...</p>
        
      </v-card> -->
    </v-menu>
  </div>
</template>
<script>
import debounce from 'lodash.debounce'
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      searchResults: [],
      query: this.searchAnime,
      smdevice: false,
      showtext: true,
      offsetovf: false,
      btm: false,
      lft: false,
      rgt: false,
      top: false,
    }
  },
  // mounted(){
  //   // if device is small then show search bar
  //   if(window.innerWidth < 768){
  //     this.smdevice = true;
  //     this.showtext = false;
  //   }
  //   if(window.innerWidth > 768){
  //     this.smdevice = false;
  //     this.showtext = true;
  //   }
  // },
  methods: {
    searchAnime: debounce(function (query) {
      axios
        .get(`https://api-server-2.amvstr.ml/api/search?q=${this.search}`)
        .then((response) => {
          this.searchResults = response.data.search
          // if searchResults is empty, then show 404 title
          if (this.searchResults.length === 0) {
            this.searchResults = [
              {
                id: '404',
                title: '404 Not Found',
                img: '',
              },
            ]
          }
        })
    }, 500),
    onQueryChange(event) {
      if (event.target.value.trim().length === 0) {
        this.searchResults = null
      }
    },
  },
}
</script>
