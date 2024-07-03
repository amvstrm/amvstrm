<script setup>
const env = useRuntimeConfig();
const searchResults = ref([]);
const search = ref("");
const searchLoading = ref(false);
const isFocused = ref(false);
const selectGenres = ref();
const selectTags = ref();
const errorMessage = ref("");

const genreItems = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
  "Hentai",
];
const tagItems = [
  "4-koma",
  "Achronological Order",
  "Afterlife",
  "Age Gap",
  "Airsoft",
  "Aliens",
  "Alternate Universe",
  "American Football",
  "Amnesia",
  "Anti-Hero",
  "Archery",
  "Assassins",
  "Athletics",
  "Augmented Reality",
  "Aviation",
  "Badminton",
  "Band",
  "Bar",
  "Baseball",
  "Basketball",
  "Battle Royale",
  "Biographical",
  "Bisexual",
  "Body Swapping",
  "Boxing",
  "Bullying",
  "Calligraphy",
  "Card Battle",
  "Cars",
  "CGI",
  "Chibi",
  "Chuunibyou",
  "Classic Literature",
  "College",
  "Coming of Age",
  "Cosplay",
  "Crossdressing",
  "Crossover",
  "Cultivation",
  "Cute Girls Doing Cute Things",
  "Cyberpunk",
  "Cycling",
  "Dancing",
  "Delinquents",
  "Demons",
  "Development",
  "Dragons",
  "Drawing",
  "Dystopian",
  "Economics",
  "Educational",
  "Ensemble Cast",
  "Environmental",
  "Episodic",
  "Espionage",
  "Fairy Tale",
  "Family Life",
  "Fashion",
  "Female Protagonist",
  "Fishing",
  "Fitness",
  "Flash",
  "Food",
  "Football",
  "Foreign",
  "Fugitive",
  "Full CGI",
  "Full Colour",
  "Gambling",
  "Gangs",
  "Gender Bending",
  "Gender Neutral",
  "Ghost",
  "Gods",
  "Gore",
  "Guns",
  "Gyaru",
  "Harem",
  "Henshin",
  "Hikikomori",
  "Historical",
  "Ice Skating",
  "Idol",
  "Isekai",
  "Iyashikei",
  "Josei",
  "Kaiju",
  "Karuta",
  "Kemonomimi",
  "Kids",
  "Love Triangle",
  "Mafia",
  "Magic",
  "Mahjong",
  "Maids",
  "Male Protagonist",
  "Martial Arts",
  "Memory Manipulation",
  "Meta",
  "Military",
  "Monster Girl",
  "Mopeds",
  "Motorcycles",
  "Musical",
  "Mythology",
  "Nekomimi",
  "Ninja",
  "No Dialogue",
  "Noir",
  "Nudity",
  "Otaku Culture",
  "Outdoor",
  "Parody",
  "Philosophy",
  "Photography",
  "Pirates",
  "Poker",
  "Police",
  "Politics",
  "Post-Apocalyptic",
  "Primarily Adult Cast",
  "Primarily Female Cast",
  "Primarily Male Cast",
  "Puppetry",
  "Real Robot",
  "Rehabilitation",
  "Reincarnation",
  "Revenge",
  "Reverse Harem",
  "Robots",
  "Rugby",
  "Rural",
  "Samurai",
  "Satire",
  "School",
  "School Club",
  "Seinen",
  "Ships",
  "Shogi",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slapstick",
  "Slavery",
  "Space",
  "Space Opera",
  "Steampunk",
  "Stop Motion",
  "Super Power",
  "Super Robot",
  "Superhero",
  "Surreal Comedy",
  "Survival",
  "Swimming",
  "Swordplay",
  "Table Tennis",
  "Tanks",
  "Teacher",
  "Tennis",
  "Terrorism",
  "Time Manipulation",
  "Time Skip",
  "Tragedy",
  "Trains",
  "Triads",
  "Tsundere",
  "Urban Fantasy",
  "Vampire",
  "Video Games",
  "Virtual World",
  "Volleyball",
  "War",
  "Witch",
  "Work",
  "Wrestling",
  "Writing",
  "Wuxia",
  "Yakuza",
  "Yandere",
  "Youkai",
  "Zombie",
];

