<template>
  <div
    class="mx-xl-16 mx-lg-16 mx-md-8 mx-sm-4 mx-xs-2 my-16"
    style="height: 100%"
  >
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Warning </v-card-title>
        <v-card-text>
          All of your bookmarks will be save in localStorage. Every bookmarks
          will be gone, once you clear the site. Besure to click save as json.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="setCookiesAgree">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="errorhdialog" persistent max-width="300">
      <v-card>
        <v-card-title class="text-h5"> {{ infotitle }} </v-card-title>
        <v-card-text>
          {{ infomsg }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="errorhdialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="ma-5">
      <h2>{{ $t('bookmark_desc') }}</h2>
      <span>In Development</span>
    </div>
    <v-row class="ma-5" dense justify="space-around">
      <v-col
        v-for="data in bookmarks"
        :key="data.id"
        cols="auto"
        class="d-flex child-flex"
      >
        <BookmarkCard
          :id="data.id"
          class="media-container"
          :img="data.img"
          :title="data.title"
          @clickdata="removeBookmark(data.id)"
        />
      </v-col>
    </v-row>
    <div class="ma-5">
      <v-btn class="mr-2" elevation="4" color="red" @click="saveBookmark">
        Export
      </v-btn>
      <v-btn class="mr-2" elevation="4" color="blue" @click="importBookmark">
        Import
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookmarks: null,
      dialog: false,
      errorhdialog: false,
      infotitle: "",
      infomsg: "",
    }
  },
  created() {
    this.getBookmarks()
    if (process.client) {
      if (this.$cookies.get('dialog') == null) {
        this.dialog = true
      }
    }
  },
  methods: {
    getBookmarks: function () {
      // getBookmarks from bookmarks localStorage
      if (process.client) {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        if (this.bookmarks == null) {
          this.bookmarks = []
        }
      }
    },
    setCookiesAgree: function () {
      this.dialog = true
      if (process.client) {
        this.$cookies.set('dialog', false, {
          maxAge: 60 * 60 * 24 * 365,
          path: '/bookmarks',
        })
        this.dialog = false
      }
    },
    saveBookmark: function () {
      // get bookmarks from localStorage then save to the desktop
      if (process.client) {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        if (this.bookmarks == null) {
          this.bookmarks = []
        }
        const data = JSON.stringify({
          amv_val_str: 'AMVSTRM_BOOKMARK_DATA_DO_NOT_TOUCH',
          time: new Date().getTime(),
          bookmarks: this.bookmarks,
        })
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `amvstrm_bookmarks_data_${new Date().getTime()}.json`
        a.click()
        URL.revokeObjectURL(url)
      }
    },
    importBookmark: function () {
      // import json file from desktop
      if (process.client) {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'
        // check if the file got amv_val_str
        input.onchange = () => {
          const file = input.files[0]
          const reader = new FileReader()
          reader.onload = () => {
            const data = JSON.parse(reader.result)
            if (data.amv_val_str === 'AMVSTRM_BOOKMARK_DATA_DO_NOT_TOUCH') {
              this.bookmarks = data.bookmarks
              localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
              this.infotitle = "Success"
              this.infomsg = "Bookmarks imported successfully"
              this.errorhdialog = true
            } else {
              this.infotitle = "Error"
              this.infomsg = "Failed to Import The Bookmarks. Please check the file type and data inside."
              this.errorhdialog = true
            }
          }
          reader.readAsText(file)
        }
        input.click()
      }
    },
    removeBookmark: function (id) {
      // remove bookmark from localStorage
      if (process.client) {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        if (this.bookmarks == null) {
          this.bookmarks = []
        }
        const index = this.bookmarks.findIndex((item) => item.id === id)
        this.bookmarks.splice(index, 1)
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
      }
    },
  },
}
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
@media screen and (max-width: 450px) {
  .media-container {
    width: 9rem;
    height: 13rem;
  }
}
@media screen and (max-width: 600px) {
  .media-container {
    width: 10rem;
    height: 15rem;
  }
}
</style>
