<template>
  <v-btn
    :prepend-icon="bookmarkStatus"
    :color="bookmarkColor"
    @click="handleBookmark"
  >
    {{ isAlreadyBookmarked ? "Unbookmarked" : "Bookmark" }}
  </v-btn>
</template>

<script>
import { useStorage } from "@vueuse/core";
export default {
  props: {
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
    imgalt: {
      default: "",
      required: true,
    },
    animeColor: {
      default: "",
      required: true,
      type: String,
    },
    id: {
      default: "",
      required: true,
    },
    year: {
      default: 0,
      required: true,
      type: Number,
    },
    totalEp: {
      default: 0,
      required: true,
      type: Number,
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
  },
  setup(props) {
    const state = useStorage("site-bookmarker", []);

    const bookmarks = ref(state.value);
    const isAlreadyBookmarked = ref(isBookmarked(props.id));
    const bookmarkStatus = ref(
      isAlreadyBookmarked.value ? "mdi-bookmark-outline" : "mdi-bookmark"
    );
    const bookmarkColor = ref(isAlreadyBookmarked.value ? "white" : "warning");
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
        status: props.status,
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