const debouncedSearch = useDebounceFn(async (query) => {
  searchLoading.value = true;
  errorMessage.value = "";

  try {
    const data = await $fetch(
      `${env.public.API_URL}/api/${env.public.version}/search`,
      {
        method: "POST",
        body: {
          search: query,
          genres: selectGenres.value,
          tags: selectTags.value,
        },
      }
    );

    searchResults.value = data.results;
  } catch (error) {
    errorMessage.value = "Failed to load search results.";
  } finally {
    searchLoading.value = false;
  }
}, 250);

const query = useRoute().query;

onMounted(() => {
  if (query.q || query.genres || query.tags) {
    search.value = query.q || "";
    selectGenres.value = query.genres ? query.genres.split(",") : [];
    selectTags.value = query.tags ? query.tags.split(",") : [];
    debouncedSearch(search.value);
  }
});

watch([search, selectGenres, selectTags], () => {
  if (search.value) {
    debouncedSearch(search.value);
  }
});
</script>

<template>
  <v-container>
    <h1 class="mb-2">Search Anime</h1>
    <v-text-field
      v-model="search"
      variant="solo"
      color="green"
      label="Search Anime"
      flat
      clearable
      single-line
      hide-details
      prepend-inner-icon="mdi-magnify"
      @focus="isFocused = true"
    />
    <v-row class="my-1">
      <v-col style="padding-bottom: 0" cols="12" sm="6">
        <v-combobox
          v-model="selectGenres"
          :items="genreItems"
          variant="solo"
          label="Genres"
          multiple
        ></v-combobox>
      </v-col>
      <v-col style="padding-bottom: 0" cols="12" sm="6">
        <v-combobox
          v-model="selectTags"
          :items="tagItems"
          variant="solo"
          label="Tags"
          multiple
        ></v-combobox>
      </v-col>
    </v-row>
    <v-card class="mt-2">
      <v-card-text v-if="!isFocused && !searchLoading && !searchResults.length">
        <div class="loadingBlock" style="height: 40vh">
          <div class="d-flex flex-column align-center">
            <v-icon size="5rem">mdi-magnify</v-icon>
            <h2>Search Anime</h2>
          </div>
        </div>
      </v-card-text>
      <v-card-text v-else-if="isFocused && searchLoading">
        <div class="loadingBlock">
          <v-progress-circular :size="45" indeterminate />
        </div>
      </v-card-text>
      <v-card-text v-else-if="errorMessage">
        <div class="errorBlock">{{ errorMessage }}</div>
      </v-card-text>
      <v-list v-else-if="searchResults.length > 0">
        <v-list-item title="Search result" />
        <v-divider />
        <v-list-item
          v-for="item in searchResults"
          :key="item.id"
          :to="'/pwa/anime/' + item.id"
        >
          <template #prepend>
            <img
              v-if="item.coverImage.medium"
              class="ma-2"
              :src="item.coverImage.medium"
              :alt="item.id + '_img'"
              style="border-radius: 4px; width: 60px; height: 10%"
            />
          </template>
          <v-list-item-title>{{ item.title.userPreferred }}</v-list-item-title>
          <v-list-item-subtitle>
            Episode {{ item.episodes }} /
            {{
              item.status === "FINISHED"
                ? "Finished"
                : item.status === "RELEASING"
                ? "Currently Releasing"
                : item.status === "NOT_YET_RELEASED"
                ? "Not Released"
                : item.status === "CANCELLED"
                ? "Cancelled"
                : "No data"
            }}
          </v-list-item-subtitle>
          <template #append>
            <div class="d-flex" style="gap: 0.2rem">
              <v-icon color="yellow">mdi-star</v-icon>
              {{ item.averageScore / 10 }}
            </div>
          </template>
        </v-list-item>
      </v-list>
      <v-card-text v-else>
        <div class="loadingBlock">
          <h1>No results found!</h1>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.loadingBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}
.errorBlock {
  color: red;
  text-align: center;
}
</style>
