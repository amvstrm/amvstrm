<script setup>
const env = useRuntimeConfig();

const episode_dialog = ref(false);
const infotab = ref(null);

const { data: anime, pending: aniPending } = await useAsyncData("", () =>
  $fetch(
    `${env.public.API_URL}/api/${env.public.version}/info/${
      useRoute().params.id
    }`
  )
);
useSeoMeta({
  title: anime.value.title.userPreferred,
});
const { data: recmedAnime, pending: recmedPending } = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/recommendations/${
    useRoute().params.id
  }`
);

const { data: epAni, pending: loadAni } = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${anime.value.id_provider.idGogo}`
);

//   if (epAni.value.length > 200) {
//     return epAni.value;
//   }
//   let groups = [],
//     i;
//   for (i = 0; i < epAni.value.length; i += 100) {
//     groups.push(epAni.value.slice(i, i + 100));
//   }
//   return groups;
// });
// idgogo.value = anime.value.id_provider.idGogo

// const { data: epAni, pending: epLoad } = useLazyFetch(
//   `${env.public.API_URL}/api/${env.public.version}/episode/${
//     useRoute().params.id
//   }`
// );
</script>

<template>
  <v-card v-if="anime">
    <v-sheet v-if="aniPending" :color="anime.coverImage.color" height="300px" />
    <v-img
      v-else-if="anime.bannerImage !== null"
      :src="anime.bannerImage"
      max-height="400px"
      cover=""
    />
    <v-sheet v-else :color="anime.coverImage.color" height="300px" />
    <v-container>
      <div class="card-container">
        <div class="image-area">
          <img
            class="image-poster"
            :src="anime.coverImage.large"
            :alt="anime.title.userPreferred"
          >
        </div>
        <div class="card-content">
          <div class="mt-2">
            <v-chip
              class="mr-1"
              label
              variant="elevated"
              :color="anime.dub == true ? 'success' : 'warning'"
            >
              {{ anime.dub == true ? "Dub" : "No Dub" }}
            </v-chip>
            <v-chip
              class="mx-1"
              label
              variant="elevated"
              :color="
                anime.status === 'FINISHED'
                  ? 'success'
                  : anime.status === 'RELEASING'
                  ? 'warning'
                  : anime.status === 'NOT_YET_RELEASED'
                  ? 'info'
                  : anime.status === 'CANCELLED'
                  ? 'danger'
                  : 'No data'
              "
            >
              {{
                anime.status === "FINISHED"
                  ? "Finished"
                  : anime.status === "RELEASING"
                  ? "Currently Releasing"
                  : anime.status === "NOT_YET_RELEASED"
                  ? "Not Released"
                  : anime.status === "CANCELLED"
                  ? "Cancelled"
                  : "No data"
              }}
            </v-chip>
          </div>
          <h1 class="my-4" style="line-height: 2rem">
            {{ anime.title.userPreferred }}
          </h1>
          <span>{{ anime.title.native }}</span>
          <v-btn
            class="mr-2 my-2"
            color="red"
            prepend-icon="mdi-play"
            @click="episode_dialog = !episode_dialog"
          >
            Watch {{ anime.title.userPreferred }}
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
                <!-- <v-expansion-panels
                  v-if="epAni.length > 200"
                  variant="accordion"
                >
                  <v-expansion-panel
                    v-for="(group, index) in groupedData"
                    :key="index"
                  >
                    <v-expansion-panel-title>
                      {{ "Series " + index }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text
                      v-for="(item, index) in group"
                      :key="index"
                    >
                      <v-list>
                        <v-list-item
                          :href="
                            '/watch/' + useRoute().params.id + '-' + item.id
                          "
                          title="Episode"
                          :subtitle="
                            stream_in_dub === false
                            ? ep.id.split('-episode-')[1]
                            : ep.id.split('-episode-')[1] + ' (DUB)'
                          "
                        />
                      </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels> -->
                <v-card-text v-if="loadAni">
                  <v-row>
                    <v-col class="justify-center">
                      <v-progress-circular :size="40" indeterminate />
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-text v-else-if="epAni.length === 0">
                  Episode not found or not available...
                </v-card-text>
                <v-list v-else lines="two">
                  <v-list-item
                    v-for="(ep, i) in epAni.episodes"
                    :key="i"
                    :to="'/watch/' + useRoute().params.id + '-' + ep.id"
                    title="Episode"
                    :subtitle="ep.id.split('-episode-')[1]"
                  />
                </v-list>
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
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <v-container>
    <v-row>
      <v-col cols="12" lg="3" md="4" sm="12">
        <v-card>
          <v-list lines="two">
            <v-list-subheader> Info </v-list-subheader>
            <v-list-item title="Genres" :subtitle="anime.genres.join(', ')" />
            <v-list-item
              title="Score"
              :subtitle="anime.score.decimalScore + ' / 10'"
            />
            <v-list-item title="Year" :subtitle="anime.year" />
            <v-list-item title="Season" :subtitle="anime.season" />
            <v-list-item
              title="Duration"
              :subtitle="anime.duration + ' Mins per episode'"
            />
            <v-list-item
              title="Start Date"
              :subtitle="
                anime.startIn.year +
                '/' +
                anime.startIn.month +
                '/' +
                anime.startIn.day
              "
            />
            <v-list-item
              title="End Date"
              :subtitle="
                anime.endIn.year === null &&
                anime.endIn.month === null &&
                anime.endIn.day === null
                  ? 'No data'
                  : anime.endIn.year +
                    '/' +
                    anime.endIn.month +
                    '/' +
                    anime.endIn.day
              "
            />
            <v-list-item
              title="Next Air Date"
              :subtitle="
                anime.nextair === null ||
                (anime.nextair.year === undefined &&
                  anime.nextair.month === undefined &&
                  anime.nextair.day === undefined)
                  ? 'No data'
                  : anime.nextair.year +
                    '/' +
                    anime.nextair.month +
                    '/' +
                    anime.nextair.day
              "
            />
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-tabs v-model="infotab">
            <v-tab value="descrpt">
Description
</v-tab>
            <v-tab value="recomd">
Recommendations
</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="infotab">
              <v-window-item value="descrpt">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="anime.description" />
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
                    :href="'/anime/' + item.id"
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
