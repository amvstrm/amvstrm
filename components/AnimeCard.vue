<template>
  <v-card
    class="media-container"
    :img="img"
    :to="localePath('/anime/' + id)"
    style="box-shadow: 0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset"
  >
    <p class="txt">{{ title }}</p>
    <span style="font-style: italic; font-size: 12px">{{
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
.txt {
  /* overflow text */
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 150px; 
  overflow: hidden;
}
@media screen and (max-width: 600px) {
  .txt {
    width: 120px;
  }
}

@media screen and (max-width: 450px) {
  .txt {
    width: 90px;
  }
}
</style>