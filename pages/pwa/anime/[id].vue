<script setup>
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
    cache: "force-cache",
  }
);
const { data: epAniDub, error: epAniError } = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${anime?.value.id_provider.idGogo}-dub`,
  {
    cache: "force-cache",
  }
);
</script>

<template>
  <Html>
    <Head>
      <Title>
        {{ anime?.title.userPreferred }}
      </Title>
    </Head>
  </Html>
  <div v-if="aniPending" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div v-else>
    <v-card>
      <v-breadcrumbs>
        <template #prepend>
          <v-icon size="small" icon="mdi-home"></v-icon>
        </template>
        <v-breadcrumbs-item title="Home" to="/pwa" />
        <v-breadcrumbs-divider />
        <v-breadcrumbs-item :title="useRoute().params.id" />
      </v-breadcrumbs>
      <v-sheet
        v-if="aniPending"
        :color="anime?.coverImage.color"
        height="300px"
      />
      <v-img
        v-else-if="anime?.bannerImage !== null"
        :src="anime?.bannerImage"
        max-height="400px"
        cover=""
      />
      <v-sheet v-else :color="anime?.coverImage.color" height="300px" />
      <v-container>
        <div class="card-container">
          <div class="image-area">
            <img
              class="image-poster"
              :src="anime?.coverImage.large"
              :alt="anime?.title.userPreferred"
            />
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
            <span>{{ anime?.title.native }}</span>
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
                  <v-card-text v-else-if="epAni.length === 0">
                    Episode not found or not available...
                  </v-card-text>
                  <v-expansion-panels v-else variant="accordian">
                    <v-expansion-panel title="SUB">
                      <template #text>
                        <v-list lines="two">
                          <v-list-item
                            v-for="(ep, i) in epAni.episodes"
                            :key="i"
                            :to="
                              /\/pwa\.*/.test(useRoute().path)
                                ? '/pwa/watch/' +
                                  useRoute().params.id +
                                  '-' +
                                  ep.id
                                : '/watch/' + useRoute().params.id + '-' + ep.id
                            "
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
                            :to="
                              /\/pwa\.*/.test(useRoute().path)
                                ? '/pwa/watch/' +
                                  useRoute().params.id +
                                  '-' +
                                  ep.id
                                : '/watch/' + useRoute().params.id + '-' + ep.id
                            "
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
          <v-card>
            <v-list lines="two">
              <v-list-subheader> Info </v-list-subheader>
              <v-list-item
                title="Genres"
                :subtitle="anime?.genres.join(', ')"
              />
              <v-list-item
                title="Score"
                :subtitle="anime?.score.decimalScore + ' / 10'"
              />
              <v-list-item title="Year" :subtitle="anime?.year" />
              <v-list-item title="Season" :subtitle="anime?.season" />
              <v-list-item
                title="Duration"
                :subtitle="anime?.duration + ' Mins per episode'"
              />
              <v-list-item
                title="Start Date"
                :subtitle="
                  anime?.startIn.year +
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
                    ? 'No data'
                    : anime?.endIn.year +
                      '/' +
                      anime?.endIn.month +
                      '/' +
                      anime?.endIn.day
                "
              />
              <v-list-item
                title="Next Air Date"
                :subtitle="
                  anime?.nextair === null ||
                  (anime?.nextair.year === undefined &&
                    anime?.nextair.month === undefined &&
                    anime?.nextair.day === undefined)
                    ? 'No data'
                    : anime?.nextair.year +
                      '/' +
                      anime?.nextair.month +
                      '/' +
                      anime?.nextair.day
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
                  <span v-html="anime?.description" />
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
                      v-for="(item, i) in recmedAnime.results"
                      v-else
                      :key="i"
                      :title="item.title.userPreferred"
                      :subtitle="item.title.romaji"
                      :to="
                        /\/pwa\.*/.test(useRoute().path)
                          ? '/pwa/anime/' + item.id
                          : '/anime/' + item.id
                      "
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
