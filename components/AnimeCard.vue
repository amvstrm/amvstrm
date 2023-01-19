<template>
  <router-link :to="path">
    <div class="tw-p-0 tw-mx-2 md:tw-p-2 md:tw-mx-6 tw-flex tw-flex-col tw-items-center">
      <img class="tw-w-[140px] tw-h-[200px] md:tw-w-[160px] md:tw-h-[240px] tw-rounded-md" :src="imagesrc" :alt="imagealt" />
      <v-skeleton-loader
        v-if="!imagesrc"
        class="card-img"
        type="image"
      ></v-skeleton-loader>
      <h4 class="tw-w-[175px] tw-text-ellipsis tw-overflow-hidden tw-whitespace-nowrap tw-my-1 tw-text-center">{{ title }}</h4>
      <span class="card-txt1 tw-my-1">{{ text }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: {
    imagesrc: {
      type: String,
      default: '',
    },
    imagealt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '/404',
    },
  },
}
</script>

<style scoped>
.card {
  padding: 1rem;
  /* background-color: #262626;
  border-radius: 4px; */
  
  width: 100%;
}
.card:hover {
  background-color: #3b3b3b;
  transition: 0.1s 0.1s ease-in-out;
}
.card-img {
  width: 175px;
  height: 240px;
  object-fit: cover;
}
.card-txt {
  color: #ffffff;
  margin-top: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 175px;
  overflow: hidden;
}
.card-txt1 {
  color: #a6a6a6;
}
@media (max-width: 991px) {
}
@media (max-width: 767px) {
  .card-img {
    width: 145px;
  }
  .card-txt {
    font-size: 1.2rem;
    width: 145px;
  }
  .card-txt1 {
    font-size: 14px;
  }
}
@media (max-width: 479px) {
  .card {
    padding: 1rem;
  }
  .card-img {
    width: 125px;
  }
  .card-txt {
    font-size: 1rem;
    width: 125px;
  }
  .card-txt1 {
    font-size: 12px;
  }
}
</style>
