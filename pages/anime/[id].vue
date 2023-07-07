<script setup>
import { useStorage } from "@vueuse/core";

const env = useRuntimeConfig();
const episode_dialog = ref(false);
const infotab = ref(null);

const { data: anime, pending: aniPending } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/info/${
    useRoute().params.id
  }`,
  {
    cache: "force-cache",
  }
);

useSeoMeta({
  ogTitle: anime.value?.title.userPreferred,
  ogDescription: anime.value?.description,
  ogImage: anime.value?.coverImage.large,
  ogUrl: useRoute().fullPath,
  twitterTitle: `${anime.value?.title.userPreferred} - amvstrm`,
  twitterDescription: anime.value?.description,
  twitterImage: anime.value?.coverImage.large,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: anime.value?.title.userPreferred,
});

const nextAirData = {
  airingAt: anime?.value.nextair?.airingAt,
  timeUntilAiring: anime?.value.nextair?.timeUntilAiring,
};
const nextAirDate = ref(null);
const next_air_day = ref(0);
const next_air_hours = ref(0);
const next_air_minutes = ref(0);
const next_air_seconds = ref(0);
let countdownInterval;

onMounted(() => {
  nextAirDate.value =
    nextAirData.airingAt * 1000 + nextAirData.timeUntilAiring * 1000;
  countdownInterval = setInterval(() => {
    if (nextAirDate.value) {
      const currentTime = Date.now();
      const remainingTime = Math.max(0, nextAirDate.value - currentTime);
      if (remainingTime === 0) clearInterval(countdownInterval);
      next_air_day.value = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
      next_air_hours.value = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
      next_air_minutes.value = Math.floor((remainingTime / 1000 / 60) % 60);
      next_air_seconds.value = Math.floor((remainingTime / 1000) % 60);
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval);
});

const { data: recmedAnime, pending: recmedPending } = useFetch(
  `${env.public.API_URL}/api/${env.public.version}/recommendations/${
    useRoute().params.id
  }`,
  {
    cache: "force-cache",
  }
);

const { data: epAni, pending: loadAni } = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${anime?.value.id_provider.idGogo}`,
  {
    cache: "default",
  }
);
const { data: epAniDub, error: epAniError } = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${anime?.value.id_provider.idGogo}-dub`,
  {
    cache: "default",
  }
);
</script>

<template>
  <div v-if="aniPending" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <div v-else>
    <v-card>
      <v-img
        v-if="anime?.bannerImage !== null"
        :src="anime?.bannerImage"
        max-height="400px"
        cover=""
      >
        <template #placeholder>
          <v-sheet :color="anime?.coverImage.color" height="300px"></v-sheet>
        </template>
      </v-img>
      <v-sheet v-else :color="anime?.coverImage.color" height="300px" />
      <v-container>
        <div class="card-container">
          <div class="image-area">
            <img
              class="image-poster"
              :src="anime?.coverImage.large"
              :alt="anime?.title.userPreferred"
            />
            <div class="d-none d-lg-flex flex-column">
              <BookmarkButton
                :id="anime?.id"
                :title="anime?.title.userPreferred" 
                :imgsrc="anime?.coverImage.large"
                :imgalt="anime?.id"
                :anime-color="anime?.coverImage.color"
                :year="anime?.year"
                :type="anime?.format"
                :total-ep="anime?.episodes ? anime?.episodes : 0"
              />
            </div>
          </div>
          <div class="card-content">
            <div class="mt-2">
              <v-chip
                class="mr-1"
                label
                variant="elevated"
                :color="anime?.dub == true ? 'success' : 'warning'"
              >
                {{ anime?.dub == true ? "Dub" : "No Dub" }}
              </v-chip>
              <v-chip
                class="mx-1"
                label
                variant="elevated"
                :color="
                  anime?.status === 'FINISHED'
                    ? 'success'
                    : anime?.status === 'RELEASING'
                    ? 'warning'
                    : anime?.status === 'NOT_YET_RELEASED'
                    ? 'info'
                    : anime?.status === 'CANCELLED'
                    ? 'danger'
                    : 'No data'
                "
              >
                {{
                  anime?.status === "FINISHED"
                    ? "Finished"
                    : anime?.status === "RELEASING"
                    ? "Currently Releasing"
                    : anime?.status === "NOT_YET_RELEASED"
                    ? "Not Released"
                    : anime?.status === "CANCELLED"
                    ? "Cancelled"
                    : "No data"
                }}
              </v-chip>
            </div>
            <h1 class="mt-4" style="line-height: 2rem; font-size: x-large">
              {{ anime?.title.userPreferred }}
            </h1>
            <p class="mb-5">{{ anime?.title.native }}</p>
            <div class="d-flex d-lg-none flex-column">
              <BookmarkButton
                :id="anime?.id"
                :title="anime?.title.userPreferred" 
                :imgsrc="anime?.coverImage.large"
                :imgalt="anime?.id"
                :anime-color="anime?.coverImage.color"
                :year="anime?.year"
                :type="anime?.format"
                :total-ep="anime?.episodes ? anime?.episodes : 0"
              />
            </div>
            <v-btn
              class="my-2"
              color="red"
              prepend-icon="mdi-play"
              @click="episode_dialog = !episode_dialog"
            >
              Watch Now
            </v-btn>
            <ClientOnly>
              <v-dialog
                v-model="episode_dialog"
                scrim="#202020"
                max-width="500px"
                scrollable
              >
                <v-card>
                  <v-card-title>Episode</v-card-title>
                  <v-card-text v-if="loadAni">
                    <v-progress-circular :size="40" indeterminate />
                  </v-card-text>
                  <v-card-text v-else-if="epAni.episodes.length === 0">
                    Episodes not found or not available...
                  </v-card-text>
                  <v-expansion-panels v-else variant="accordian">
                    <v-expansion-panel title="SUB">
                      <template #text>
                        <v-list lines="two">
                          <v-list-item
                            v-for="(ep, i) in epAni.episodes"
                            :key="i"
                            :to="'/watch/' + useRoute().params.id + '-' + ep.id"
                            title="Episode"
                            :subtitle="ep.id.split('-episode-')[1]"
                          />
                        </v-list>
                      </template>
                    </v-expansion-panel>
                    <v-expansion-panel
                      title="DUB"
                      :disabled="anime?.dub === false ? true : false"
                    >
                      <template #text>
                        <v-list v-if="!epAniError" lines="two">
                          <v-list-item
                            v-for="(ep, i) in epAniDub.episodes"
                            :key="i"
                            :to="'/watch/' + useRoute().params.id + '-' + ep.id"
                            title="Episode"
                            :subtitle="ep.id.split('-episode-')[1]"
                          />
                        </v-list>
                        <v-list v-else lines="two">
                          <!-- LOCKED -->
                        </v-list>
                      </template>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  <v-card-actions>
                    <v-btn
                      prepend-icon="mdi-close"
                      @click="episode_dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </ClientOnly>
          </div>
        </div>
      </v-container>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3" md="4" sm="12">
          <v-card class="mb-2">
            <v-list lines="two">
              <v-list-subheader> Next airing episode date </v-list-subheader>
              <v-list-item
                v-if="anime?.nextair"
                title="New episode in"
                :subtitle="
                  next_air_day +
                  ' days, ' +
                  next_air_hours +
                  ' hours, ' +
                  next_air_minutes +
                  ' minutes, ' +
                  next_air_seconds +
                  ' seconds'
                "
              />
              <v-list-item
                v-else
                title="Next release at"
                :subtitle="
                  anime?.status === 'FINISHED'
                    ? 'Finished'
                    : anime?.status === 'NOT_YET_RELEASED'
                    ? 'No EST'
                    : anime?.status === 'CANCELLED'
                    ? 'Cancelled'
                    : 'No data'
                "
              />
            </v-list>
          </v-card>
          <v-card>
            <v-list lines="two">
              <v-list-subheader> Info </v-list-subheader>
              <v-list-item
                title="Episode"
                :subtitle="anime?.episodes ? anime?.episodes : 'No data'"
              />
              <v-list-item
                title="Genres"
                :subtitle="anime?.genres.join(', ')"
              />
              <v-list-item
                title="Score"
                :subtitle="
                  anime?.score.decimalScore !== 0
                    ? anime?.score.decimalScore + ' / 10'
                    : 'No Score'
                "
              />
              <v-list-item title="Type" :subtitle="anime?.format" />
              <v-list-item
                title="Year"
                :subtitle="anime?.year ? anime?.year : 'No EST'"
              />
              <v-list-item title="Season" :subtitle="anime?.season" />
              <v-list-item
                title="Duration"
                :subtitle="
                  anime?.duration
                    ? anime?.duration >= 60
                      ? Math.floor(anime?.duration / 60).toFixed(2) + ' hours'
                      : anime?.duration + ' minutes'
                    : 'No EST'
                "
              />
              <v-list-item
                title="Start Date"
                :subtitle="
                  anime?.startIn.year === null &&
                  anime?.startIn.month === null &&
                  anime?.startIn.day === null
                    ? 'No EST'
                    : anime?.startIn.year +
                      '/' +
                      anime?.startIn.month +
                      '/' +
                      anime?.startIn.day
                "
              />
              <v-list-item
                title="End Date"
                :subtitle="
                  anime?.endIn.year === null &&
                  anime?.endIn.month === null &&
                  anime?.endIn.day === null
                    ? 'No EST'
                    : anime?.endIn.year +
                      '/' +
                      anime?.endIn.month +
                      '/' +
                      anime?.endIn.day
                "
              />
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-tabs v-model="infotab">
              <v-tab value="descrpt"> Description </v-tab>
              <v-tab value="recomd"> Recommendations </v-tab>
            </v-tabs>
            <v-card-text>
              <v-window v-model="infotab">
                <v-window-item value="descrpt">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div v-html="anime?.description" />
                </v-window-item>
                <v-window-item value="recomd">
                  <v-list lines="three">
                    <v-list-item v-if="recmedPending">
                      <v-row>
                        <v-col class="justify-center">
                          <v-progress-circular :size="40" indeterminate />
                        </v-col>
                      </v-row>
                    </v-list-item>
                    <v-list-item
                      v-else-if="recmedAnime.results.length == 0"
                      title="No Recommendations"
                      subtitle="Not available by anilist"
                    />
                    <v-list-item
                      v-for="(item, i) in recmedAnime.results"
                      v-else
                      :key="i"
                      :title="item.title.userPreferred"
                      :subtitle="item.title.romaji"
                      :to="'/anime/' + item.id"
                    >
                      <template #prepend>
                        <v-img
                          class="mr-5"
                          style="border-radius: 4px; width: 60px; height: 10%"
                          :src="item.coverImage.large"
                        />
                      </template>
                    </v-list-item>
                  </v-list>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-container {
  width: auto;
  position: relative;
}
.image-area {
  position: relative;
  margin-top: -90px;
  margin-right: 1rem;
}

.image-poster {
  background-color: rgba(212, 230, 245, 0.5);
  border-radius: 4px;
  box-shadow: 0 0 29px rgba(49, 54, 68, 0.25);
  width: 160px;
}
/* media width for sm */
@media (min-width: 768px) {
  .card-container {
    display: grid;
    grid-template-columns: 200px auto;
  }
  .image-poster {
    width: 100%;
  }
}
</style>
