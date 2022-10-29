<template>
  <v-sheet>
    <v-alert
      v-show="showBanner"
      color="grey"
      dismissible
      elevation="4"
      text
      icon="mdi-play"
      transition="slide-y-transition"
      transition-duration="300"
    >
      <h4>Continue Watching :</h4>
      <p>
        <router-link :to="localePath('/watch/' + id)">
          {{ title }}
        </router-link>
      </p>
    </v-alert></v-sheet
  >
</template>
<script>
export default {
  data() {
    return {
      id: null,
      title: null,
      showBanner: false,
    }
  },
  created() {
    if (process.client) {
      // get lastOpenAnime from localStorage
      const lastOpenAnime = localStorage.getItem('lastOpenAnime')
      if (lastOpenAnime != null) {
        const lastOpenAnimeObj = JSON.parse(lastOpenAnime)
        this.id = lastOpenAnimeObj.id
        this.title = lastOpenAnimeObj.title
        this.showBanner = true
      }
    }
  },
}
</script>
