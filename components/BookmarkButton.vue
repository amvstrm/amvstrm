<template>
  <v-btn :prepend-icon="bookmarkStatus" :color="bookmarkColor" @click="handleBookmark">
    {{ isAlreadyBookmarked ? "Unbookmarked" : "Bookmark" }}
  </v-btn>
</template>

<script>
import { useStorage } from "@vueuse/core";

export default {
  props: {
    id: {
      type: String || Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgsrc: {
      type: String,
      required: true,
    },
    animeColor: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    totalEp: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const state = useStorage("site-bookmarker", []);

    const bookmarks = ref(state.value);
    const isAlreadyBookmarked = ref(isBookmarked(props.id));
    const bookmarkStatus = ref(
      isAlreadyBookmarked.value ? "mdi-bookmark-outline" : "mdi-bookmark"
    );
    const bookmarkColor = ref(isAlreadyBookmarked.value ? "white" : "warning");
    const get_key = useStorage("cloud-cfg", {})
    async function saveBookmarks(bookmarks) {
      state.value = bookmarks || [];

      if (get_key.value.enabled) {
        await useCsrfFetch('/api/saveToDB?mutate=add_bookmark', {
          method: 'POST',
          headers: {
            'x-space-collection': get_key.value.deta_collection_key
          },
          body: {
            bookmarks,
          }
        })
      }
    }

    function isBookmarked(id) {
      return bookmarks.value.find((item) => item.id == id) !== undefined;
    }

    function addBookmark() {
      bookmarks.value.push({
        id: props.id,
        title: props.title,
        imgsrc: props.imgsrc,
        color: props.animeColor,
        type: props.type,
        totalEp: props.totalEp,
        year: props.year,
      });
      bookmarkStatus.value = "mdi-bookmark";
      bookmarkColor.value = "white";
      saveBookmarks(bookmarks.value);
    }

    function removeBookmark() {
      const index = bookmarks.value.findIndex((item) => item.id == props.id);
      bookmarks.value.splice(index, 1);
      bookmarkStatus.value = "mdi-bookmark-outline";
      bookmarkColor.value = "warning";
      saveBookmarks(bookmarks.value);
    }

    function handleBookmark() {
      if (isAlreadyBookmarked.value) {
        removeBookmark();
      } else {
        addBookmark();
      }
      isAlreadyBookmarked.value = !isAlreadyBookmarked.value;
    }

    watch(
      () => isAlreadyBookmarked.value,
      (newValue) => {
        bookmarkStatus.value = newValue
          ? "mdi-bookmark-outline"
          : "mdi-bookmark";
        bookmarkColor.value = newValue ? "white" : "warning";
      }
    );

    return {
      isAlreadyBookmarked,
      bookmarkStatus,
      bookmarkColor,
      handleBookmark,
    };
  },
};
</script>
