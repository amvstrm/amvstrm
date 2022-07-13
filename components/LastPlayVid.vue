<template>
  <v-alert
    v-if="showBanner"
    color="grey"
    dismissible
    elevation="4"
    text
    icon="mdi-play"
  >
    <h5>Continue Watching :</h5>
    <p>
      <router-link :to="'/watch/' + id">
        {{ title }}
      </router-link>
    </p>
  </v-alert>
</template>
<script>
export default{
  data(){
    return {
      id: null,
      title: null,
      showBanner: false,
    }
  },
  created(){
    if (process.client){
      // get lastOpenAnime from localStorage
      const lastOpenAnime = localStorage.getItem('lastOpenAnime')
      if (lastOpenAnime != null){
        const lastOpenAnimeObj = JSON.parse(lastOpenAnime)
        this.id = lastOpenAnimeObj.id
        this.title = lastOpenAnimeObj.title
        this.showBanner = true
      }
    }
  }
}
</script>
