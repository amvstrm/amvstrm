<template>
  <v-app dark class="bg-sze">
    <div class="centerctn">
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
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      serverError: '500 Server Error, Please Contact to Adminitrator',
      bgimg: null,
      info: null,
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.bg-sze {
  height: 100vh;
}
.centerctn {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
}
.text-opacity {
  text-shadow: 0 0 5px #000;
  opacity: 75%;
}
.downright {
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
