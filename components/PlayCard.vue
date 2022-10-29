<template>
  <v-card
    :img="img"
    :to="localePath('/watch/' + episodeid)"
    style="box-shadow: 0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset"
  >
    <p class="playtext mb-1">{{ title }}</p>
    <span style="font-style: italic; font-size: 11.5px">{{
      subordub
    }}</span>
    <span style="font-style: italic; font-size: 11.5px">Episode {{
      episode
    }}</span>
    <v-btn class="ma-2" elevation="4" dark fab x-small>
      <v-icon>mdi-play</v-icon>
    </v-btn>
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
    episode: {
      type: String,
      required: true,
    },
    episodeid: {
      type: String,
      required: true,
    },
    subordub: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style>
.playtext {
  /* overflow text */
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 150px; 
  overflow: hidden;
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .playtext {
    width: 120px;
    font-size: 13px;
  }
}

@media screen and (max-width: 450px) {
  .playtext {
    width: 90px;
    font-size: 12.5px;
  }
}

</style>