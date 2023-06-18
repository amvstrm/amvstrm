<script setup>
import { useStorage } from "@vueuse/core";
const env = useRuntimeConfig();
const route = useRoute();
const getID = route.params.id.split("-")[0];
const getGogoID = route.params.id.split(`${getID}-`)[1];

const loadSettingDialog = ref(false);
const switchtobackup = ref(false);
const putsandbox = ref(false);

const { data: strm, pending: strmLoading } = useFetch(
  `${env.public.API_URL}/api/${env.public.version}/stream/${getGogoID}`,
  {
    cache: "force-cache",
  }
);
const {
  data: ep,
  pending: epPending,
  error: epError,
} = useFetch(
  `${env.public.API_URL}/api/v1/episode/${getGogoID.split("-episode-")[0]}`,
  {
    cache: "default",
  }
);

const { data: time2Skip } = useFetch(
  `${env.public.API_URL}/api/v2/stream/skiptime/${getID}/${
    getGogoID.split("-episode-")[1]
  }`,
  {
    cache: "force-cache",
  }
);

if (putsandbox === true) {
  document.getElementById("gogoiFrame").sandbox =
    "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation";
} else if (putsandbox === false) {
  document.getElementById("gogoiFrame").removeAttribute("sandbox");
}

const useStorageState = useStorage("ap_settings", {
  s_source: "Main",
  s_autoskip: false,
  s_autoplay: false,
});

function getInstance(art) {
  console.log("INITZ ARTPLAYER");
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
    html: "Auto Skip",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M16 18h2V6h-2M6 18l8.5-6L6 6v12Z"/></svg>',
    switch: useStorageState.value.s_autoskip === false ? false : true,
    onSwitch: function (item) {
      const nextState = !item.switch;
      useStorageState.value.s_autoskip = nextState;
      return nextState;
    },
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
      } else if (
        time2Skip.value?.results.ed &&
        currentTime >= time2Skip.value?.results.ed.interval.startTime &&
        currentTime <= time2Skip.value?.results.ed.interval.endTime
      ) {
        art.seek = time2Skip.value?.results.ed.interval.endTime + 1;
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
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Html>
    <Head>
      <Title>
        {{
          ep?.title ? ep?.title + " Episode " + ep?.totalEpisodes : "amvstrm"
        }}
      </Title>
    </Head>
  </Html>
  <div v-if="strmLoading" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <v-container v-else>
    <v-row>
      <v-col cols="12" style="padding:0;">
        <v-breadcrumbs>
          <template #prepend>
            <v-icon size="small" icon="mdi-home"></v-icon>
          </template>
          <v-breadcrumbs-item title="Home" to="/pwa" />
          <v-breadcrumbs-divider />
          <v-breadcrumbs-item :title="getID" :to="'/pwa/anime/'+getID" />
          <v-breadcrumbs-divider />
          <v-breadcrumbs-item :title="'Episode '+getGogoID.split('-episode-')[1]" />
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12" lg="8">
        <ClientOnly>
          <VideoPlayer
            v-if="switchplyr == 1"
            :option="{
              url: strm.stream.multi.main.url,
            }"
            :style="style"
            :vtt="strm.stream?.tracks?.file"
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
        </ClientOnly>
      </v-col>
      <v-col cols="">
        <v-card class="epinf_card">
          <div class="pa-4 d-flex justify-space-between">
            <div style="flex: 1">
              <h1 style="font-size: large">
                {{ strm?.info.title === "" ? ep?.episodes[0].title.split('Episode')[0] : strm?.info.title }}
              </h1>
              <span>Episode {{ strm.info.episode }}</span>
            </div>
            <div class="d-flex align-center">
              <v-btn
                class="mr-2"
                color="blue"
                :href="'https://api.amvstr.ml/api/v1/download/' + getGogoID"
                icon="mdi-download"
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
                <v-card class="mx-auto" width="400">
                  <v-card-title> Player setting </v-card-title>
                  <v-card-text>
                    <v-radio-group v-model="switchplyr">
                      <v-radio
                        label="Integrated Player (Recommended)"
                        :value="1"
                      ></v-radio>
                      <v-radio label="Plyr" :value="2"></v-radio>
                      <v-radio label="nsPlayer" :value="3"></v-radio>
                      <v-radio label="GOGOSTREAM (ADs)" :value="4"></v-radio>
                    </v-radio-group>
                    <div v-if="switchplyr == 2 || switchplyr == 3">
                      <v-checkbox
                        v-model="switchtobackup"
                        label="Backup stream"
                        color="primary"
                      ></v-checkbox>
                    </div>
                    <div v-else-if="switchplyr === 4">
                      Enable Sandbox mode will not work on Chromium based
                      browser.
                      <v-checkbox
                        v-model="putsandbox"
                        label="Enable Sandbox (Won't Work For Google Chrome)"
                        color="primary"
                      ></v-checkbox>
                    </div>
                  </v-card-text>
                  <v-card-actions>
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
              :to="'/pwa/watch/' + getID + '-' + epitm.id"
            >
              <v-list-item-title>{{ epitm.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Episode {{ epitm.id.split("-episode-")[1] }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Comment</v-card-title>
          <v-card-actions>
            <v-btn
              prepend-icon="mdi-arrow-top-right-bold-box-outline"
              :href="'/watch/' + route.params.id+'#comment'"
              target="blank"
              variant="outlined"
            >
              Comment
            </v-btn>
          </v-card-actions>
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
