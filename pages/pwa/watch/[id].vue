<script setup>
import { useStorage } from "@vueuse/core";
const { width } = useWindowSize();

const buttonSize = computed(() => {
  if (width.value < 600) {
    return "small";
  } else if (width.value < 960) {
    return "large";
  } else {
    return "large";
  }
});

const env = useRuntimeConfig();

const getID = useRoute().params.id.split("-")[0];
const getGogoID = useRoute().params.id.split(`${getID}-`)[1];
const getEP = getGogoID.split(`-episode-`)[1];

const loadSettingDialog = ref(false);
const switchtobackup = ref(false);
const dl_dialog = ref(false);
const dl_data = ref();
const isDataFetched = ref(false);

const switchplyr = ref(0);

const { data: anime } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/info/${getID}`,
  {
    cache: "force-cache",
  }
);

const {
  data: strm,
  pending: strmLoading,
  refresh: strmRefresh,
  error: strmError,
} = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/stream/${
    getGogoID.split(`-episode-`)[0]
  }/${getEP}`,
  {
    cache: "force-cache",
  }
);

const {
  data: ep,
  pending: epPending,
  error: epError,
} = await useFetch(
  `${env.public.API_URL}/api/v1/episode/${getGogoID.split(`-episode-`)[0]}`,
  {
    cache: "default",
  }
);

