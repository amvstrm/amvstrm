<script setup>
import debounce from "lodash.debounce";
import axios from "axios";

const env = useRuntimeConfig();
const searchResults = ref();
const search = ref();
const searchLoading = ref(true);

useSeoMeta({
  ogTitle: "Search Anime",
  ogDescription: "Search 100+ of animes to watch on amvstrm",
  ogImage: "logo.png",
  ogUrl: "[og:url]",
  twitterTitle: "Search Anime",
  twitterDescription: "Search 100+ of animes to watch on amvstrm",
  twitterImage: "logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Search Anime",
});

const selectGenres = ref();
const selectTags = ref();

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

const debouncedSearch = debounce(async () => {
  const { data } = await axios.post(
    `${env.public.API_URL}/api/${env.public.version}/search`,
    {
      search: search.value,
      genres: selectGenres.value,
      tags: selectTags.value,
    }
  );

  searchResults.value = data;
  searchLoading.value = false;
}, 200);

const query = useRoute().query;

if (query.q || query.genres || query.tags) {
  search.value = query?.q;
  selectGenres.value = query?.genres && query?.genres.includes(',') ? query?.genres.split(',') : query?.genres;
  selectTags.value = query?.tags && query?.tags.includes(',') ? query?.tags.split(',') : query?.tags;
  debouncedSearch();
}
</script>
<template>
  <v-container>
    <h1 class="mb-2">
      Search Anime
    </h1>
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
      @update:model-value="debouncedSearch()"
    />
    <v-row class="my-1">
      <v-col style="padding-bottom: 0;" cols="12" sm="6">
        <v-combobox
          v-model="selectGenres"
          :items="genreItems"
          variant="solo"
          label="Genres"
          multiple
          @update:model-value="debouncedSearch()"
        ></v-combobox>
      </v-col>
      <v-col style="padding-bottom: 0;" cols="12" sm="6">
        <v-combobox
          v-model="selectTags"
          :items="tagItems"
          variant="solo"
          label="Tags"
          multiple
          @update:model-value="debouncedSearch()"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-card class="mt-4">
      <v-card-text v-if="searchResults?.results ? false : true">
        <div class="loadingBlock" style="height: 40vh">
          <div class="d-flex flex-column align-center">
            <v-icon size="5rem">mdi-magnify</v-icon>
            <h2>Search Anime</h2>
          </div>
        </div>
      </v-card-text>
      <v-list v-if="searchResults?.results.length > 0" lines="two">
        <v-list-item title="Search result" />
        <v-divider />
        <div v-if="searchLoading" class="loadingBlock">
          <v-progress-circular :size="45" indeterminate />
        </div>
        <v-list-item
          v-for="item in searchResults.results"
          v-else
          :key="item.id"
          :to="'/anime/' + item.id"
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
                : item?.status === "RELEASING"
                ? "Currently Releasing"
                : item?.status === "NOT_YET_RELEASED"
                ? "Not Released"
                : item?.status === "CANCELLED"
                ? "Cancelled"
                : "No data"
            }}
          </v-list-item-subtitle>
          <template #append>
            <v-icon color="yellow"> mdi-star </v-icon>
            {{ item.averageScore / 10 }}
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<style>
.loadingBlock {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
