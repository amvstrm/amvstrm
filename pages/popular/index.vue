<template>
  <v-app style="height:100%;">
    <h2 class="ma-4">All Popular Anime</h2>
    <div>
      <v-row flex class="ma-5" justify="center">
        <v-col v-for="data in popular" :key="data.id" cols="auto">
          <Card :id="data.id" class="media-container" :title="data.title" :img="data.img"/>
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
      popular: null,
      page: 1,
      length: 100,
    };
  },
  async mounted() {
    await this.onPageChange();
  },
  methods: {
    getPopular: function () {
      axios
        .get(`https://gogoanime-zeta.vercel.app/api/popular/${this.page}`)
        .then((res) => {
          this.popular = res.data.popular;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    onPageChange() {
      this.getPopular();
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
