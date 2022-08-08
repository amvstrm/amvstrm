<!-- eslint-disable vue/attributes-order -->
<template>
  <div class="ma-4">
    <LastPlayVid />
    <div class="my-5">
      <h1>Welcome !!!</h1>
      <p>
        amvstrm Version 1.0.0 is now finished!! 
        <br />
        Check out the changelogs <a href="https://docs.amvstr.ml/" style="color: green;">Here</a>
      </p>
    </div>
    <div class="my-5">
      <h2>{{ $t('recentfr') }}</h2>
      <v-row class="my-2">
        <v-tabs
          v-model="animetab"
          class="my-2"
          grow
          hide-slider
          show-arrows
          color="green"
        >
          <v-tab href="#subanime"> Sub </v-tab>
          <v-tab href="#dubanime"> Dub </v-tab>
          <v-tab href="#cnanime"> Chinese </v-tab>
          <v-tab href="#all"> All </v-tab>
        </v-tabs>
        <div v-if="$fetchState.pending">
          <LoadingFetch />
        </div>
        <div v-else-if="$fetchState.error">
          <h3>Not Available!</h3>
        </div>
        <v-tabs-items v-else v-model="animetab" class="bgtransp" touchless>
          <div>
            <v-tab-item value="subanime">
              <v-col class="media-scrolling">
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
                    />
                  </v-lazy>
                </div>
              </v-col>
            </v-tab-item>
            <v-tab-item value="dubanime">
              <v-col class="media-scrolling">
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
              <v-col class="media-scrolling">
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
              <v-col class="media-scrolling">
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
    </div>
    <div class="my-5">
      <v-row justify="space-between">
        <v-col cols="auto">
          <h2>{{ $t('popularfr') }}</h2>
        </v-col>
        <v-col cols="auto">
          <v-btn dark to="/popular"> More </v-btn>
        </v-col>
      </v-row>
      <div v-if="$fetchState.pending">
        <LoadingFetch />
      </div>
      <v-row v-else>
        <v-col class="media-scrolling">
          <div v-for="data in popular" :key="data.id">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 0.5,
              }"
              transition="fade-transition"
            >
              <AnimeCard
                :id="data.id"
                class="media-container"
                :img="data.img"
                :title="data.title"
              />
            </v-lazy>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="my-5">
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
              <v-toolbar dark color="green darken-2">
                <v-btn icon dark @click="topair_more = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ $t('ongoing') }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div class="grid-ctn margin-size">
                <div v-for="data in topairing" :key="data.id">
                  <div class="grid-item">
                    <AnimeCard
                      :id="data.id"
                      class="media-container"
                      :img="data.img"
                      :title="data.title"
                    />
                  </div>
                </div>
              </div>
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
      <div v-if="$fetchState.pending">
        <LoadingFetch />
      </div>
      <v-row v-else>
        <v-col class="media-scrolling">
          <div v-for="data in topairing" :key="data.id">
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
    </div>
    <div class="my-5">
      <h2>{{ $t('upcoming') }}</h2>
      <div v-if="$fetchState.pending">
        <LoadingFetch />
      </div>
      <div v-else class="media-scrolling">
        <div v-for="data in newseason" :key="data.id">
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            transition="fade-transition"
          >
            <AnimeCard
              :id="data.id"
              class="media-container"
              :img="data.img"
              :title="data.title"
            />
          </v-lazy>
        </div>
      </div>
    </div>
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
      topairing: null,
      popular: null,
      topair_more: false,
      newseason: null,
      airpage: 1,
      airlength: 25,
      cmodel: 0,
      animetab: null,
      isActive: false,
    }
  },
  async fetch() {
    const recent = await this.$axios.$get(`/api/recentrelease/1`)
    const recentdub = await this.$axios.$get(`/api/recentrelease/dub/1`)
    const recentcn = await this.$axios.$get(`/api/recentrelease/cn/1`)
    const recentall = await this.$axios.$get(`/api/recentrelease/all/1`)
    const newseason = await this.$axios.$get(`/api/newseasons/1`)
    const popular = await this.$axios.$get(`/api/popular/1`)
    this.recent = recent.anime
    this.recentdub = recentdub.anime
    this.recentcn = recentcn.anime
    this.recentall = recentall.anime
    this.popular = popular.popular
    this.newseason = newseason.anime
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'anime, amvstreaming, free anime, amvstrm, amvstr, amvstrm.ml, amvstrm anime',
        },
        // og
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amvstr.ml/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home | amvstrm',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
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
          content: 'https://amvstr.ml/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Home | amvstrm',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/seoimg.png',
        },
      ],
    }
  },
  fetchOnServer: false,
  async mounted() {
    await this.onPageChange1()
  },
  methods: {
    getTopOngoing: function () {
      axios
        .get(`${process.env.API_URL}/api/topairing?p=${this.airpage}`)
        .then((res) => {
          this.topairing = res.data.topairing
        })
    },
    onPageChange1() {
      this.getTopOngoing()
    },
  },
}
</script>

<style scoped>
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

.media-container {
  height: 16rem;
  width: 11rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
}

.img-carousel {
  height: 100%;
  width: 10rem;
}

.txtovf {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 340px;
  overflow: hidden;
}

.margin-size {
  margin-right: 15rem;
  margin-left: 15rem;
}

.grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 5px;
  justify-items: center;
}
.grid-item {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .margin-size {
    margin-right: 4rem;
    margin-left: 4rem;
  }
}

@media screen and (max-width: 600px) {
  .media-container {
    width: 9.5rem;
    height: 14rem;
  }
  .txtovf {
    width: 200px;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .grid-item {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .margin-size {
    margin-right: 2rem;
    margin-left: 2rem;
  }
}
@media screen and (max-width: 400px) {
  .media-container {
    width: 8rem;
    height: 12rem;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
  .grid-item {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .margin-size {
    margin-right: 1rem;
    margin-left: 1rem;
  }
}
</style>
