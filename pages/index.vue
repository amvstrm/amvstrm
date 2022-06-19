<!-- eslint-disable vue/attributes-order -->
<template>
  <div>
    <v-app dark>
      <div class="ma-4">
        <v-col>
          <h2 class="my-4">{{ $t('welcome') }}</h2>
          <v-carousel
            v-model="cmodel"
            cycle
            hide-delimiters
            show-arrows-on-hover
            :progress="true"
            height="100%"
            progress-color="white"
          >
            <v-carousel-item v-for="data in recentall" :key="data.id">
              <router-link :to="localePath('/watch/' + data.episode_id)">
                <v-row
                  class="align-center justify-center bg-drop"
                  :style="{
                    backgroundImage: `url(${data.img})`,
                  }"
                >
                  <v-col cols="auto" class="ma-5" height="100%">
                    <img
                      class="img-carousel"
                      :src="data.img"
                      alt="img_carousel"
                      style="border-radius: 4px"
                    />
                  </v-col>
                  <v-col class="ma-4">
                    <h3 class="txtovf" style="text-shadow: 1px 1px 2px black">
                      {{ data.title }}
                    </h3>
                    <p style="text-shadow: 1px 1px 2px black">
                      {{ data.subOrDub }}
                    </p>
                    <p style="text-shadow: 1px 1px 2px black">
                      Episode {{ data.episode }}
                    </p>
                    <v-btn class="mb-5" dark color="success darken-3">
                      {{ $t('watchnow') }}
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </router-link>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col>
          <h2>{{ $t('recentfr') }}</h2>
          <v-row class="my-2">
            <v-tabs
              v-model="animetab"
              class="my-2"
              show-arrows
              grow
              color="primary"
            >
              <v-tab href="#subanime"> Sub </v-tab>
              <v-tab href="#dubanime"> Dub </v-tab>
              <v-tab href="#cnanime"> Chinese </v-tab>
              <v-tab href="#all"> All </v-tab>
            </v-tabs>
            <v-tabs-items v-model="animetab" class="bgtransp">
              <LoadingFetch v-if="$fetchState.pending" />
              <div v-else-if="$fetchState.error">
                <p>Data is not available</p>
              </div>
              <div v-else>
                <v-tab-item value="subanime">
                  <v-col class="media-scrolling snaps-inline">
                    <div v-for="data in recent" :key="data.id">
                      <v-lazy
                        v-model="isActive"
                        :options="{
                          threshold: 0.5,
                        }"
                        transition="fade-transition"
                      >
                        <PlayCard
                          class="media-container"
                          :img="data.img"
                          :title="data.title"
                          :episode="data.episode"
                          :episodeid="data.episode_id"
                          :subordub="data.subOrDub"
                      /></v-lazy>
                    </div>
                  </v-col>
                </v-tab-item>
                <v-tab-item value="dubanime">
                  <v-col class="media-scrolling snaps-inline">
                    <div v-for="data in recentdub" :key="data.id">
                      <v-lazy
                        v-model="isActive"
                        :options="{
                          threshold: 0.5,
                        }"
                        transition="fade-transition"
                      >
                        <PlayCard
                          class="media-container"
                          :img="data.img"
                          :title="data.title"
                          :episode="data.episode"
                          :episodeid="data.episode_id"
                          :subordub="data.subOrDub"
                      /></v-lazy>
                    </div>
                  </v-col>
                </v-tab-item>
                <v-tab-item value="cnanime">
                  <v-col class="media-scrolling snaps-inline">
                    <div v-for="data in recentcn" :key="data.id">
                      <v-lazy
                        v-model="isActive"
                        :options="{
                          threshold: 0.5,
                        }"
                        transition="fade-transition"
                      >
                        <PlayCard
                          class="media-container"
                          :img="data.img"
                          :title="data.title"
                          :episode="data.episode"
                          :episodeid="data.episode_id"
                          :subordub="data.subOrDub"
                        />
                      </v-lazy>
                    </div>
                  </v-col>
                </v-tab-item>
                <v-tab-item value="all">
                  <v-col class="media-scrolling snaps-inline">
                    <div v-for="data in recentall" :key="data.id">
                      <v-lazy
                        v-model="isActive"
                        :options="{
                          threshold: 0.5,
                        }"
                        transition="fade-transition"
                      >
                        <PlayCard
                          class="media-container"
                          :img="data.img"
                          :title="data.title"
                          :episode="data.episode"
                          :episodeid="data.episode_id"
                          :subordub="data.subOrDub"
                        />
                      </v-lazy></div
                  ></v-col>
                </v-tab-item>
              </div>
            </v-tabs-items>
          </v-row>
        </v-col>
        <v-col class="ctndta">
          <v-row justify="space-between">
            <v-col cols="auto">
              <h2>{{ $t('popularfr') }}</h2>
            </v-col>
            <v-col cols="auto">
              <v-btn dark to="/popular"> More </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-if="$fetchState.pending">
              <LoadingFetch />
            </v-col>
            <v-col v-else class="media-scrolling snaps-inline">
              <div v-for="data in popular" :key="data.id">
                <AnimeCard
                  :id="data.id"
                  class="media-container"
                  :img="data.img"
                  :title="data.title"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="ctndta my-2">
          <v-row justify="space-between">
            <v-col cols="auto">
              <h2>{{ $t('ongoing') }}</h2>
            </v-col>
            <v-col cols="auto">
              <v-dialog
                v-model="topair_more"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template #activator="{ on, attrs }">
                  <v-btn dark v-bind="attrs" v-on="on"> More </v-btn>
                </template>
                <v-card style="overflow-x: hidden; overflow-y: hidden">
                  <v-toolbar dark color="primary">
                    <v-btn icon dark @click="topair_more = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Ongoing Anime</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark text @click="topair_more = false">
                        Close
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-row flex class="ma-5" justify="center">
                    <v-col v-for="data in ongoing" :key="data.id" cols="auto">
                      <div>
                        <AnimeCard
                          :id="data.id"
                          class="media-container"
                          :img="data.img"
                          :title="data.title"
                          :episode="data.latestep"
                        />
                      </div>
                    </v-col>
                  </v-row>
                  <div class="text-center">
                    <v-row justify="center">
                      <v-col cols="10">
                        <v-container>
                          <p>Page: {{ airpage }}</p>
                          <v-pagination
                            v-model="airpage"
                            class="my-4"
                            :length="airlength"
                            :total-visible="10"
                            @input="onPageChange1"
                          ></v-pagination>
                        </v-container>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-if="$fetchState.pending">
              <LoadingFetch />
            </v-col>
            <v-col v-else class="media-scrolling snaps-inline">
              <div v-for="data in ongoing" :key="data.id">
                <AnimeCard
                  :id="data.id"
                  class="media-container"
                  :img="data.img"
                  :title="data.title"
                  :episode="data.latestep"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </v-app>
  </div>
