<template>
  <div>
    <v-row class="ma-5" justify="center">
      <v-btn-toggle
        v-for="(item, index) in aToZ"
        :key="index"
        v-model="aToZActive"
        mandatory
        @click="aToZClick(item.id)"
        
      >
        <v-btn class="" :to="'/animelist/' + item.id">
          {{ item.title }}
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <v-row class="ma-5" justify="center">
      <v-col
        v-for="(item, index) in anime"
        :key="index"
        cols="auto"
      >
        <v-card class="ma-2" dark>
          <v-chip
            :label="true"
            x-large
            :to="'/anime/' + item.id"
          >
            {{ item.title }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Animelist",
  data() {
    return {
      anime: [],
      aToZ: [
        {
          id: "a",
          title: "A",
        },
        {
          id: "b",
          title: "B",
        },
        {
          id: "c",
          title: "C",
        },
        {
          id: "d",
          title: "D",
        },
        {
          id: "e",
          title: "E",
        },
        {
          id: "f",
          title: "F",
        },
        {
          id: "g",
          title: "G",
        },
        {
          id: "h",
          title: "H",
        },
        {
          id: "i",
          title: "I",
        },
        {
          id: "j",
          title: "J",
        },
        {
          id: "k",
          title: "K",
        },
        {
          id: "l",
          title: "L",
        },
        {
          id: "m",
          title: "M",
        },
        {
          id: "n",
          title: "N",
        },
        {
          id: "o",
          title: "O",
        },
        {
          id: "p",
          title: "P",
        },
        {
          id: "q",
          title: "Q",
        },
        {
          id: "r",
          title: "R",
        },
        {
          id: "s",
          title: "S",
        },
        {
          id: "t",
          title: "T",
        },
        {
          id: "u",
          title: "U",
        },
        {
          id: "v",
          title: "V",
        },
        {
          id: "w",
          title: "W",
        },
        {
          id: "x",
          title: "X",
        },
        {
          id: "y",
          title: "Y",
        },
        {
          id: "z",
          title: "Z",
        },
      ],
      aToZActive: "a",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    aToZClick(id) {
      this.$router.push("/animelist/" + id);
    },
    getList() {
      // if this.$route.params.id is null put a
      if (this.$route.params.id == null) {
        const atz = "a";
        axios
          .get(`https://gogoanime-zeta.vercel.app/api/alphabet/${atz}/1`)
          .then((response) => {
            this.anime = response.data.anime;
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      } else {
        const atz = this.$route.params.id;
        axios
          .get(`https://gogoanime-zeta.vercel.app/api/alphabet/${atz}/1`)
          .then((response) => {
            this.anime = response.data.anime;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
