<script setup>
import { useStorage } from "@vueuse/core";
const env = useRuntimeConfig();
useSeoMeta({
  ogTitle: "Home",
  ogDescription: "amvstrm - A streaming service for weebo...",
  ogImage: "logo.png",
  ogUrl: "[og:url]",
  twitterTitle: "Home",
  twitterDescription: "amvstrm - A streaming service for weebo...",
  twitterImage: "logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Home",
});

const {
  data: trendingData,
  pending: trpend,
  refresh: trenddataRefresh,
  error: trenderr,
} = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/trending?limit=12`,
  {
    cache: "force-cache",
  }
);
const {
  data: popularData,
  pending: popend,
  refresh: popdataRefresh,
  error: poperr,
} = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/popular?limit=12`,
  {
    cache: "force-cache",
  }
);

const history_state = useStorage("site-watch", {});
</script>

<template>
  <ClientOnly>
    <v-carousel
      class="d-none d-md-block"
      hide-delimiters
      progress="green"
      height="320px"
      :show-arrows="false"
      :cycle="true"
    >
      <v-carousel-item
        v-for="(item, i) in popularData?.results"
        :key="i"
        :src="item.cover"
        cover
      >
        <div class="d-flex flex-column align-center justify-end h-100">
          <v-sheet
            class="mb-1 pa-2 d-flex flex-row justify-space-between align-center"
            rounded
            :height="70"
            :width="420"
          >
            <div>
              <h4
                style="
                  width: 300px;
                  overflow: hidden;
                  transition: color 0.2s ease;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                "
              >
                {{ item.title.userPreferred }}
              </h4>
              <p class="text--secondary">{{ item.title.native }}</p>
            </div>
            <v-btn
              :to="'/anime/' + item.id"
              :color="item.color ? item.color : 'transparent'"
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </v-sheet>
        </div>
      </v-carousel-item>
    </v-carousel>
  </ClientOnly>
  <v-container>
    <SearchBar />
    <ClientOnly>
      <v-alert
        v-if="history_state"
        class="mt-4"
        icon="mdi-history"
        title="Continue Watching : "
        :text="`${history_state.latest_anime_watched.title} Episode ${history_state.latest_anime_watched.curr_ep} ${history_state.latest_anime_watched.isDub ? 'Dub' : 'Sub'}`"
        closable
      >
        <template #default>
          <br />
          <v-btn
            class="my-2"
            :to="`/watch/${history_state.latest_anime_watched.id}-${history_state.latest_anime_watched.ep_id}`"
            prepend-icon="mdi-play"
          >
            Resume?
          </v-btn>
        </template>
      </v-alert>
    </ClientOnly>
  </v-container>
  <!-- DESKTOP DEVICE -->
  <v-container class="d-lg-block d-sm-none d-none" fluid>
    <v-col>
      <h1>Trending Anime</h1>
      <div v-if="trpend" class="loadingBlock">
        <v-progress-circular :size="45" indeterminate />
      </div>
      <div v-else-if="trenderr">
        <v-alert
          dense
          type="error"
          title="Error"
          text="Error loading trending anime!"
        />
        <v-btn @click="trenddataRefresh()">
          Reload?
          <v-icon>mdi-reload</v-icon>
        </v-btn>
      </div>
      <v-container v-else fluid>
        <div class="grid">
          <div
            v-for="(d, i) in trendingData?.results"
            :key="i"
            class="d-flex justify-center"
          >
            <AnimeCard
              :id="d.id"
              :title="d.title.userPreferred"
              :imgsrc="d.image"
              :imgalt="d.id"
              :anime-color="d.color"
              :year="d.releaseDate"
              :type="d.type"
              :total-ep="d.totalEpisodes"
            />
          </div>
        </div>
      </v-container>
    </v-col>
    <v-col>
      <h1>Popular Anime</h1>
      <div v-if="popend" class="loadingBlock">
        <v-progress-circular :size="45" indeterminate />
      </div>
      <div v-else-if="poperr">
        <v-alert
          dense
          type="error"
          title="Error"
          text="Error loading popular anime!"
        />
        <v-btn @click="popdataRefresh()">
          Reload?
          <v-icon>mdi-reload</v-icon>
        </v-btn>
      </div>
      <v-container v-else fluid>
        <div class="grid">
          <div
            v-for="(d, i) in popularData?.results"
            :key="i"
            class="d-flex justify-center"
          >
            <AnimeCard
              :id="d.id"
              :title="d.title.userPreferred"
              :imgsrc="d.image"
              :imgalt="d.id"
              :anime-color="d.color"
              :year="d.releaseDate"
              :type="d.type"
              :total-ep="d.totalEpisodes"
            />
          </div>
        </div>
      </v-container>
    </v-col>
    <!-- <v-col v-if="history_state.all_anime_watched.length === -1">
      <h1>Your watch history</h1>
      <v-container fluid>
         <div class="grid">
          <div
            v-for="(d, i) in popularData?.results"
            :key="i"
            class="d-flex justify-center"
          >
            <AnimeCard
              :id="d.id"
              :title="d.title.userPreferred"
              :imgsrc="d.image"
              :imgalt="d.id"
              :anime-color="d.color"
              :year="d.releaseDate"
              :type="d.type"
              :total-ep="d.totalEpisodes"
            />
          </div>
        </div>
      </v-container>
    </v-col> -->
  </v-container>
  <!-- MOBILE DEVICE -->
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <v-container class="d-lg-none d-sm-block d-xs" fluid>
    <h2>Trending Anime</h2>
    <div v-if="trpend" class="loadingBlock">
      <v-progress-circular :size="45" indeterminate />
    </div>
    <div v-else-if="trenderr">
      <v-alert
        dense
        type="error"
        title="Error"
        text="Error loading trending anime!"
      />
      <v-btn @click="trenddataRefresh()">
        Reload?
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </div>
    <v-row v-else>
      <v-col class="media-scrolling">
        <div v-for="data in trendingData?.results" :key="data.id">
          <AnimeCard
            :id="data.id"
            :title="data.title.userPreferred"
            :imgsrc="data.image"
            :anime-color="data.color"
            :imgalt="data.id"
            :year="data.releaseDate"
            :type="data.type"
            :total-ep="data.totalEpisodes"
          />
        </div>
      </v-col>
    </v-row>
    <h2 class="mt-10">Popular Anime</h2>
    <div v-if="popend" class="loadingBlock">
      <v-progress-circular :size="45" indeterminate />
    </div>
    <div v-else-if="poperr">
      <v-alert
        dense
        type="error"
        title="Error"
        text="Error loading trending anime!"
      />
      <v-btn @click="popdataRefresh()">
        Reload?
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </div>
    <v-row v-else>
      <v-col class="media-scrolling">
        <div v-for="data in popularData?.results" :key="data.id">
          <AnimeCard
            :id="data.id"
            :title="data.title.userPreferred"
            :imgsrc="data.image"
            :imgalt="data.id"
            :anime-color="data.color"
            :year="data.releaseDate"
            :type="data.type"
            :total-ep="data.totalEpisodes"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
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
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}
</style>
