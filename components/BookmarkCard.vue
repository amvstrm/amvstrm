<template>
  <v-card
    :style="{
      'box-shadow': '0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset',
      'background-position': 'center',
      'background-image': `url(${img})`,
      'background-size': 'cover',
    }"
  >
    <router-link :to="'/anime/' + id">
      <p class="txt">
        {{ title }}
      </p>
    </router-link>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" elevation="4" fab small @click="clickdata()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    clickdata() {
      this.$emit('clickdata')
    },
  },
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
