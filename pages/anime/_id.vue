<template>
  <v-app>
    <div v-if="info">
      <v-card class="ma-4" dark>
        <v-col class="pa-5">
          <v-row class="align-start">
            <v-col cols="auto">
              <div>
                <img
                  :src="info.img"
                  :alt="info.id + '_img'"
                  style="border-radius: 4px; width: 200px; height: 100%"
                />
              </div>
            </v-col>
            <v-col class="pa-2" cols="10" md="9" sm="9">
              <div>
                <h1>{{ info.title }}</h1>
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="info.synopsis"></p>
              <p class="mt-3">
                {{ $t("info.release") }} : {{ info.released }}
                <br />
                {{ $t("info.status") }} : {{ info.status }}
                <br />
                {{ $t("info.other_name") }} : {{ info.otherName }}
              </p>
              <p>
                {{ $t("info.genres") }} :
                <span v-for="(item, index) in info.genres" :key="index">
                  {{ item }}
                  <span v-if="index < info.genres.length - 1">,</span>
                </span>
              </p>
              <v-btn
                outlined
                color="warning"
                :disabled="b_add == true"
                @click="bookmark_add"
              >
                <v-icon>mdi-bookmark</v-icon>
                {{ $t("info.bookmark") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
      <v-card class="ma-4 pa-4" dark>
        <div class="py-2">
          <h2>{{ $t("current_episode") }}</h2>
          <v-col width="100px">
            
          </v-col>
        </div>
        <div class="py-2">
          <h2>{{ $t("episode_all") }}</h2>
          <LoadingFetch v-if="$fetchState.pending"/>
          <v-chip-group v-else class="mt-2" column>
            <v-chip
              v-for="(item, index) in eplists"
              :key="index"
              :to="localePath('/watch/' + item.id)"
            >
              {{ item.id }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const info = await axios.get(
      "https://api.amvstr.ml/api/anime/info/" + params.id
    );
    return {
      info: info.data,
    };
  },
  data() {
    return {
      info: null,
      refrshld: false,
      snackbar: false,
      b_add: false,
      eplists: [],
    };
  },
  async fetch(){
    const eplist = await this.$axios.$get('https://api.amvstr.ml/api/anime/episodelist/' + this.info.anime_id);
    this.eplists = eplist.episodes;
  },
  head() {
    return {
      title: `${this.info.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.info.synopsis,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.info.img,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.info.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${this.info.synopsis.split("Plot Summary:")[1]}`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.info.img,
        },
      ],
    };
  },
  created() {
    if (process.client) {
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      if (bookmarks == null) {
        bookmarks = [];
      }
      bookmarks.forEach((item) => {
        if (item.id === this.info.anime_id) {
          this.b_add = true;
        }
      });
    }
  },
  methods: {
    bookmark_add() {
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      if (bookmarks == null) {
        bookmarks = [];
      }
      let exist = false;
      bookmarks.forEach((item) => {
        if (item.id === this.info.anime_id) {
          exist = true;
        }
      });
      if (exist) {
        this.b_add = true;
        this.snackbar = true;
      } else {
        bookmarks.push({
          id: this.info.anime_id,
          title: this.info.title,
          img: this.info.img,
        });
        if (process.client) {
          localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        }
        this.b_add = true;
      }
    },
  },
};
</script>

<style>
.embed-responsive {
  height: 480px;
  width: 100%;
}
.txtbrk {
  word-break: break-all;
}
</style>
