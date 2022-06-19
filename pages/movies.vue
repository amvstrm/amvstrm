<template>
  <v-app>
    <h2 class="ma-4">Anime Movies</h2>
    <div>
      <v-row flex class="ma-5" justify="center">
        <v-col v-for="data in movie" :key="data.id" cols="auto">
          <div>
            <v-card
              class="media-container"
              :img="data.img"
              :to="'/anime/' + data.id"
              style="
                box-shadow: 0px -120px 4.6rem 0px rgba(0, 0, 0, 0.75) inset;
              "
            >
              <p>{{ data.title }}</p>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-container>
              <p>Page: {{ page }}</p>
              <v-pagination
                v-model="page"
                class="my-4"
                :length="length"
                :total-visible="10"
                @input="onPageChange"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: null,
      page: 1,
      length: 90,
    };
  },
  async mounted() {
    await this.onPageChange();
  },
  methods: {
    getMovie: function () {
      axios
        .get(`https://api-server-2.amvstr.ml/api/movies/${this.page}`)
        .then((res) => {
          this.movie = res.data.movies;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    onPageChange() {
      this.getMovie();
    },
  },
};
</script>
<style>
.media-container {
  height: 18rem;
  width: 12.2rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
}

@media screen and (max-width: 600px) {
  .media-container {
    width: 10rem;
    height: 15rem;
  }
}
</style>
