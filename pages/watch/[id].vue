<script setup>
import { useStorage } from "@vueuse/core";
const env = useRuntimeConfig();

const getID = useRoute().params.id.split("-")[0];
const getGogoID = useRoute().params.id.split(`${getID}-`)[1];
const getEP = getGogoID.split(`-episode-`)[1];

const loadSettingDialog = ref(false);
const switchtobackup = ref(false);

const { data: anime } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/info/${getID}`,
  {
    cache: "force-cache",
  }
);

const { data: strm, pending: strmLoading } = useLazyFetch(
  `${env.public.API_URL}/api/${env.public.version}/stream/${getGogoID}`,
  {
    cache: "force-cache",
  }
);

const {
  data: ep,
  pending: epPending,
  error: epError,
} = useLazyFetch(
  `${env.public.API_URL}/api/v1/episode/${anime?.value.id_provider.idGogo}`,
  {
    cache: "default",
  }
);

useSeoMeta({
  ogTitle: `${
    anime.value?.title.userPreferred
      ? anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } - amvstrm`,
  ogDescription: `Watch ${
    anime.value?.title.userPreferred
      ? anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } on amvstrm`,
  ogImage: anime?.value.coverImage.large,
  ogUrl: useRoute().fullPath,
  twitterTitle: `${
    anime.value?.title.userPreferred
      ? anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } - amvstrm`,
  twitterDescription: `Watch ${
    anime.value?.title.userPreferred
      ? anime.value?.title.userPreferred + " Episode " + getEP
      : "amvstrm"
  } on amvstrm`,
  twitterImage: anime?.value.coverImage.large,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: anime.value?.title.userPreferred
    ? anime.value?.title.userPreferred + " Episode " + getEP
    : "amvstrm",
});

const { data: time2Skip } = useFetch(
  `${env.public.API_URL}/api/v2/stream/skiptime/${getID}/${getEP}`,
  {
    cache: "force-cache",
  }
);

const skipTimeHighlight = () => {
  if (time2Skip.value.found === true) {
    const output = [];

    if (time2Skip.value.results.op) {
      output.push({
        text: "Opening start",
        time: time2Skip.value.results.op.interval.startTime,
      });

      output.push({
        text: "Opening end",
        time: time2Skip.value.results.op.interval.endTime,
      });
    }

    if (time2Skip.value.results.ed) {
      output.push({
        text: "Ending start",
        time: time2Skip.value.results.ed.interval.startTime,
      });

      output.push({
        text: "Ending end",
        time: time2Skip.value.results.ed.interval.endTime,
      });
    }
    return output;
  }
  return [];
};

const useStorageState = useStorage("ap_settings", {
  s_source: "Main",
  s_autoskip: false,
  s_autoplay: false,
  s_autonext: false,
});

const setHistory = useStorage("site-watch", {
  latest_watched_date: 0,
  latest_anime_watched: {},
  all_anime_watched: [],
});

const latestAnimeWatched = {
  id: anime?.value.id,
  title: anime?.value.title.userPreferred,
  imgsrc: anime?.value.coverImage.large,
  color: anime?.value.coverImage.color,
  type: anime?.value.format,
  curr_ep: getEP,
  ep_id: getGogoID,
  isDub: getGogoID.includes("-dub-"),
  totalEp: anime?.value.episodes ? anime?.value.episodes : 0,
  year: anime?.value.year,
};

setHistory.value.latest_anime_watched = latestAnimeWatched;
setHistory.value.latest_watched_date = Date.now();

const get_key = useStorage("cloud-cfg", {});

if (get_key.value.enabled) {
  await useFetch("/api/saveToDB?mutate=add_latest_watch", {
    method: "POST",
    headers: {
      "x-space-collection": get_key.value.deta_collection_key,
    },
    body: {
      latest_watch: {
        latest_anime_watched: latestAnimeWatched,
        latest_watched_date: Date.now(),
      },
    },
  });
}

const savedTime = async () => {
  if (get_key.value.enabled) {
    useFetch("/api/saveToDB?mutate=save_plyr_data", {
      method: "POST",
      headers: {
        "x-space-collection": get_key.value.deta_collection_key,
      },
      body: {
        plyr_data: useStorage("artplayer_settings", {}).value,
      },
    });
  } else {
    return true;
  }
};

function getInstance(art) {
  art.on("error", (error, reconnectTime) => {
    console.info("video error!");
  });
  art.setting.add({
    html: "Stream Source",
    width: 200,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z"/></svg>',
    tooltip: useStorageState.value.s_source === "Main" ? "Main" : "Backup",
    selector: [
      {
        default: useStorageState.value.s_source === "Main" ? true : false,
        html: "Main",
        url: strm.value?.stream.multi.main.url,
      },
      {
        default: useStorageState.value.s_source === "Backup" ? true : false,
        html: "Backup",
        url: strm.value?.stream.multi.backup.url,
      },
    ],
    onSelect(item) {
      art.switchQuality(item.url, item.html);
      useStorageState.value.s_source = item.html;
      return item.html;
    },
  });
  art.setting.add({
    html: "Auto Skip (OP&ED)",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M6 9.83L8.17 12L6 14.17V9.83M4 5v14l7-7m9-7h-2v14h2m-7-9.17L15.17 12L13 14.17V9.83M11 5v14l7-7"/></svg>',
    switch: useStorageState.value.s_autoskip === false ? false : true,
    onSwitch: function (item) {
      const nextState = !item.switch;
      useStorageState.value.s_autoskip = nextState;
      return nextState;
    },
  });
  art.setting.add({
    html: "Auto play",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M16 18h2V6h-2M6 18l8.5-6L6 6v12Z"/></svg>',
    switch: useStorageState.value.s_autonext === false ? false : true,
    onSwitch: function (item) {
      const nextState = !item.switch;
      useStorageState.value.s_autonext = nextState;
      return nextState;
    },
  });
  art.on("ready", () => {
    if (useRoute().query.time) {
      art.seek = parseInt(useRoute().query.time) || 0;
    }
  });
  art.on("play", () => {
    savedTime();
    art.layers.show = false;
  });
  art.on("pause", () => {
    savedTime();
    art.layers.show = true;
  });
  art.on("video:timeupdate", () => {
    const currentTime = art.currentTime;

    if (useStorageState.value.s_autoskip === true) {
      if (
        time2Skip.value?.results.op &&
        currentTime >= time2Skip.value?.results.op.interval.startTime &&
        currentTime <= time2Skip.value?.results.op.interval.endTime
      ) {
        art.seek = time2Skip.value?.results.op.interval.endTime + 1;
        art.notice.show = "Skipped Opening";
      } else if (
        time2Skip.value?.results.ed &&
        currentTime >= time2Skip.value?.results.ed.interval.startTime &&
        currentTime <= time2Skip.value?.results.ed.interval.endTime
      ) {
        art.seek = time2Skip.value?.results.ed.interval.endTime + 1;
        art.notice.show = "Skipped Ending";
      } else {
        return;
      }
    } else {
      if (
        time2Skip.value?.results.op &&
        currentTime >= time2Skip.value?.results.op.interval.startTime &&
        currentTime <= time2Skip.value?.results.op.interval.endTime
      ) {
        if (!art.controls["opening"]) {
          if (art.controls["ending"]) {
            art.controls.remove("ending");
          }
          art.controls.add({
            name: "opening",
            position: "top",
            html: '<button class="app-skip-btn">Skip Opening</button>',
            click: function () {
              art.seek = time2Skip.value?.results.op.interval.endTime;
              art.notice.show = "Skipped Opening";
            },
          });
        }
      } else if (
        time2Skip.value?.results.ed &&
        currentTime >= time2Skip.value?.results.ed.interval.startTime &&
        currentTime <= time2Skip.value?.results.ed.interval.endTime
      ) {
        if (!art.controls["ending"]) {
          if (art.controls["opening"]) {
            art.controls.remove("opening");
          }
          art.controls.add({
            name: "ending",
            position: "top",
            html: '<button class="app-skip-btn">Skip Ending</button>',
            click: function () {
              art.seek = time2Skip.value?.results.ed.interval.endTime;
              art.notice.show = "Skipped Ending";
            },
          });
        }
      } else {
        if (art.controls["opening"]) {
          art.controls.remove("opening");
        }
        if (art.controls["ending"]) {
          art.controls.remove("ending");
        }
      }
    }
  });
  art.on("video:ended", () => {
    savedTime();
    if (useStorageState.value.s_autonext === true) {
      const currentEpisodeIndex = ep?.value.episodes.findIndex(
        (episode) => episode.id.split(`-episode-`)[1] === getEP
      );
      const nextEpisode = ep?.value.episodes[currentEpisodeIndex - 1];
      if (currentEpisodeIndex === ep?.value.episodes.length - 1) {
        art.notice.show = "No more episode!";
      } else {
        navigateTo(
          `/watch/${getID}-${getGogoID.split(`-episode-`)[0]}-episode-${
            nextEpisode.id.split(`-episode-`)[1]
          }`,
          {
            external: true,
          }
        );
        art.notice.show = "Next episode >";
      }
    }
  });
}
</script>

<script>
export default {
  data() {
    return {
      style: {
        width: "100%",
        height: "auto",
        aspectRatio: "16/9",
      },
      switchplyr: 1,
    };
  },
  unmounted: function () {
    console.log(this.artPlayer);
  },
};
</script>
<template>
  <div v-if="strmLoading" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <v-container v-else>
    <v-row>
      <v-col cols="12" lg="8">
        <ClientOnly>
          <VideoPlayer
            v-if="switchplyr == 1"
            :option="{
              id: useRoute().params.id || '',
              url: strm.stream.multi.main.url,
              poster: anime.bannerImage || anime.coverImage.large,
              highlight: skipTimeHighlight(),
            }"
            :vtt="strm.stream?.tracks?.file"
            :style="style"
            @get-instance="getInstance"
          />
          <iframe
            v-else-if="switchplyr == 2"
            :src="switchtobackup === true ? strm.plyr.backup : strm.plyr.main"
            allowfullscreen
            frameborder="0"
            :style="style"
          ></iframe>
          <iframe
            v-else-if="switchplyr == 3"
            :src="switchtobackup === true ? strm.nspl.backup : strm.nspl.main"
            allowfullscreen
            frameborder="0"
            :style="style"
          ></iframe>
          <iframe
            v-else-if="switchplyr == 4"
            id="gogoiFrame"
            :src="strm.iframe.default"
            allowfullscreen
            frameborder="0"
            :style="style"
          ></iframe>
          <iframe
            v-else-if="switchplyr == 5"
            id="gogoiFrame"
            :src="strm.iframe.backup || strm.iframe.default"
            allowfullscreen
            frameborder="0"
            :style="style"
          ></iframe>
        </ClientOnly>
      </v-col>
      <v-col>
        <v-card class="epinf_card">
          <div class="pa-4 d-flex justify-space-between">
            <div style="flex: 1">
              <NuxtLink :to="'/anime/' + getID">
                <h1 style="font-size: large">
                  {{ anime?.title.userPreferred }}
                </h1>
              </NuxtLink>
              <span>Episode {{ getEP }}</span>
            </div>
            <div class="d-flex align-center">
              <v-btn
                class="mr-2"
                color="blue"
                :href="'/download/' + useRoute().params.id"
                icon="mdi-download"
                target="blank"
                variant="plain"
              >
              </v-btn>
              <v-dialog
                v-model="loadSettingDialog"
                width="auto"
                scrim="#202020"
                max-width="500px"
                scrollable
              >
                <template #activator="{ props }">
                  <v-btn
                    class="mr-2"
                    color="gray"
                    icon="mdi-cog"
                    variant="plain"
                    v-bind="props"
                  >
                  </v-btn>
                </template>
                <v-card class="mx-auto">
                  <v-card-title> Player setting </v-card-title>
                  <div class="ma-4">
                    <v-radio-group v-model="switchplyr">
                      <v-radio
                        label="Integrated Player (Recommended)"
                        :value="1"
                      ></v-radio>
                      <v-radio label="Plyr" :value="2"></v-radio>
                      <v-radio label="nsPlayer" :value="3"></v-radio>
                      <v-radio label="Embedded (ADs)" :value="4"></v-radio>
                      <v-radio
                        label="Backup Embedded (ADs)"
                        :value="5"
                      ></v-radio>
                    </v-radio-group>
                    <div v-if="switchplyr == 2 || switchplyr == 3">
                      Using Plyr and nsPlayer will lose some of the
                      functionality (Time saved, Auto-skip, and more)
                      <v-checkbox
                        v-model="switchtobackup"
                        label="Backup stream"
                        color="primary"
                      ></v-checkbox>
                    </div>
                    <div v-else-if="switchplyr === 4">
                      Recommend to use Adblocker and close the web inspect to
                      watch it.
                    </div>
                  </div>
                  <v-card-actions>
                    <v-btn
                      prepend-icon="mdi-help"
                      href="https://amvdocs.pages.dev/help/video-player"
                      target="blank"
                    >
                      Player Help
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      icon="mdi-close"
                      @click="loadSettingDialog = false"
                    />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
          <v-divider />
          <v-list lines="two">
            <v-list-item v-if="epPending">
              <v-list-item-title>LOADING...</v-list-item-title>
            </v-list-item>
            <v-list-item v-else-if="epError">
              <v-list-item-title> Error </v-list-item-title>
              <v-list-item-subtitle>
                {{ epError.message }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item
              v-for="(epitm, i) in ep.episodes"
              v-else
              :key="i"
              :to="'/watch/' + getID + '-' + epitm.id"
            >
              <v-list-item-title>{{ epitm.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Episode {{ epitm.id.split("-episode-")[1] }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col v-if="env.public.disqus_id" cols="12">
        <v-card id="comment">
          <v-card-title>Comment</v-card-title>
          <div class="pa-10">
            <DisqusComments :identifier="useRoute().fullPath" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.loadingBlock {
  height: 100vh;
  display: grid;
  place-items: center;
}

.epinf_card {
  aspect-ratio: 9/7;
  overflow-y: scroll !important;
}

@media (min-width: 1280px) {
  .epinf_card {
    aspect-ratio: 9/10.3;
    overflow-y: scroll !important;
  }
}
</style>
