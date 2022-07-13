<template>
  <v-card
    :img="img"
    :to="localePath('/anime/' + id)"
    style="box-shadow: 0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset"
  >
    <p class="txt">{{ title }}</p>
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

/* make media-container card match the size of the container*/
/* .media-container {
  height: 18rem;
  width: 12.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
*/
.txt {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
} 
@media screen and (max-width: 600px) {
  .txt {
    font-size: 12px;
    width: 100px;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .txt {
    font-size: 14px;
    width: 140px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .txt {
    font-size: 14px;
  }
}
/* xs	< 600px
   sm	600px > < 960px
   md	960px > < 1264px*
   lg	1264px > < 1904px*
   xl	> 1904px* */
/* 


/* sm 

/* md *


/* lg */
/* @media screen and (min-width: 1264px) and (max-width: 1904px) {
  .media-container {
    width: 12rem;
    height: 16rem;
  }
  .media-container > p {
    font-size: 20px;
    width: 100%;
  }
}
/* 
/* xl 
@media screen and (min-width: 1904px) {
  .media-container {
    width: 20rem;
    height: 24rem;
  }
  .media-container > p {
    font-size: 24px;
    width: 100%;
  }
} */

</style>