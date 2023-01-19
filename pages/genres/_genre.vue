<template>
  <div>
    <h2 class="ma-5 tw-flex"><v-btn icon to="/genres">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn> Genre : {{ capitalizeFirstLetter($route.params.genre) }}</h2>
    <div
      class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
    >
      <div v-for="data in genre" :key="data.id">
        <AnimeCard
          :imagesrc="data.img"
          :title="data.title"
          :path="localePath('/watch/' + data.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      genre: null,
      capitalizeFirstLetter: (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
      },
    }
  },
  head() {
    return {
      title: this.capitalizeFirstLetter(this.$route.params.genre),
      meta: [
        {
          name: 'description',
          content: this.capitalizeFirstLetter(this.$route.params.genre) + ' Genre on amvstr.ml.',
        },
        { name: 'og:image', content: '/seoimg.png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:alt', content: 'amvstrm' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: `${this.capitalizeFirstLetter(this.$route.params.genre)} | amvstrm` },
        {
          name: 'og:description',
          content: `${this.capitalizeFirstLetter(this.$route.params.genre)} Genre on amvstr.ml.`,
        },
        { name: 'og:url', content: 'https://amvstrm.com/genres' },
        {
          name: 'og:site_name',
          content: `${this.capitalizeFirstLetter(this.$route.params.genre)} | amvstrm`,
        },
        { name: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://amvstr.ml/genres' },
        {
          name: 'twitter:title',
          content: `${this.capitalizeFirstLetter(this.$route.params.genre)} | amvstrm`,
        },
        {
          name: 'twitter:description',
          content: `${this.capitalizeFirstLetter(this.$route.params.genre)} Genres on amvstr.ml.`,
        },
      ],
    }
  },
  async mounted() {
    await this.onPageChange()
  },
  methods: {
    getMovie: function () {
      axios
        .get(
          `${process.env.API_URL}/api/v1/genre/${this.$route.params.genre}/1`
        )
        .then((res) => {
          this.genre = res.data.anime
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },
    onPageChange() {
      this.getMovie()
    },
  },
}
</script>
<style>
.media-container {
  height: 16rem;
  width: 11rem;
  display: flex !important;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
}
.grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 5px;
  margin-top: 20px;
  justify-items: center;
}
.grid-item {
  margin-bottom: 20px;
}
@media screen and (max-width: 600px) {
  .media-container {
    width: 9.5rem;
    height: 14rem;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 400px) {
  .media-container {
    width: 8rem;
    height: 12rem;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
