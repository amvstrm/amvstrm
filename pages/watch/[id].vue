<script setup>
const route = useRoute();
const getID = route.params.id.split("-")[0];
const getGogoID = route.params.id.split(`${getID}-`)[1];

const { data: strm, pending: strmLoading } = useFetch(
  `https://new-api.amvstr.ml/api/v2/stream/${getGogoID}`
);
const {
  data: ep,
  pending: epPending,
  error: epError,
} = useFetch(
  `https://new-api.amvstr.ml/api/v1/episode/${getGogoID.split("-episode-")[0]}`
);

// useHead({
//   title: `${strm.value.info.title} Episode ${strm.value.info.episode}`
// })

const player_setting = ref(false);
const share_dialog = ref(false);

// useHead({
//   title: `${strm.info.title} Episode ${strm.info.episode}`,
//   meta: [
//     {
//       name: "description",
//       content: `Watch ${strm.info.title} Episode ${strm.info.episode} on amvstr.ml`,
//     },
//   ],
// });
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
      art.layers.add({
        name: "skipbtn",
        html: `
                  <style>
                  .btn{
                  font-weight: 100;
                  font-size: 18px;
                  color: #ffffff;
                  background-color: #0000005b;
                  padding: 10px 25px;
                  border: none;
                  box-shadow: none;
                  border-radius: 14px;
                  transition : 0ms;
                  transform: translateY(0);
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  cursor: pointer;
                  }
                  .btn:hover{
                  transition : 0ms;
                  transform : translateY(-0px);
                  background-color: #0000006c;
                  color: #ffffff;
                  border: none;
                  }
                  </style>
                  <button class="btn">Skip OP! 
                  <img src="https://api.iconify.design/mdi:skip-forward.svg?color=%23ffffff" 
                  style="width:20px; margin-left:3px; margin-right:3px; flex-direction: row;">
                  </button>
              `,
        style: {
          position: "absolute",
          bottom: "18%",
          right: "30px",
        },
        click: function () {
          art.forward = 90;
          art.layers.show = false;
        },
      });
      art.on("ready", () => {
        setTimeout(() => {
          art.layers.remove("skipbtn");
        }, 200000);
      });
    },
  },
};
</script>
<template>
  <div class="loadingBlock" v-if="strmLoading">
    <v-progress-circular :size="45" indeterminate></v-progress-circular>
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
          ></VideoPlayer>
        </ClientOnly>
      </v-col>
      <v-col cols="">
        <v-card class="epinf_card">
          <v-list lines="two">
            <v-list-item :href="'/anime/' + getID">
              <v-list-item-title>{{ strm.info.title }}</v-list-item-title>
              <v-list-item-subtitle>{{
                strm.info.episode
              }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-btn
                class="mr-2"
                color="red darken-1"
                @click="player_setting = !player_setting"
              >
                <v-icon> mdi-play </v-icon>
              </v-btn>
              <v-btn
                class="mr-2"
                color="green darken-1"
                @click="share_dialog = !share_dialog"
              >
                <v-icon> mdi-share </v-icon>
              </v-btn>
              <v-btn
                class="mr-2"
                color="blue darken-1"
                :href="'https://api.amvstr.ml/api/v1/download/' + getGogoID"
              >
                <v-icon> mdi-download </v-icon>
              </v-btn>
            </v-list-item>
            <v-no-ssr>
              <v-dialog
                v-model="player_setting"
                max-width="500px"
                scrim="#202020"
              >
                <v-card>
                  <v-card-title> Coming soon </v-card-title>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="share_dialog"
                max-width="500px"
                scrim="#202020"
              >
                <v-card>
                  <v-card-title>Share <v-icon>mdi-share</v-icon></v-card-title>
                  <v-card-actions>
                    <v-btn> Twitter </v-btn>
                    <v-btn> Facebook </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-no-ssr>
          </v-list>
          <v-divider></v-divider>
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
              v-else
              v-for="(epitm, i) in ep.episodes"
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
