<template>
  <div>
    <v-card class="ma-4" dark>
      <v-img :src="info.cover" height="100px">
        <h4 class="pa-5" style="opacity:60%">
        This Page is experimental
        </h4> 
      </v-img>
      <v-col class="pa-5">
        <v-row class="align-start">
          <v-col cols="auto">
            <img
              :src="info.image"
              :alt="info.id + '_img'"
              style="border-radius: 4px; width: 200px; height: 100%"
            />
          </v-col>
          <v-col class="pa-2" cols="10" md="9" sm="9">
            
            <h1>{{ info.title.english }}</h1>
            <p>{{ info.synopsis }}</p>
            <p class="mt-3">
              {{ $t('info.release') }} : {{ info.releaseDate }}
              <br />
              {{ $t('info.status') }} : {{ info.status }}
              <br />
              {{ $t('info.other_name') }} : {{ info.title.userPreferred }}
              <br />
              {{ $t('info.totalep') }} : {{ info.totalEpisodes }}
              <br />
              {{ $t('info.rating') }} : {{ info.rating / 10 }} / 10
            </p>
            <p>
              {{ $t('info.genres') }} :
              <router-link
                v-for="(item, index) in info.genres"
                :key="index"
                :to="'/genres/' + item"
              >
                {{ item }}
                <span v-if="index < info.genres.length - 1">,</span>
              </router-link>
            </p>
            <!-- <v-btn outlined color="warning" @click="bookmarks">
              <v-icon>mdi-bookmark</v-icon>
              {{ book_txt }}
            </v-btn> -->
            <v-btn outlined color="primary" :href="'https://myanimelist.com/anime/'+info.malId">
              MyAnimeList
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
    <v-card class="ma-4 pa-4" dark>
      <div class="py-2">
        <h2>{{ $t('episode_all') }}</h2>
        <LoadingFetch v-if="$fetchState.pending" />
        <p v-else-if="eplists.length == 0" class="mt-2">
          Episode is not available
        </p>
        <v-list v-else>
          <v-list-item
            v-for="item in eplists"
            :key="item.id"
            :to="'/watch/' + item.id"
          >
            <v-list-item-content>
              <v-list-item-title>
                Episode 
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.number }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const { id } = params
    const infoo = await axios.get(`https://api.amvstr.ml/api/v2/anime/${id}`)
    return{
      info: infoo.data,
    }
  },
  data(){
    return {
      info: null,
      eplists: [],
      book_txt: '',
      book_icon: '',
    }
  },
  async fetch(){
    const ep = await this.$axios.$get(
      `https://consumet-api.herokuapp.com/meta/anilist/info/${this.$route.params.id}`
    )
    this.eplists = ep.episodes
  }

}
</script>