const { data: time2Skip } = await useFetch(
  `${env.public.API_URL}/api/${env.public.version}/stream/skiptimes/${getID}/${getEP}`,
  {
    cache: "force-cache",
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

const skipTimeHighlight = () => {
  if (time2Skip.value?.results) {
    const output = [];

    if (time2Skip.value?.results.op) {
      output.push({
        text: "Opening start",
        time: time2Skip.value.results.op.interval.startTime,
      });

      output.push({
        text: "Opening end",
        time: time2Skip.value.results.op.interval.endTime,
      });
    }

    if (time2Skip.value?.results.ed) {
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
  } else if (
    (time2Skip.value?.results.op === null &&
      time2Skip.value?.results.ed === null) ||
    time2Skip.value?.results.op === null ||
    time2Skip.value?.results.ed === null
  ) {
    return [];
  }
  return [];
};

const getDownload = async () => {
  if (!isDataFetched.value) {
    try {
      dl_dialog.value = true;
      const dldata = await $fetch(
        `${env.public.API_URL}/api/v1/download/${getGogoID}`
      );
      dl_data.value = dldata;
      isDataFetched.value = true;
    } catch (error) {
      console.error("Failed to fetch download data:", error);
    }
  } else {
    dl_dialog.value = true;
  }
};
const playerSettings = useStorage("ap_settings", {
  s_source: "Main",
  s_autonext: false,
  s_autoskip: false,
  s_theatre: false,
  proxy_url: "",
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

if (strmError.value) {
  console.log("stream error");
} else {
  setHistory.value.latest_anime_watched = latestAnimeWatched;
  setHistory.value.latest_watched_date = Date.now();
}

const artError = ref();

function getInstance(art) {
  art.on("error", (error) => {
    console.log("video error!");
    artError.value = error;
  });
  art.setting.add({
    html: "Stream Source",
    width: 200,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z"/></svg>',
    tooltip: playerSettings.value.s_source === "Main" ? "Main" : "Backup",
    selector: [
      {
        default: playerSettings.value.s_source === "Main" ? true : false,
        html: "Main",
        url: strm.value?.stream.multi.main.url,
      },
      {
        default: playerSettings.value.s_source === "Backup" ? true : false,
        html: "Backup",
        url: strm.value?.stream.multi.backup.url,
      },
    ],
    onSelect(item) {
      art.switchQuality(item.url, item.html);
      playerSettings.value.s_source = item.html;
      return item.html;
    },
  });
  art.setting.add({
    html: "Auto Skip (OP&ED)",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M6 9.83L8.17 12L6 14.17V9.83M4 5v14l7-7m9-7h-2v14h2m-7-9.17L15.17 12L13 14.17V9.83M11 5v14l7-7"/></svg>',
    switch: playerSettings.value.s_autoskip === false ? false : true,
    onSwitch: function (item) {
      const nextState = !item.switch;
      playerSettings.value.s_autoskip = nextState;
      return nextState;
    },
  });
  art.setting.add({
    html: "Auto play",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M16 18h2V6h-2M6 18l8.5-6L6 6v12Z"/></svg>',
    switch: playerSettings.value.s_autonext === false ? false : true,
    onSwitch: function (item) {
      const nextState = !item.switch;
      playerSettings.value.s_autonext = nextState;
      return nextState;
    },
  });
  art.on("ready", () => {
    if (navigator.userAgent.includes("Firefox")) {
      art.controls.remove("chromecast");
    }
    if (useRoute().query.time) {
      art.seek = parseInt(useRoute().query.time) || 0;
    }
  });
  art.on("play", () => {
    art.layers.show = false;
  });
  art.on("pause", () => {
    art.layers.show = true;
  });
  art.on("video:timeupdate", () => {
    const currentTime = art.currentTime;

    if (playerSettings.value.s_autoskip === true) {
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
              art.seek = time2Skip.value?.results.op.interval.endTime + 1;
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
              art.seek = time2Skip.value?.results.ed.interval.endTime + 1;
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
    if (playerSettings.value.s_autonext === true) {
      const currentEpisodeIndex = ep?.value.episodes?.findIndex(
        (episode) => episode.id.split(`-episode-`)[1] === getEP
      );

      if (currentEpisodeIndex === -1) {
        console.error("Episode not found!");
        return;
      }

      if (currentEpisodeIndex === 0) {
        art.notice.show = "No more episode!";
      } else {
        const nextEpisode = ep?.value.episodes[currentEpisodeIndex - 1];
        navigateTo(
          `/pwa/watch/${getID}-${getGogoID.split(`-episode-`)[0]}-episode-${
            nextEpisode.id.split(`-episode-`)[1]
          }`
        );
        art.notice.show = "Next episode >";
      }
    }
  });
}

const setPrevNxtState = ref({
  prev: false,
  next: false,
});

const handleEpisodeNavigation = () => {
  const currentEpisodeIndex = ep?.value.episodes?.findIndex(
    (episode) => episode.id.split("-episode-")[1] === getEP
  );

  if (currentEpisodeIndex === -1) {
    console.error("Episode not found!");
    return;
  }

  const totalEpisodes = ep?.value.episodes?.length;

  setPrevNxtState.value = {
    prev: currentEpisodeIndex < totalEpisodes - 1, // Has previous episodes
    next: currentEpisodeIndex > 0, // Has next episodes
  };
};

const goToPrevEpisode = () => {
  const currentEpisodeIndex = ep?.value.episodes?.findIndex(
    (episode) => episode.id.split("-episode-")[1] === getEP
  );

  if (currentEpisodeIndex === -1) {
    console.error("Episode not found!");
    return;
  }

  if (currentEpisodeIndex >= ep?.value.episodes.length - 1) {
    console.log("No previous episode!");
    return;
  }

  const prevEpisode = ep?.value.episodes[currentEpisodeIndex + 1];
  navigateTo(
    `/watch/${getID}-${getGogoID.split("-episode-")[0]}-episode-${
      prevEpisode.id.split("-episode-")[1]
    }`
  );
  console.log("Previous episode >");
};

const goToNextEpisode = () => {
  const currentEpisodeIndex = ep?.value.episodes?.findIndex(
    (episode) => episode.id.split("-episode-")[1] === getEP
  );

  if (currentEpisodeIndex === -1) {
    console.error("Episode not found!");
    return;
  }

  if (currentEpisodeIndex === 0) {
    console.log("No next episode!");
    return;
  }

  const nextEpisode = ep?.value.episodes[currentEpisodeIndex - 1];
  navigateTo(
    `/watch/${getID}-${getGogoID.split("-episode-")[0]}-episode-${
      nextEpisode.id.split("-episode-")[1]
    }`
  );
  console.log("Next episode >");
};

const theatreMode = () => {
  playerSettings.value.s_theatre = !playerSettings.value.s_theatre;
};

const videoIframe = ref([
  {
    name: "Integrated Player (Recommended)",
    url: "",
    bk_url: "",
    value: 0,
  },
  {
    name: "Plyr",
    url: strm.value?.plyr?.main,
    bk_url: strm.value?.plyr?.backup,
    value: 1,
  },
  {
    name: "NSPL",
    url: strm.value?.nspl?.main,
    bk_url: strm.value?.nspl?.backup,
    value: 2,
  },
]);

onMounted(() => {
  strm.value?.iframe.forEach((e) => {
    videoIframe.value.push({
      name: e.name,
      url: e.iframe,
      bk_url: "",
      value: videoIframe.value.length + 1,
    });
  });
  handleEpisodeNavigation();
});

watch(
  () => ep.value,
  () => {
    handleEpisodeNavigation();
  }
);
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
  <div v-else-if="strmError">
    <v-empty-state
      headline="Stream Error"
      title="Stream not found"
      text="Video stream not found or not available by the source."
    />
  </div>
  <v-container v-else>
    <v-row
      :class="{
        'stream-ctn': playerSettings.s_theatre,
      }"
    >
      <v-col
        v-if="!strmError"
        :cols="playerSettings.s_theatre ? 12 : 12"
        :lg="playerSettings.s_theatre ? 12 : 8"
      >
        <ClientOnly>
          <v-card
            v-if="
              artError ||
              strm.value?.stream.multi.main === null ||
              strm.value?.stream.multi.backup === null
            "
            title="Stream error"
            text="This can be cause by our website or the video source. Please use other sources, use embedded version of the stream or refresh the page."
            variant="tonal"
          >
            <v-card-actions>
              <v-btn @click="strmRefresh"> Click me </v-btn>
            </v-card-actions>
          </v-card>
          <VideoPlayer
            v-if="switchplyr == 0"
            :option="{
              id: useRoute().params.id || '',
              url: playerSettings.proxy_url + strm.stream.multi.main.url,
              poster: anime.bannerImage || anime.coverImage.large,
              highlight: skipTimeHighlight(),
            }"
            :vtt="strm.stream?.tracks?.file"
            :style="style"
            @get-instance="getInstance"
          />
          <iframe
            v-else-if="switchplyr > 0"
            ref="amv_iframe"
            class="amv_iframe"
            :src="
              switchtobackup === true
                ? videoIframe[switchplyr].bk_url
                : videoIframe[switchplyr].url
            "
            allowfullscreen
            frameborder="0"
            :style="style"
          ></iframe>
        </ClientOnly>
        <v-card>
          <div class="d-flex justify-space-between flex-row align-center">
            <v-btn
              :size="buttonSize"
              :disabled="!setPrevNxtState.prev"
              variant="flat"
              @click="goToPrevEpisode"
            >
              <template #default>
                <v-icon icon="mdi-skip-previous" />
              </template>
            </v-btn>
            <div>
              <v-btn
                variant="flat"
                :size="buttonSize"
                :disabled="width < 960"
                @click="theatreMode"
              >
                <template #default>
                  <v-icon icon="mdi-panorama-outline" />
                </template>
              </v-btn>
              <v-dialog v-model="dl_dialog" max-width="500px" scrim="#191919">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    :size="buttonSize"
                    @click="getDownload"
                    target="blank"
                    variant="flat"
                  >
                    <template #default>
                      <v-icon icon="mdi-download-outline" />
                    </template>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Download</v-card-title>
                  <v-card-text class="d-flex flex-column ga-2">
                    <div v-if="!isDataFetched">
                      <v-progress-circular :size="45" indeterminate />
                    </div>
                    <template v-else>
                      <v-btn
                        prepend-icon="mdi-link"
                        :href="dl_data.downloadLink"
                        color="yellow"
                        target="_blank"
                      >
                        Download from s3taku
                      </v-btn>
                      <v-divider />
                      <v-btn
                        prepend-icon="mdi-quality-low"
                        :href="
                          dl_data.raw.find((e) => e.resolution === '640x360')
                            .url
                        "
                        color="red"
                        :disabled="
                          dl_data.raw.find((e) => e.resolution === '640x360')
                            .url === ''
                        "
                        target="_blank"
                      >
                        360p
                      </v-btn>
                      <v-btn
                        prepend-icon="mdi-quality-low"
                        :href="
                          dl_data.raw.find((e) => e.resolution === '854x480')
                            .url
                        "
                        color="red"
                        :disabled="
                          dl_data.raw.find((e) => e.resolution === '854x480')
                            .url === ''
                        "
                        target="_blank"
                      >
                        480p
                      </v-btn>
                      <v-btn
                        prepend-icon="mdi-quality-medium"
                        :href="
                          dl_data.raw.find((e) => e.resolution === '1280x720')
                            .url
                        "
                        color="red"
                        :disabled="
                          dl_data.raw.find((e) => e.resolution === '1280x720')
                            .url === ''
                        "
                        target="_blank"
                      >
                        720p (HD)
                      </v-btn>
                      <v-btn
                        prepend-icon="mdi-quality-high"
                        :href="
                          dl_data.raw.find((e) => e.resolution === '1920x1080')
                            .url
                        "
                        color="red"
                        :disabled="
                          dl_data.raw.find((e) => e.resolution === '1920x1080')
                            .url === ''
                        "
                        target="_blank"
                      >
                        1080p (FHD)
                      </v-btn>
                    </template>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn prepend-icon="mdi-close" @click="dl_dialog = false"
                      >Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="loadSettingDialog"
                width="auto"
                scrim="#202020"
                max-width="500px"
                scrollable
              >
                <template #activator="{ props }">
                  <v-btn v-bind="props" variant="flat" :size="buttonSize">
                    <template #default>
                      <v-icon icon="mdi-cog-outline" />
                    </template>
                  </v-btn>
                </template>
                <v-card class="mx-auto">
                  <v-card-title> Player setting </v-card-title>
                  <v-row class="ma-4">
                    <v-col cols="12" lg="6">
                      <h4 class="my-1">Sources :</h4>
                      <ClientOnly>
                        <v-radio-group v-model="switchplyr">
                          <v-radio
                            v-for="(src, i) in videoIframe"
                            :key="i"
                            :label="src.name"
                            :value="i"
                          ></v-radio>
                        </v-radio-group>
                      </ClientOnly>
                      <v-divider class="my-2"></v-divider>
                      <div v-if="switchplyr == 0">
                        Integrated Player is recommended for best experience.
                      </div>
                      <div v-else-if="switchplyr == 1 || switchplyr == 2">
                        Using Plyr and nsPlayer will lose some of the
                        functionality (Resumed Video, Intro and Outro skip, and
                        more)
                        <v-checkbox
                          v-model="switchtobackup"
                          label="Backup stream"
                          color="primary"
                        ></v-checkbox>
                      </div>
                      <div v-else-if="switchplyr > 2">
                        Recommend to use Adblocker and close the web inspect to
                        watch it.
                      </div>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <div>
                        <h4 class="my-1">Video data :</h4>
                        <i
                          class="mb-2"
                          style="font-size: small; display: block"
                        >
                          * Only refresh when the data is outdated or error
                        </i>
                        <v-btn
                          class="mt-2"
                          color="red"
                          prepend-icon="mdi-refresh"
                          @click="strmRefresh"
                        >
                          Refresh Data
                        </v-btn>
                        <h4 class="mt-4 mb-1">Proxy URL :</h4>
                        <i
                          class="mb-2"
                          style="font-size: small; display: block"
                        >
                          This will only work with Integrated Player / Use the
                          full URL (https://proxy.cors/)
                        </i>
                        <v-text-field
                          v-model="playerSettings.proxy_url"
                          placeholder="Enter proxy URL"
                          variant="outlined"
                          density="compact"
                        />

                        <v-btn
                          color="primary"
                          class="mt-1"
                          @click="
                            playerSettings.proxy_url =
                              playerSettings.proxy_url.trim()
                          "
                        >
                          Save Proxy URL
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
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
            <v-btn
              :size="buttonSize"
              :disabled="!setPrevNxtState.next"
              variant="flat"
              @click="goToNextEpisode"
            >
              <template #default>
                <v-icon icon="mdi-skip-next" />
              </template>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col v-else-if="strmError || artError" cols="12" lg="8">
        <v-empty-state
          headline="Player Error"
          title="Video player error"
          text="This can be cause by our website or the video source. Please use other sources, use embedded version of the stream or refresh the page."
        ></v-empty-state>
      </v-col>
      <v-col>
        <v-card
          :style="{
            aspectRatio:
              width < 960 ? '9/7' : playerSettings.s_theatre ? '9/4' : '9/11',
            overflowY: 'scroll !important',
          }"
        >
          <div class="pa-4 d-flex justify-space-between">
            <div style="flex: 1">
              <NuxtLink
                :to="
                  (!/\/pwa\.*/.test(useRoute().path) ? '/' : '/pwa/') +
                  'anime/' +
                  getID
                "
              >
                <div>
                  <h1 style="font-size: large">
                    {{ anime?.title.userPreferred }}
                  </h1>
                  <span>{{ anime?.title.romaji }}</span>
                </div>
              </NuxtLink>
              <span>Episode {{ getEP }}</span>
            </div>
          </div>
          <v-divider />
          <v-list lines="two">
            <v-list-item v-if="epPending">
              <v-list-item-title>LOADING...</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-else-if="epError"
              title="Error"
              :subtitle="epError.message"
            />
            <v-list-item
              v-for="(epitm, i) in ep.episodes"
              v-else
              :key="i"
              :to="
                (/\/pwa\.*/.test(useRoute().path) ? '/pwa/' : '/') +
                'watch/' +
                getID +
                '-' +
                epitm.id
              "
              :title="epitm.title"
              :subtitle="'Episode' + epitm.id.split('-episode-')[1]"
            />
          </v-list>
        </v-card>
      </v-col>
      <v-col v-if="env.public.disqus_id" cols="12">
        <WCompsCommentBlock />
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

.stream-ctn {
  padding: 0;
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
  .stream-ctn {
    padding: 12px 12rem;
  }
}
</style>