</template>
<script>
import axios from 'axios'
import PlayCard from '~/components/PlayCard.vue'

export default {
  components: { PlayCard },
  data() {
    return {
      recent: null,
      recentdub: null,
      recentcn: null,
      recentall: null,
      ongoing: null,
      popular: null,
      topair_more: false,
      airpage: 1,
      airlength: 25,
      cmodel: 0,
      animetab: null,
      isActive: false,
    }
  },
  async fetch() {
    const recent = await this.$axios.$get(
      `https://api.amvstr.ml/api/recentrelease/1`
    )
    const recentdub = await this.$axios.$get(
      `https://api.amvstr.ml/api/recentrelease/dub/1`
    )
    const recentcn = await this.$axios.$get(
      `https://api.amvstr.ml/api/recentrelease/cn/1`
    )
    const recentall = await this.$axios.$get(
      `https://api.amvstr.ml/api/recentrelease/all/1`
    )
    const popular = await this.$axios.$get(
      `https://api.amvstr.ml/api/popular/1`
    )
    this.recent = recent.anime
    this.recentdub = recentdub.anime
    this.recentcn = recentcn.anime
    this.recentall = recentall.anime
    this.popular = popular.popular
  },
  async mounted() {
    await this.onPageChange1()
  },
  // async asyncData() {
  //   const recentrelease = await axios.get(
  //     "https://gogoanime-zeta.vercel.app/api/recentrelease/1"
  //   );
  //   // const ongoingto = await axios.get(
  //   //   "https://gogoanime-zeta.vercel.app/api/ongoing"
  //   // );
  //   // const popularanime = await axios.get(
  //   //   "https://gogoanime-zeta.vercel.app/api/popular/1"
  //   // );
  //   return {
  //     recent: recentrelease.data.anime,
  //     // ongoing: ongoingto.data.anime,
  //     // popular: popularanime.data.popular,
  //   };
  // },
  methods: {
    getTopOngoing: function () {
      axios
        .get(`https://api.amvstr.ml/api/topairing?p=${this.airpage}`)
        .then((res) => {
          this.ongoing = res.data.topairing
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
    onPageChange1() {
      this.getTopOngoing()
    },
  },
  fetchOnServer: false,
}
</script>

<style scoped>
.bgtransp {
  background-color: transparent;
}
.ctndta {
  height: 26rem;
}
.bg-drop {
  background-size: cover;
  background-position: center;
  box-shadow: 0px -120px 5rem 90px rgba(0, 0, 0, 0.75) inset;
  backdrop-filter: blur(10px);
}
.media-scrolling {
  --_spacer: 1rem;
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: column;
  padding: var(--_spacer) var(--_spacer) var(--_spacer);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

.snaps-inline > * {
  scroll-snap-align: start;
}

.media-container {
  height: 18rem;
  width: 12.2rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
}

.img-carousel {
  height: 100%;
  width: 20rem;
}
.txtovf {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 340px;
  overflow: hidden;
}

@media screen and (max-width: 450px) {
  .media-container {
    width: 9rem;
    height: 13rem;
  }
  .txtovf {
    width: 120px;
  }
}
@media screen and (max-width: 600px) {
  .media-container {
    width: 10rem;
    height: 15rem;
  }
  .txtovf {
    width: 200px;
  }
  .img-carousel {
    width: 10rem;
  }
}

@media screen and (max-width: 900px) {
  .img-carousel {
    width: 10rem;
  }
}

.v-application a {
  text-decoration: none;
  color: white;
}
</style>
