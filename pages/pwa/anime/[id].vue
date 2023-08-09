<script setup>
const env = useRuntimeConfig();
const episode_dialog = ref(false);
const infotab = ref(null);
const ep_tab = ref(null);

const { data: anime, pending: aniPending } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/info/${
    useRoute().params.id
  }`,
  {
    cache: "force-cache",
  }
);

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: anime.value?.title.userPreferred,
});


const nextair = {
  airingAt: anime?.value.nextair?.airingAt,
  timeUntilAiring: anime?.value.nextair?.timeUntilAiring,
};

const countdown = ref("");

const updateCountdown = () => {
  setInterval(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const remainingTime = nextair.airingAt - currentTime;
    countdown.value = formatDuration(remainingTime);
  }, 1000);
};

const formatDuration = (duration) => {
  const days = Math.floor(duration / (60 * 60 * 24));
  const hours = Math.floor((duration % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((duration % (60 * 60)) / 60);
  const seconds = duration % 60;

  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

function getAiringDay() {
  const airingDate = new Date(this.nextair.airingAt * 1000);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const airingDay = daysOfWeek[airingDate.getDay()];
  return airingDay;
}

onMounted(() => {
  updateCountdown();
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
  `${env.public.API_URL}/api/v1/episode/${
    anime?.value.id_provider === null ? "''" : anime.value.id_provider.idGogo
  }`,
  {
    cache: "default",
  }
);
const { data: epAniDub, error: epAniError } = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${
    anime?.value.id_provider === null ? "''" : anime.value.id_provider.idGogo
  }-dub`,
  {
    cache: "default",
  }
);

const stringInstring = '""';
</script>

<template>
  <div v-if="aniPending" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <div v-else>
    <v-breadcrumbs>
      <template #prepend>
        <v-icon size="small" icon="mdi-home"></v-icon>
      </template>
      <v-breadcrumbs-item title="Home" to="/pwa" />
      <v-breadcrumbs-divider />
      <v-breadcrumbs-item :title="useRoute().params.id" />
    </v-breadcrumbs>
    <v-card>
      <v-img
        v-if="anime?.bannerImage !== null"
        :src="anime?.bannerImage"
        max-height="300px"
        cover=""
      >
        <template #placeholder>
          <v-sheet :color="anime?.coverImage.color" height="250px"></v-sheet>
        </template>
      </v-img>
      <v-sheet v-else :color="anime?.coverImage.color" height="250px" />
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
            <h1 class="mt-2" style="line-height: 2rem; font-size: x-large">
              {{ anime?.title.userPreferred }}
            </h1>
            <p class="mb-2">{{ anime?.title.native }}</p>
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
              :disabled="
                anime.id_provider === null ||
                anime.id_provider.idGogo.includes(stringInstring)
              "
              @click="episode_dialog = !episode_dialog"
            >
              {{
                anime.id_provider === null || anime.id_provider.idGogo === '""'
                  ? "Not available"
                  : "Watch Now"
              }}
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
                  <v-card v-else>
                    <v-tabs v-model="ep_tab" grow="">
                      <v-tab value="sub"> SUB </v-tab>
                      <v-tab
                        value="dub"
                        :disabled="anime?.dub === false ? true : false"
                      >
                        DUB
                      </v-tab>
                    </v-tabs>
                    <v-card-text>
                      <v-window v-model="ep_tab">
                        <v-window-item value="sub">
                          <v-list lines="two" height="300px">
                            <v-list-item
                              v-for="(ep, i) in epAni.episodes"
                              :key="i"
                              :to="
                                '/pwa/watch/' + useRoute().params.id + '-' + ep.id
                              "
                              title="Episode"
                              :subtitle="ep.id.split('-episode-')[1]"
                            />
                          </v-list>
                        </v-window-item>
                        <v-window-item value="dub">
                          <v-list v-if="!epAniError" lines="two" height="300px">
                            <v-list-item
                              v-for="(ep, i) in epAniDub.episodes"
                              :key="i"
                              :to="
                                '/pwa/watch/' + useRoute().params.id + '-' + ep.id
                              "
                              title="Episode"
                              :subtitle="ep.id.split('-episode-')[1]"
                            />
                          </v-list>
                          <v-list v-else lines="two"> LOCKED </v-list>
                        </v-window-item>
                      </v-window>
                    </v-card-text>
                  </v-card>
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
          <ClientOnly>
            <v-card class="mb-2">
              <v-list lines="two">
                <v-list-subheader> Episode release date </v-list-subheader>
                <v-list-item
                  v-if="anime?.nextair"
                  :title="`New episode ${
                    anime?.nextair.episode
                  } on ${getAiringDay()}`"
                  :subtitle="countdown"
                />
                <v-list-item
                  v-else
                  title="Episode is"
                  :subtitle="
                    anime?.status === 'FINISHED'
                      ? 'Finished'
                      : anime?.status === 'NOT_YET_RELEASED'
                      ? 'Not yet released'
                      : anime?.status === 'CANCELLED'
                      ? 'Cancelled'
                      : 'No data'
                  "
                />
              </v-list>
            </v-card>
          </ClientOnly>
          <v-card>
            <v-list lines="two">
              <v-list-subheader> Info </v-list-subheader>
              <v-list-item
                title="Episode"
                :subtitle="
                  anime?.nextair
                    ? `Current : ${anime?.nextair.episode === 1 ? anime?.nextair.episode : anime?.nextair.episode - 1} / Est : ${anime?.episodes}`
                    : anime?.episodes
                    ? anime?.episodes
                    : 'No data'
                "
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
              <v-list-item title="Genres">
                <template #default>
                  <v-chip
                    v-for="(d, i) in anime?.genres"
                    :key="i"
                    class="my-1 mr-1"
                    :to="'/search?genres=' + d"
                    label=""
                  >
                    {{ d }}
                  </v-chip>
                </template>
              </v-list-item>
              <v-list-item title="Tags">
                <template #default>
                  <v-chip
                    v-for="(d, i) in anime?.tags"
                    :key="i"
                    class="my-1 mr-1"
                    :to="'/search?tags=' + d.name"
                    label=""
                  >
                    {{ d.name }}
                  </v-chip>
                </template>
              </v-list-item>
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
                      :subtitle="`Episode ${item.episodes} / ${
                        item.status === 'FINISHED'
                          ? 'Finished'
                          : item?.status === 'RELEASING'
                          ? 'Currently Releasing'
                          : item?.status === 'NOT_YET_RELEASED'
                          ? 'Not Released'
                          : item?.status === 'CANCELLED'
                          ? 'Cancelled'
                          : 'No data'
                      }`"
                      :to="'/pwa/anime/' + item.id"
                    >
                      <template #prepend>
                        <v-img
                          class="mr-5"
                          style="border-radius: 4px; width: 60px; height: 10%"
                          :src="item.coverImage.large"
                        />
                      </template>
                      <template #append>
                        <v-icon color="yellow"> mdi-star </v-icon>
                        {{ item.averageScore / 10 }}
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
