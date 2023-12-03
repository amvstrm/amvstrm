<template>
  <div
    class="card"
    :style="{
      '--color-txt': animeColor,
    }"
  >
    <div class="ybk-ctn">
      <v-chip
        class="d-none d-md-flex d-lg-flex"
        color="warning"
        variant="elevated"
        size="small"
        label
      >
        {{ year }}
      </v-chip>
      <v-icon
        class="addbkm"
        :icon="bookmarkStatus"
        size="28"
        @click="bookmarkHandler"
      />
    </div>
    <NuxtLink
      v-bind="props"
      :to="
        /\/pwa\.*/.test(useRoute().path) ? '/pwa/anime/' + id : '/anime/' + id
      "
    >
      <img class="card-img" loading="lazy" :src="imgsrc" :alt="imgalt" />
    </NuxtLink>
    <div
      class="d-none d-md-flex d-lg-flex align-center justify-center"
      style="gap: 0.2rem"
    >
      <v-chip
        v-if="props.type !== ''"
        label
        :color="
          props?.type === 'TV'
            ? 'success'
            : props?.type === 'SPECIAL'
            ? 'info'
            : props?.type === 'MOVIE'
            ? 'warning'
            : props?.type === 'OVA' || props?.type === 'ONA'
            ? 'danger'
            : ''
        "
      >
        {{ props.type }}
      </v-chip>
      <v-chip
        v-if="props.status !== ''"
        label
        :color="
          props?.status === 'FINISHED'
            ? 'success'
            : props?.status === 'RELEASING'
            ? 'warning'
            : props?.status === 'NOT_YET_RELEASED'
            ? 'info'
            : props?.status === 'CANCELLED'
            ? 'danger'
            : ''
        "
      >
        {{
          props.status === "FINISHED"
            ? "Finished"
            : props?.status === "RELEASING"
            ? "Released"
            : props?.status === "NOT_YET_RELEASED"
            ? "Soon"
            : "No data"
        }}
      </v-chip>
    </div>
    <NuxtLink
      class="card-title"
      :to="
        /\/pwa\.*/.test(useRoute().path) ? '/pwa/anime/' + id : '/anime/' + id
      "
    >
      <span>{{ title }}</span>
    </NuxtLink>
  </div>
</template>
<script setup>
import { useStorage } from "@vueuse/core";

const props = defineProps({
  title: {
    default: "",
    required: true,
    type: String,
  },
  imgsrc: {
    default: "",
    required: true,
    type: String,
  },
  // eslint-disable-next-line vue/require-prop-types
  imgalt: {
    default: "",
    required: true,
  },
  // eslint-disable-next-line vue/require-prop-types
  animeColor: {
    default: "",
    required: true,
  },
  // eslint-disable-next-line vue/require-prop-types
  id: {
    default: "",
    required: true,
  },
  year: {
    default: 0,
    required: true,
    type: Number,
  },
  // eslint-disable-next-line vue/require-prop-types
  totalEp: {
    default: 0,
    required: true,
  },
  type: {
    default: "",
    required: true,
    type: String,
  },
  status: {
    default: "",
    required: true,
    type: String,
  },
});

const state = useStorage("site-bookmarker", []);

const isBookmarked = (id) => {
  const bookmarks = state.value;
  return bookmarks.find((item) => item.id == id) !== undefined;
};

let isAlreadyBookmarked = isBookmarked(props.id);

const bookmarkStatus = ref(
  isAlreadyBookmarked ? "mdi-bookmark" : "mdi-bookmark-outline"
);

const get_key = useStorage("cloud-cfg", {});
async function saveBookmarks(bookmarks) {
  state.value = bookmarks || [];
  if (get_key.value.enabled) {
    await useFetch("/api/saveToDB?mutate=add_bookmark", {
      method: "POST",
      headers: {
        "x-space-collection": get_key.value.deta_collection_key,
      },
      body: {
        bookmarks,
      },
    });
  }
}

function bookmarkHandler() {
  isAlreadyBookmarked = isBookmarked(props.id);
  isAlreadyBookmarked ? removeBookmark() : addBookmark();
}

function addBookmark() {
  const bookmarks = state.value;
  bookmarks.push({
    id: props.id,
    title: props.title,
    imgsrc: props.imgsrc,
    color: props.animeColor,
    type: props.type,
    totalEp: props.totalEp,
    year: props.year,
    status: props.status
  });
  bookmarkStatus.value = "mdi-bookmark"; // Update bookmarkStatus
  saveBookmarks(bookmarks);
}

function removeBookmark() {
  const bookmarks = state.value;
  const index = bookmarks.findIndex((item) => item.id == props.id);
  bookmarks.splice(index, 1);
  bookmarkStatus.value = "mdi-bookmark-outline"; // Update bookmarkStatus
  saveBookmarks(bookmarks);
}
watch(
  () => isAlreadyBookmarked,
  (newValue) => {
    bookmarkStatus.value = newValue ? "mdi-bookmark" : "mdi-bookmark-outline";
  }
);
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

.addbkm {
  margin: 1rem;
  opacity: 0;
  transition: opacity 0.2s ease;
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
}

.ybk-ctn {
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  width: 200px;
}

.card:hover .addbkm {
  opacity: 1;
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
  color: var(--color-txt);
}

.video-date {
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 0;
}

@media (max-width: 1280px) {
  .card-img {
    width: 180px;
    height: 270px;
  }
  .ybk-ctn {
    width: 184px;
    position: relative;
    top: 60px;
    margin-top: -50px;
  }
}

@media (max-width: 960px) {
  .card-img {
    width: auto;
    height: 210px;
  }
  .card {
    margin: 1rem 1rem 1rem 0rem;
  }
  .ybk-ctn {
    width: 150px;
    justify-content: end;
    position: relative;
    top: 60px;
    margin-top: -50px;
  }
  .addbkm {
    opacity: 1;
  }
}
</style>
