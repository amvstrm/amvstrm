<template>
  <div
    class="card"
    :style="{
      '--color-txt': animeColor,
    }"
  >
    <NuxtLink  v-bind="props" :to="'/anime/' + id">
      <img class="card-img" :src="imgsrc" :alt="imgalt" />
    </NuxtLink>
    <NuxtLink class="card-title" :to="'/anime/' + id">
      <span>{{ title }} </span>
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  imgsrc: String,
  imgalt: String,
  animeColor: String || "white",
  id: String,
});
const show = ref(false);
</script>
<style>
.card {
  width: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.card-img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
}

.video-info {
  padding: 1rem;
}

.card-title { 
  color: white;
  font-weight: 600;
  line-height: 21px;
  margin-top: 10px;
  overflow: hidden;
  transition: color 0.2s ease;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card-title:hover {
  /* hover animation */
  color: var(--color-txt);
}

.video-date {
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 0;
}

@media (max-width: 1280px) {
  .card-img {
    width: auto;
    height: 210px;
  }
  .card {
    margin: 1rem 1rem 1rem 0rem;
  }
}
</style>
