<template>
  <v-app dark class="bg-sze">
    <div class="centerctn">
      <button @click="playMikuSound">
        <img src="../static/leek.png" alt="credit_custom-cursor.com_hatsune-miku-and-leek" width="45px">
      </button>
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
      countclick: 0,
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted() {
    const audiopreload = new Audio('https://d2.nscdn.ml/file/d2directdrives/amvstrm/okaimono.wav')
    audiopreload.preload = 'auto'
  },
  methods: {
    playMikuSound() {
      // eslint-disable-next-line no-console
      console.log(this.countclick++)
      if (this.countclick === 50){
        const website = {
          1: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          2: '/',
          3: 'https://ចុយម្រាយ.weebly.com',
          4: 'https://youtu.be/WhQFNvgeOZQ?t=30',
          5: 'https://kdmh.nyt92.repl.co',
          6: 'https://www.youtube.com/watch?v=OBPsQtObLR0',
          7: 'https://youtu.be/wuTczgBtwRM?t=10',
          8: 'https://www.youtube.com/watch?v=tu3AYKNJQaE',
        }
        const random = Math.floor(Math.random() * Object.keys(website).length) + 1
        window.location.href = website[random]  
      }
      const audio = new Audio('https://d2.nscdn.ml/file/d2directdrives/amvstrm/okaimono.wav')
      audio.play()
    },
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
