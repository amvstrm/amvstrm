<template>
  <div class="mx-lg-16 mx-md-8 mx-sm-6 mx-xs-0">
    <v-col justify="center" align="center">
      <LoadingFetch v-if="$fetchState.pending"/>
      <v-card v-else max-width="lg">
        <v-responsive :aspect-ratio="16 / 9">
          <iframe
            id="ifrencr"
            :src="vidcdn.url"
            frameborder="0"
            allowfullscreen
            width="100%"
            height="100%"
          >
          </iframe>
        </v-responsive>
        <v-row justify="start" class="ma-2 align-center">
          <v-col>
            <h3>{{ info.title }}</h3>
          </v-col>
          <v-col cols="auto">
            {{ $t('episode') }}
            {{ vidcdn.episode }}
          </v-col>
          <v-col cols="auto">
            <v-btn
              elevation="2"
              fab
              :href="'https://api.amvstr.ml/api/download/' + paramsid"
              target="_blank"
            >
              <v-icon>mdi-download</v-icon>
            </v-btn>
            <v-btn elevation="2" fab href="#cmt" @click="showDisqus = true">
              <v-icon>mdi-comment</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col v-if="showDisqus">
      <v-card id="cmt" class="ma-2 pa-2" >
        <div class="ma-4">
          <Disqus />
        </div>
      </v-card>
    </v-col>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const infoo = await axios.get(
      `https://api.amvstr.ml/api/anime/info/${params.id.split('-episode-')[0]}`
    )
    const paramsid = params.id
    return {
      info: infoo.data,
      // vidcdn: vidcdn.data,
      paramsid,
    }
  },
  data() {
    return {
      info: null,
      episode_array: [],
      refrshld: false,
      snackbar: false,
      infotext: '',
      vidcdn: null,
      overlay: false,
      ephere: null,
      paramsid: '',
      showDisqus: false,
    }
  },
  fetchOnServer: true,
  async fetch() {
    const vidcdn = await this.$axios.$get(
      `https://api.amvstr.ml/api/stream/play?id=${this.$route.params.id}`
    )
    this.vidcdn = vidcdn
    // this.info = infoo.data;
  },
  head() {
    return {
      title: `Watch ${this.info.title} Episode ${
        this.paramsid.split('-episode-')[1]
      } On AMVSTRM`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Watch and Stream ${this.info.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } Right Now On amvstr.ml`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.info.img,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Watch ${this.info.title} On AMVSTRM`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Watch and Stream ${this.info.title} Episode  Right Now On amvstr.ml`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.info.img,
        },
      ],
    }
  },
  async mounted() {},
  created: function () {
    this.showDisqusCMT()
  },
  methods: {
    refrsh() {
      this.refrshld = true
      window.location.reload()
    },
    showDisqusCMT() {
      this.showDisqus = false
    },
  },
}
</script>
<style>
.embed {
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
@media screen and (max-width: 600px) {
  .embed {
    overflow: hidden;
    width: 100%;
    height: 120%;
    margin-bottom: 2rem;
  }
}
</style>
