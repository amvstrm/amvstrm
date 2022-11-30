<template>
  <div>
    <h2 class="ma-5">{{$t('movieanime')}}</h2>
    <div
      class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
    >
      <div v-for="data in movie" :key="data.id" class="grid-item mx-5">
        <AnimeCard
          :imagesrc="data.img"
          :title="data.title"
          :path="localePath('/anime/' + data.id)"
        />
      </div>
    </div>
    <div class="text-center mx-3">
      <p>Page: {{ page }}</p>
      <v-pagination
        v-model="page"
        color="green darken-2"
        class="my-4"
        :length="length"
        :total-visible="10"
        @input="onPageChange"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movie: null,
      page: 1,
      length: 90,
    }
  },
  head() {
    return {
      title: 'Anime Movies',
      link: [
        { rel: 'canonical', href: window.location.href },
      ],
      meta: [
        {
          name: 'description',
          content: 'Anime Movies',
        },
        { name: 'og:image', content: '/seoimg.png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:alt', content: 'amvstrm' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Anime Movies | amvstrm' },
        {
          name: 'og:description',
          content: 'All the most popular anime movies on amvstr.ml.',
        },
        { name: 'og:url', content: 'https://amvstrm.com/movies' },
        { name: 'og:site_name', content: 'Anime Movies | amvstrm' },
        { name: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://amvstr.ml/movies' },
        { name: 'twitter:title', content: 'Anime Movies | amvstrm' },
        {
          name: 'twitter:description',
          content: 'All the most popular anime movies on amvstr.ml.',
        },
      ],
    }
  },
  async mounted() {
    await this.onPageChange()
  },
  methods: {
    getMovie: async function()  {
      const data = await this.$axios.$get(`https://api.amvstr.ml/api/v1/movies/${this.page}`);
      this.movie = data.movies;
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
