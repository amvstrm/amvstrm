<template>
  <div class="xl:tw-mx-24 lg:tw-mx-16 md:tw-mx-8 sm:mx-4 xs:mx-2">
    <v-alert
      v-model="showAlert"
      icon="mdi-close"
      text
      color="red darken-1"
      dismissable
    >
      {{ $t('alert100bookmark') }}
    </v-alert>
    <div>
      <div class="banner">
        <v-img :src="info.img" height="210px" style="filter: blur(10px)" />
        <div class="container">
          <div class="overlapbanner mx-5">
            <img
              class="img"
              :src="info.img"
              alt="img"
              style="position: static"
            />
            <div class="bookmarkbtnaction tw-my-2">
              <v-btn
                v-if="bookmarkNoExist"
                color="yellow"
                outlined
                :disabled="bklimit"
                @click="addBookmarks(info.anime_id, info.img, info.title)"
              >
                <v-icon>mdi-bookmark</v-icon>
                {{ $t('bookmark') }}
              </v-btn>
              <v-btn
                v-if="bookmarkExist"
                color="grey darken-1"
                outlined
                @click="removeBookmarks(info.anime_id)"
              >
                <v-icon>mdi-bookmark-outline</v-icon>
                {{ $t('unbookmark') }}
              </v-btn>
            </div>
          </div>
          <div class="content mx-5">
            <h1 class="headingtitle tw-text-3xl tw-font-bold">
              {{ info.title }}
            </h1>
            <p>{{ info.synopsis }}</p>
          </div>
        </div>
      </div>
    </div>
    <v-card class="ma-4 pa-5">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              <v-chip
                :color="
                  $route.params.id.includes('-dub')
                    ? 'orange darken-1'
                    : 'green darken-1'
                "
                label
                text-color="white"
              >
                <v-icon left> mdi-label </v-icon>
                {{ $route.params.id.includes('-dub') ? 'Dub' : 'Sub' }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('info.release') }}</v-list-item-title>
            <v-list-item-subtitle>{{ info.released === 0 || info.released === null ? 'No data' : info.released }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('info.status') }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-chip v-if="info.status === 'Completed'" color="green darken-1" label>
                Completed
              </v-chip>
              <v-chip v-if="info.status === 'Upcoming'" color="yellow" text-color="black" label>
                Upcoming
              </v-chip>
              <v-chip v-if="info.status === 'Ongoing'" color="red darken-1" text-color="white" label>
                Ongoing
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('info.other_name') }}</v-list-item-title>
            <v-list-item-subtitle 
              v-for="(on, i) in info.otherName.split(',' && ';')" 
              :key="i">
              {{ on }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ $t('info.totalep') }}</v-list-item-title>
            <v-list-item-subtitle>{{
              info.totalEpisodes
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ $t('info.genres') }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-chip-group show-arrows>
                <v-chip
                  v-for="(item, index) in info.genres"
                  :key="index"
                  class="tw-mt-1"
                  link
                  :to="'/genres/' + item"
                >
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="ma-4 pa-4">
      <div class="py-2">
        <h2 class="tw-text-2xl tw-font-bold tw-mx-1">
          {{ $t('episode_all') }}
        </h2>
        <LoadingFetch v-if="$fetchState.pending" />
        <p v-else-if="eplists.length == 0" class="mt-2">
          Episode is not available
        </p>
        <v-list v-else>
          <v-list-item
            v-for="(item, index) in eplists"
            :key="index"
            :to="localePath('/watch/' + item.id)"
          >
            <v-list-item-content>
              <v-list-item-title> Episode </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.id.split('-episode-')[1] }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const infoo = await axios.get(
      `https://api.amvstr.ml/api/v1/anime/info/${params.id}`
    )
    return {
      info: infoo.data,
    }
  },
  data() {
    return {
      info: null,
      refrshld: false,
      snackbar: false,
      showAlert: false,
      bklimit: false,
      ratingvalue: 0,
      eplists: [],
      bookmarkNoExist: true,
      bookmarkExist: false,
    }
  },
  async fetch() {
    const ep = await this.$axios.$get(
      `/api/v1/anime/episodelist/${this.info.anime_id}`
    )
    this.eplists = ep.episodes
  },
  head() {
    return {
      title: this.info.title,
      link: [{ rel: 'canonical', href: window.location.href }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.title,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.title + ',' + this.info.otherName,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://amvstr.ml/anime/${this.info.anime_id}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.info.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.info.title} - ${this.info.synopsis}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.info.img,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://amvstr.ml/anime/${this.info.anime_id}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.info.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `${this.info.title} - ${this.info.synopsis}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.info.img,
        },
      ],
    }
  },
  created() {
    if (process.client) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
      // go through the bookmarks each and check if the anime is in the bookmarks
      if (bookmarks) {
        bookmarks.forEach((item) => {
          if (item.id === this.info.anime_id) {
            this.bookmarkNoExist = false
            this.bookmarkExist = true
          }
        })
      } else {
        this.bookmarkNoExist = true
        this.bookmarkExist = false
      }
    }
  },
  methods: {
    addBookmarks(id, img, title) {
      if (process.client) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        bookmarks.push({
          id,
          title,
          img,
        })
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        if (bookmarks.length > 100) {
          this.showAlert = true
          this.bklimit = true
          this.bookmarkExist = false
          this.bookmarkNoExist = false
          bookmarks.pop()
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        } else {
          this.bookmarkExist = true
          this.bookmarkNoExist = false
        }
      }
    },
    removeBookmarks(id) {
      if (process.client) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        bookmarks.forEach((item, index) => {
          if (item.id === id) {
            bookmarks.splice(index, 1)
          }
        })
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        this.bookmarkExist = false
        this.bookmarkNoExist = true
      }
    },
  },
}
</script>

<style>
.headingtitle {
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 30px;
}
.container {
  display: grid;
  grid-template-columns: 200px auto;
  position: relative;
}
.banner {
  background-repeat: no-repeat;
  background-size: cover;
}
.overlapbanner {
  position: relative;
  margin-top: -100px;
}
.img {
  background-color: rgba(212, 230, 245, 0.5);
  border-radius: 4px;
  box-shadow: 0 0 29px rgba(49, 54, 68, 0.25);
  width: 100%;
}
.bookmarkbtnaction {
  display: flex;
  flex-direction: column;
  width: auto;
}
@media (max-width: 800px) {
  .header {
    display: block;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .img {
    width: 195px;
  }
  .heading {
    line-height: 1.2;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .bookmarkbtnaction {
    position: initial;
  }
  .overlapbanner {
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
