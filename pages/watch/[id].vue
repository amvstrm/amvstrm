<script setup>
const env = useRuntimeConfig();
const route = useRoute();
const getID = route.params.id.split("-")[0];
const getGogoID = route.params.id.split(`${getID}-`)[1];

const { data: strm, pending: strmLoading } = useFetch(
  `${env.public.API_URL}/api/${env.public.version}/stream/${getGogoID}`
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
    };
  },
  unmounted: function () {
    console.log(this.artPlayer);
  },
  methods: {
    getInstance(art) {
      console.log("INITZ ARTPLAYER");
      art.controls.add({
        name: "skipbtn",
        position: "right",
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L224 214.3v83.4L52.5 440.6zM256 352V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4S256 428.4 256 416v-64z"/></svg>',
        index: 1,
        tooltip: "Skip Intro",
        style: {
          marginRight: "16px",
        },
        click: function () {
          art.forward = 90;
          art.controls.remove("skipbtn");
        },
      });
      art.on("ready", () => {
        setTimeout(() => {
          art.controls.remove("skipbtn");
        }, 200000);
      });
    },
  },
};
</script>
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Html>
    <Head>
      <Title>{{ ep.title + " Episode " + ep.totalEpisodes }}</Title>
    </Head>
  </Html>
  <div v-if="strmLoading" class="loadingBlock">
    <v-progress-circular :size="45" indeterminate />
  </div>
  <v-container v-else>
    <v-row>
      <v-col cols="12" lg="8">
        <ClientOnly>
          <VideoPlayer
            :option="{
              url: strm.stream.multi.main.url,
              quality: [
                {
                  default: true,
                  html: 'MAIN',
                  url: strm.stream.multi.main.url,
                },
                {
                  html: 'BACKUP',
                  url: strm.stream.multi.backup.url,
                },
              ],
            }"
            :style="style"
            @get-instance="getInstance"
          />
        </ClientOnly>
      </v-col>
      <v-col cols="">
        <v-card class="epinf_card">
          <v-list lines="two">
            <v-list-item :href="'/anime/' + getID">
              <v-list-item-title>{{ strm.info.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Episode {{ strm.info.episode }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-btn
                class="mr-2"
                color="blue darken-1"
                :href="'https://api.amvstr.ml/api/v1/download/' + getGogoID"
              >
                <v-icon> mdi-download </v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
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
              :href="'/watch/' + getID + '-' + epitm.id"
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
          <v-card-text> Coming soon! </v-card-text>
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
