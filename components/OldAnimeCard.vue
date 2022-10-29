<template>
  <v-card
    :img="img"
    :to="localePath('/anime/' + id)"
    style="box-shadow: 0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset"
  >
    <p class="animetext">{{ title }}</p>
    <span style="font-style: italic; font-size: 12px;">{{
      episode
    }}</span>
  </v-card>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    episode: {
      type: String,
      required: false,
    },
  }
}
</script>
<style>
.animetext {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 150px; 
  overflow: hidden;
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .animetext {
    width: 120px;
    font-size: 12px;
  }
}

@media screen and (max-width: 450px) {
  .animetext {
    width: 90px;
    font-size: 12px;
  }
}
</style>