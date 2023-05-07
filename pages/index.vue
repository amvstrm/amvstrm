<script setup>
import { useDisplay } from "vuetify";
const env = useRuntimeConfig();
useHead({
  title: 'Home'
})
const { data: trending, pending: trpd } = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/trending?limit=12`
);
const { data: popular, pending: plrpd } = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/popular?limit=12`
);
const { mobile } = useDisplay();


</script>

<template>
  <v-carousel
    hide-delimiters
    progress="green"
    :height="mobile ? '150px' : '320px'"
    :showArrows="mobile ? false : true"
    cycle=""
  >
    <v-carousel-item
      v-if="popular"
      v-for="(item, i) in popular.results.results"
      :key="i"
      :src="item.cover"
      cover
    ></v-carousel-item>
  </v-carousel>
  <v-container class="d-lg-block d-sm-none d-none" fluid>
    <v-col>
      <h1>Trending Anime</h1>
      <div class="loadingBlock" v-if="trpd">
        <v-progress-circular :size="45" indeterminate></v-progress-circular>
      </div>
      <v-container v-else fluid>
        <div class="grid">
          <div
            class="d-flex justify-center"
            v-for="(d, i) in trending.results.results"
            :key="i"
          >
            <AnimeCard
              :id="d.id"
              :title="d.title.userPreferred"
              :imgsrc="d.image"
              :imgalt="d.id"
              :animeColor="d.color"
            />
          </div>
        </div>
      </v-container>
    </v-col>
    <v-col>
      <h1>Popular Anime</h1>
      <div class="loadingBlock" v-if="plrpd">
        <v-progress-circular :size="45" indeterminate></v-progress-circular>
      </div>
      <v-container v-else fluid>
        <div class="grid">
          <div
            class="d-flex justify-center"
            v-for="(d, i) in popular.results.results"
            :key="i"
          >
            <AnimeCard
              :id="d.id"
              :title="d.title.userPreferred"
              :imgsrc="d.image"
              :imgalt="d.id"
              :animeColor="d.color"
            />
          </div>
        </div>
      </v-container>
    </v-col>
  </v-container>
  <!-- MOBILE DEVICE -->
  <v-container class="d-lg-none d-sm-block d-xs" fluid>
    <h2>Trending Anime</h2>
    <div class="loadingBlock" v-if="trpd">
      <v-progress-circular :size="45" indeterminate></v-progress-circular>
    </div>
    <v-row v-else>
      <v-col class="media-scrolling">
        <div v-for="data in trending.results.results" :key="data.id">
          <AnimeCard
            :id="data.id"
            :title="data.title.userPreferred"
            :imgsrc="data.image"
            :imgalt="data.id"
            :animeColor="data.color"
          />
        </div>
      </v-col>
    </v-row>
    <h2 class="mt-10">Popular Anime</h2>
    <div class="loadingBlock" v-if="plrpd">
      <v-progress-circular :size="45" indeterminate></v-progress-circular>
    </div>
    <v-row v-else>
      <v-col class="media-scrolling">
        <div v-for="data in popular.results.results" :key="data.id">
          <AnimeCard
            :id="data.id"
            :title="data.title.userPreferred"
            :imgsrc="data.image"
            :imgalt="data.id"
            :animeColor="data.color"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.loadingBlock {
  height: 200px;
  display: grid;
  place-items: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.media-scrolling {
  --_spacer: 0.6rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

.media-scrolling > * {
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
</style>
