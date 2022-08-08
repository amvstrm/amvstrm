<template>
  <div>
    <v-dialog v-model="sharedialog" width="500">
      <v-card>
        <v-card-title> Share this <v-icon>mdi-share</v-icon> </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="link"
            label="Link"
            prepend-icon="mdi-link"
            readonly
          ></v-text-field>
          <v-btn class="ma-2" color="primary" @click="copytoClipboard">
            {{ btntxtcopy }}
          </v-btn>
          <v-btn class="ma-2" color="primary" @click="sharetoSocialfb">
            <v-icon>mdi-facebook</v-icon>
            Facebook
          </v-btn>
          <v-btn class="ma-2" color="primary" @click="sharetoSocialtwt">
            <v-icon>mdi-twitter</v-icon>
            Twitter
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="episodedialog" width="500" height="400">
      <v-card class="pa-5">
        <h2 class="pa-2">{{ $t('episode_all') }}</h2>
        <v-list>
          <v-list-item
            v-for="(item, index) in episode_array"
            :key="index"
            :to="localePath('/watch/' + item.id)"
          >
            <v-list-item-content>
              <v-list-item-title> {{ $t('episode') }} </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.id.split('-episode-')[1] }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    <v-dialog v-model="iframeoptions" width="500">
      <v-card>
        <v-card-title>
          <v-icon>mdi-cog</v-icon>
          Video Settings
        </v-card-title>
        <v-card-text>
          <v-radio-group v-model="iframe_type">
            <v-radio
              :value="0"
              label="Plyr (Recommended)"
              color="primary"
            ></v-radio>
            <v-radio
              :value="1"
              label="nsPlayer (Legacy)"
              color="primary"
            ></v-radio>
            <v-radio
              :value="2"
              label="External (GOGOLOAD)"
              color="primary"
            ></v-radio>
          </v-radio-group>
          <div v-if="iframe_type === 2">
            External player may contain ads. We recommend using Plyr/nsPlayer
            and External using ads blocker instead.
            <v-checkbox
              v-model="putsandbox"
              label="Enable Sandbox (Won't Work For Google Chrome)"
              color="primary"
            ></v-checkbox>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="saveVidSettingAction"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-responsive :aspect-ratio="16 / 9">
      <iframe
        id="ifrencr"
        :src="iframe_src"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
      >
      </iframe>
    </v-responsive>
    <v-col justify="center" align="center">
      <v-card>
        <v-row justify="space-between" class="ma-2 align-center">
          <v-col cols="auto" flex>
            <router-link :to="localePath(`/anime/${vidcdn.id}`)">
              <h3>{{ info.title }}</h3>
            </router-link>
          </v-col>
          <v-col cols="auto">
            <v-btn
              class="mr-1"
              color="green darken-2"
              dark
              @click="episodedialog = true"
            >
              {{ $t('episode') }}
              {{ vidcdn.episode }}
            </v-btn>
            <v-btn
              elevation="2"
              :href="'https://api-server-2.amvstr.ml/api/download/' + paramsid"
              target="_blank"
            >
              <v-icon>mdi-download</v-icon>
              Download
            </v-btn>
            <v-btn elevation="2" @click="sharedialog = true">
              <v-icon>mdi-share</v-icon>
              Share
            </v-btn>
            <v-btn elevation="2" fab x-small @click="iframeoptions = true">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="ma-2 pa-2">
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
    const paramsid = params.id
    // const infoo = await axios.get(`/api/anime/info/${params.id.split('-episode-')[0]}`)
    const vidcdn = await axios.get(
      `https://api.amvstr.ml/api/stream/play?id=${paramsid}`
    )
    const eplist = await axios.get(
      `https://api.amvstr.ml/api/anime/episodelist/${
        paramsid.split('-episode-')[0]
      }`
    )
    return {
      info: eplist.data,
      vidcdn: vidcdn.data,
      episode_array: eplist.data.episodes,
      paramsid,
    }
  },
  data() {
    return {
      episode_array: [],
      refrshld: false,
      vidcdn: null,
      overlay: false,
      ephere: null,
      info: null,
      paramsid: '',
      episodedialog: false,
      iframeoptions: false,
      iframe_type: 0,
      iframe_src: '',
      link: '',
      putsandbox: false,
      sharedialog: false,
      sandboxattr: '',
      btntxtcopy: 'Copy',
      btnclicked: 0,
      sharetoSocialfb: () => {
        const url = this.link
        const title = this.info.title
        const fb = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
        window.open(fb, '_blank')
      },
      sharetoSocialtwt: () => {
        const url = this.link
        const title = this.info.title
        const twt = `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        window.open(twt, '_blank')
      },
    }
  },
  head() {
    return {
      title: `Watch ${this.info.title} Episode ${
        this.paramsid.split('-episode-')[1]
      }`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Watch and Stream ${this.info.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } Right Now On amvstr.ml`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://amvstr.ml/watch/${this.paramsid}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Watch ${this.vidcdn.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } On amvstr.ml | amvstrm`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Watch and Stream ${this.vidcdn.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } Right Now On amvstr.ml`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://gogocdn.net/cover/${this.info.id}.png`,
        },
        // <!-- Twitter -->
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://amvstr.ml/watch/${this.paramsid}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Watch ${this.info.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } On amvstr.ml | amvstrm`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Watch and Stream ${this.info.title} Episode ${
            this.paramsid.split('-episode-')[1]
          } Right Now On amvstr.ml`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://gogocdn.net/cover/${this.info.id}.png`,
        },
      ],
    }
  },
  // async beforeMount() {
  //   await this.fetchdata()
  // },
  async mounted() {
    await this.storelastOpenAnime()
    await this.defaultVidPlayer()
  },
  created: function () {
    this.share()
  },
  methods: {
    share() {
      this.link = `${
        window.location.href
      }?utm_source=shared_url&utm_medium=${encodeURIComponent(
        this.info.title
      )}&utm_campaign=${encodeURIComponent(
        this.info.title + ' Episode ' + this.paramsid.split('-episode-')[1]
      )}`
    },
    copytoClipboard() {
      if (process.client) {
        const link = `${
          window.location.href
        }?utm_source=shared_url&utm_medium=${encodeURIComponent(
          this.info.title
        )}&utm_campaign=${encodeURIComponent(
          this.info.title + ' Episode ' + this.paramsid.split('-episode-')[1]
        )}`
        navigator.clipboard.writeText(link)
        this.btntxtcopy = 'Copied!'
      }
    },
    storelastOpenAnime() {
      if (process.client) {
        const data = JSON.stringify({
          title:
            this.info.title + ' Episode ' + this.paramsid.split('-episode-')[1],
          id: this.paramsid,
          episode: this.paramsid.split('-episode-')[1],
        })
        localStorage.setItem('lastOpenAnime', data)
      }
    },
    saveVidSettingAction() {
      if (this.iframe_type === 0) {
        this.iframe_src = this.vidcdn.url
        this.iframeoptions = false
        this.putsandbox = false
      } else if (this.iframe_type === 1) {
        this.iframe_src = this.vidcdn.nspl_url
        this.iframeoptions = false
        this.putsandbox = false
      } else if (this.iframe_type === 2) {
        const iframeurl = axios.get(
          `https://api.amvstr.ml/api/stream/iframe/${this.paramsid}`
        )
        if (this.putsandbox === false) {
          iframeurl.then((res) => {
            this.iframe_src = `//${res.data.servers[0].iframe}`
          })

          this.iframeoptions = false
        } else if (this.putsandbox === true) {
          iframeurl.then((res) => {
            this.iframe_src = `//${res.data.servers[0].iframe}`
          })
          this.iframeoptions = false
          if (process.client) {
            const iframe = document.getElementById('ifrencr')
            iframe.sandbox =
              'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'
          }
        }
      }
    },
    defaultVidPlayer() {
      this.iframe_src = this.vidcdn.url
    },
  },
}
</script>
