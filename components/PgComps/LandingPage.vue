<script setup>
import { useStorage } from "@vueuse/core";
const env = useRuntimeConfig();

// const setHistory = ref();

const history_state = useStorage("site-watch", {});
// const get_key = useStorage("cloud-cfg", {});

// if (get_key.value.enabled) {
//   const { data } = await useFetch('/api/getData', {
//     method: 'GET',
//     headers: {
//       'x-space-collection': get_key.value.deta_collection_key
//     },
//   })
//   setHistory.value = data.value.data.app_user_last_data
// } else {
//   setHistory.value = history_state.value
// }

const {
  data: trendingData,
  pending: trpend,
  refresh: trenddataRefresh,
  error: trenderr,
} = useFetch(
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
} = useFetch(
  `${env.public.API_URL}/api/${env.public.version}/popular?limit=12`,
  {
    cache: "force-cache",
  }
);
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
        :src="item.bannerImage"
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
              <p class="text--secondary">
                {{ item.title.native }}
              </p>
            </div>
            <v-btn
              :to="'/anime/' + item.id"
              :color="
                item.coverImage.color ? item.coverImage.color : 'transparent'
              "
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
      <div v-if="history_state?.latest_anime_watched">
        <v-alert
          class="mt-4"
          icon="mdi-history"
          title="Continue Watching : "
          :text="`${history_state?.latest_anime_watched?.title} Episode ${
            history_state?.latest_anime_watched?.curr_ep
          } ${history_state?.latest_anime_watched?.isDub ? 'Dub' : 'Sub'}`"
          closable
        >
          <template #default>
            <br />
            <v-btn
              class="my-2"
              :to="
                /\/pwa\.*/.test(useRoute().path)
                  ? `/pwa/watch/${history_state?.latest_anime_watched?.id}-${history_state?.latest_anime_watched?.ep_id}`
                  : `/watch/${history_state?.latest_anime_watched?.id}-${history_state?.latest_anime_watched?.ep_id}`
              "
              prepend-icon="mdi-play"
            >
              Resume?
            </v-btn>
          </template>
        </v-alert>
      </div>
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
              :imgsrc="d.coverImage.large"
              :imgalt="d.id"
              :anime-color="d.coverImage.color"
              :year="d.seasonYear"
              :type="d.format"
              :total-ep="d.episodes"
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
              :imgsrc="d.coverImage.large"
              :imgalt="d.id"
              :anime-color="d.coverImage.color"
              :year="d.seasonYear"
              :type="d.format"
              :total-ep="d.episodes"
            />
          </div>
        </div>
      </v-container>
    </v-col>
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
        <div v-for="d in trendingData?.results" :key="d.id">
          <AnimeCard
            :id="d.id"
            :title="d.title.userPreferred"
            :imgsrc="d.coverImage.large"
            :imgalt="d.id"
            :anime-color="d.coverImage.color"
            :year="d.seasonYear"
            :type="d.format"
            :total-ep="d.episodes"
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
        <div v-for="d in popularData?.results" :key="d.id">
          <AnimeCard
            :id="d.id"
            :title="d.title.userPreferred"
            :imgsrc="d.coverImage.large"
            :imgalt="d.id"
            :anime-color="d.coverImage.color"
            :year="d.seasonYear"
            :type="d.format"
            :total-ep="d.episodes"
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
