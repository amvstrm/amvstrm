<template>
  <v-app dark>
    <div
      v-if="bgimg"
      class="bg-img center"
      :style="{
        'background-image': `url(${bgimg})`,
      }"
    >
      <h1 v-if="error.statusCode === 404" class="textsha">
        {{ pageNotFound }}
      </h1>
      <h1 v-else-if="error.statusCode === 500" class="textsha">
        {{ serverError }}
      </h1>
      <h1 v-else class="textsha">
        {{ otherError }}
      </h1>
      
      <NuxtLink class="textsha" to="/"> Home page </NuxtLink>
      <div v-if="info" class="downleft text-opacity">
        <a :href="info.url">
          <p>GIF by {{ info.username }}</p>
        </a>
      </div>
      <div class="downright">
        <a href="https://giphy.com">
          <img src="../static/giphy.png" alt="powered_by_giphy" width="150"/>
        </a>
      </div>
    </div>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
      serverError: "500 Server Error, Please Contact to Adminitrator",
      bgimg: null,
      info: null,
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  created() {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?q=anime&sort=recent&api_key=j7P9MWUCeefgmPepdpmlKYjQlH2hpHFd"
      )
      .then((res) => {
        const r = Math.floor(Math.random() * 30);
        this.bgimg = res.data.data[r].images.downsized_medium.url;
        this.info = res.data.data[r];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-opacity {
  text-shadow: 0 0 5px #000;
  opacity: 75%;
}
.downright{
  position: absolute;
  top: 2rem;
  right: 32px;
  bottom: 10px;
  text-shadow: 0 0 20px #000;
}
.downleft {
  position: absolute;
  bottom: 10px;
  color: #fff;
  text-align: center;
  width: 100%;
}
.bg-img {
  backdrop-filter: blur(50px);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.textsha {
  color: #fff;
  text-shadow: 0 0 5px #000;
}
</style>
