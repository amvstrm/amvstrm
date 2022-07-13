<template>
  <div>
    <v-card class="pa-6">
      <v-card-title>
        <span class="headline">Anime Genres</span>
      </v-card-title>
      <v-list>
        <v-list-item v-for="genre in genres" :key="genre.id" :to="'/genres/' + genre.id">
          <v-list-item-content>
            <v-list-item-title>{{ genre.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      // popular: null,
      // page: 1,
      // length: 100,
      genres: [
        { title: 'Action', id: 'action' },
        { title: 'Adventure', id: 'adventure' },
        { title: 'Cars', id: 'cars' },
        { title: 'Comedy', id: 'comedy' },
        { title: 'Dementia', id: 'dementia' },
        { title: 'Demons', id: 'demons' },
        { title: 'Drama', id: 'drama' },
        { title: 'Ecchi', id: 'ecchi' },
        { title: 'Fantasy', id: 'fantasy' },
        { title: 'Game', id: 'game' },
        { title: 'Harem', id: 'harem' },
        { title: 'Historical', id: 'historical' },
        { title: 'Horror', id: 'horror' },
        { title: 'Josei', id: 'josei' },
        { title: 'Kids', id: 'kids' },
        { title: 'Magic', id: 'magic' },
        { title: 'Martial Arts', id: 'martialarts' },
        { title: 'Mecha', id: 'mecha' },
        { title: 'Military', id: 'military' },
        { title: 'Music', id: 'music' },
        { title: 'Mystery', id: 'mystery' },
        { title: 'Parody', id: 'parody' },
        { title: 'Police', id: 'police' },
        { title: 'Psychological', id: 'psychological' },
        { title: 'Romance', id: 'romance' },
        { title: 'Samurai', id: 'samurai' },
        { title: 'School', id: 'school' },
        { title: 'Sci-Fi', id: 'scifi' },
        { title: 'Seinen', id: 'seinen' },
        { title: 'Shoujo', id: 'shoujo' },
        { title: 'Shoujo Ai', id: 'shoujoai' },
        { title: 'Shounen', id: 'shounen' },
        { title: 'Shounen Ai', id: 'shounenai' },
        { title: 'Slice of Life', id: 'sliceoflife' },
        { title: 'Space', id: 'space' },
        { title: 'Sports', id: 'sports' },
        { title: 'Super Power', id: 'superpower' },
        { title: 'Supernatural', id: 'supernatural' },
        { title: 'Thriller', id: 'thriller' },
        { title: 'Vampire', id: 'vampire' },
        { title: 'Yaoi', id: 'yaoi' },
        { title: 'Yuri', id: 'yuri' },
      ],
    }
  },
  head() {
    return {
      title: 'Genres',
      meta: [
        {
          name: 'description',
          content: 'Anime Genres',
        },
        { name: 'og:image', content: '/seoimg.png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:alt', content: 'amvstrm' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Genres | amvstrm' },
        {
          name: 'og:description',
          content: 'All Anime Genres',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://amvstr.ml/genres' },
        { name: 'twitter:title', content: 'Genres | amvstrm' },
        { name: 'twitter:description', content: 'All Anime Genres' },
        { name: 'twitter:image', content: '/seoimg.png' },
      ],
    }
  },
  async mounted() {
    // await this.onPageChange();
  },
  methods: {
    //   getPopular: function () {
    //     axios
    //       .get(`https://gogoanime-zeta.vercel.app/api/popular/${this.page}`)
    //       .then((res) => {
    //         this.popular = res.data.popular;
    //       })
    //       .catch((err) => {
    //         // eslint-disable-next-line no-console
    //         console.log(err);
    //       });
    //   },
    //   onPageChange() {
    //     this.getPopular();
    //   },
    // },
  },
}
</script>
<style>
.media-container {
  height: 18rem;
  width: 12.2rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
}

@media screen and (max-width: 600px) {
  .media-container {
    width: 10rem;
    height: 15rem;
  }
}
</style>
