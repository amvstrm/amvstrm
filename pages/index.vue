<template>
  <div>
    <div class="tw-hidden md:tw-block">
      <v-tabs v-model="animetab" grow show-arrows color="green-darken1">
        <v-tab href="#recent"> {{ $t('recentfr') }} </v-tab>
        <v-tab href="#popular"> {{ $t('popularfr') }} </v-tab>
        <v-tab href="#upcoming"> {{ $t('upcoming') }} </v-tab>
      </v-tabs>
      <div v-if="$fetchState.pending" class="tw-h-[100vh]">
        <LoadingFetch />
      </div>
      <div v-else-if="$fetchState.error" class="tw-h-[100vh]">
        <h3>Data not available!</h3>
      </div>
      <v-tabs-items v-else v-model="animetab" class="bgtransp" touchless>
        <div>
          <v-tab-item value="recent">
            <div
              class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
            >
              <div v-for="data in recentall" :key="data.id">
                <!-- <PlayCard
                class="media-container"
                :img="data.img"
                :title="data.title"
                :episode="data.episode"
                :episodeid="data.episode_id"
                :subordub="data.subOrDub"
              /> -->
                <AnimeCard
                  :imagesrc="data.img"
                  :title="data.title"
                  :text="'Episode ' + data.episode"
                  :path="localePath('/watch/' + data.episode_id)"
                />
              </div>
              <div class="d-flex align-center"></div>
            </div>
          </v-tab-item>
          <v-tab-item value="popular">
            <div
              class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
            >
              <div v-for="data in popular" :key="data.id">
                <AnimeCard
                  :imagesrc="data.img"
                  :title="data.title"
                  :path="localePath('/anime/' + data.id)"
                />
              </div>
            </div>
          </v-tab-item>
          <v-tab-item value="upcoming">
            <div
              class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
            >
              <div v-for="data in newseason" :key="data.id">
                <AnimeCard
                  :imagesrc="data.img"
                  :title="data.title"
                  :path="localePath('/anime/' + data.id)"
                />
              </div>
            </div>
          </v-tab-item>
        </div>
      </v-tabs-items>
    </div>
    <div class="tw-block md:tw-hidden">
      <div class="tw-my-5 tw-mx-5 md:tw-mx-10">
        <h2 class="tw-my-5">{{ $t('recentfr') }}</h2>
        <div v-if="$fetchState.pending">
          <LoadingFetch />
        </div>
        <v-row>
          <v-col class="media-scrolling">
            <div v-for="data in recentall" :key="data.id">
              <AnimeCard
                :imagesrc="data.img"
                :title="data.title"
                :text="'Episode ' + data.episode"
                :path="localePath('/watch/' + data.episode_id)"
              />
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="tw-my-5 tw-mx-5 md:tw-mx-10">
        <v-row justify="space-between">
          <v-col cols="auto">
            <h2>{{ $t('popularfr') }}</h2>
          </v-col>
          <v-col cols="auto">
            <v-btn dark to="/popular"> More </v-btn>
          </v-col>
        </v-row>
        <div v-if="$fetchState.pending">
          <LoadingFetch />
        </div>
        <v-row>
          <v-col class="media-scrolling">
            <div v-for="data in popular" :key="data.id">
              <AnimeCard
                :imagesrc="data.img"
                :title="data.title"
                :path="localePath('/anime/' + data.id)"
              />
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="tw-my-5 tw-mx-5 md:tw-mx-10">
        <h2 class="tw-my-5">{{ $t('upcoming') }}</h2>
        <div v-if="$fetchState.pending">
          <LoadingFetch />
        </div>
        <v-row>
          <v-col class="media-scrolling">
            <div v-for="data in newseason" :key="data.id">
              <AnimeCard
                :imagesrc="data.img"
                :title="data.title"
                :path="localePath('/anime/' + data.id)"
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="tw-sticky tw-z-[1] tw-bottom-1">
      <LastPlayVid />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recentall: null,
      topairing: null,
      popular: null,
      newseason: null,
      cmodel: 0,
      animetab: null,
    }
  },
  async fetch() {
    const recentall = await this.$axios.$get(`/api/v1/recentrelease/all/1`)
    const newseason = await this.$axios.$get(`/api/v1/newseasons/1`)
    const popular = await this.$axios.$get(`/api/v1/popular/1`)
    this.recentall = recentall.anime
    this.popular = popular.popular
    this.newseason = newseason.anime
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'anime, amvstreaming, free anime, amvstrm, amvstr, amvstrm.ml, amvstrm anime',
        },
        // og
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amvstr.ml/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home | amvstrm',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'seoimg.png',
        },
        // twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://amvstr.ml/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Home | amvstrm',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/seoimg.png',
        },
      ],
    }
  },
  fetchOnServer: false,
}
</script>

<style>
.media-scrolling {
  --_spacer: 1rem;
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

.media-scrolling > * {
  scroll-snap-align: start;
}

.xs-grid-cols-2 {
  display: grid;
}
@media screen and (max-width: 768px) {
  .xs-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
