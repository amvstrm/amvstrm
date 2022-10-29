<template>
  <v-app dark class="bg-sze">
    <div class="centerctn">
      <button @click="playMikuSound">
        <img
          src="../static/leek.png"
          alt="credit_custom-cursor.com_hatsune-miku-and-leek"
          width="50px"
        />
      </button>
      <div v-if="error.statusCode === 404" class="textsha tw-text-4xl">
        <h1 class="tw-text-9xl tw-font-bold">
          404
        </h1>
        <p class="tw-text-xl">
          Page not found
        </p>
      </div>
      <div v-else-if="error.statusCode === 500" class="textsha">
        <h1 class="tw-text-9xl tw-font-bold">
          500
        </h1>
        <p class="tw-text-xl">
          Internal Error
        </p>
        <v-btn 
          class="tw-my-2"
          href="https://github.com/amvstrm/amvstrm/issues/new"
          color="blue"
        >
          Make an issues on GitHub
        </v-btn>
      </div>
      <v-btn
        to="/"
        color="red"
      >
        Home
      </v-btn>
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
    const audiopreload = new Audio(
      'https://amvstr.ml/okaimono.wav'
    )
    audiopreload.preload = 'auto'
  },
  methods: {
    playMikuSound() {
      // eslint-disable-next-line no-console
      console.log(this.countclick++)
      if (this.countclick === 50) {
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
        const random =
          Math.floor(Math.random() * Object.keys(website).length) + 1
        window.location.href = website[random]
      }
      const audio = new Audio(
        'https://amvstr.ml/okaimono.wav'
      )
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
.textsha {
  color: #fff;
  text-shadow: 0 0 5px #000;
}
</style>
