<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="380">
      <v-card>
        <v-card-title class="text-h5"> Warning </v-card-title>
        <v-card-text>
          All of the data is store in the localStorage. Please make sure you
          export the data to prevent browser from clearing the localStorage.
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
    <v-dialog v-model="warndialog" persistent max-width="300">
      <v-card>
        <v-card-title class="text-h5"> Warning </v-card-title>
        <v-card-text>
          {{ warnmsg }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="clearBookmark"> Ok </v-btn>
          <v-btn color="red darken-1" text @click="warndialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="ma-4">
      <h2>{{ $t('bookmark_desc') }}</h2>
      <span>{{ bookmarklist }} / 100</span>
    </div>

    <div
      class="tw-grid tw-justify-items-center tw-grid-cols-2 md:tw-grid-cols-4"
    >
      <div v-if="bookmarklist == 0" style="height: 600px">
        <div class="text-center">
          <v-icon color="grey--text" size="100"> mdi-bookmark-outline </v-icon>
          <h2>No Bookmarks</h2>
        </div>
      </div>
      <div v-for="data in bookmarks" :key="data.id">
        <BookmarkCard
          :id="data.id"
          :title="data.title"
          :img="data.img"
          @clickdata="removeBookmark(data.id)"
        />
      </div>
    </div>
    <div class="ma-5">
      <v-btn class="mr-2" elevation="4" color="blue" @click="importBookmark">
        <v-icon>mdi-import</v-icon>
        Import
      </v-btn>
      <v-btn class="mr-2" elevation="4" color="red" @click="saveBookmark">
        <v-icon>mdi-export</v-icon>
        Export
      </v-btn>
      <v-btn
        class="mr-2 my-2"
        elevation="4"
        color="dark"
        @click="warndialog = true"
      >
        <v-icon>mdi-delete</v-icon>
        Clear All
      </v-btn>
    </div>
    <div class="ma-5">
      <span style="opacity: 60%"
        >INFO : We limited to 100 bookmarks because we store everything in the
        localStorage and it can cause issues sometimes.</span
      >
    </div>
  </div>
</template>
<script>
import Validator from 'jsonschema'
export default {
  data() {
    return {
      bookmarks: null,
      dialog: false,
      errorhdialog: false,
      warndialog: false,
      bookmarklist: 0,
      infotitle: '',
      infomsg: '',
      warnmsg: 'Are you sure you want to clear all bookmarks?',
    }
  },
  head() {
    return {
      title: 'Bookmarks',
    }
  },
  mounted() {
    this.getBookmarks()
    this.CheckCookiesAgree()
  },
  methods: {
    CheckCookiesAgree() {
      if (process.client) {
        if (this.$cookies.get('dialog') == null) {
          this.dialog = true
        }
      }
    },
    getBookmarks: function () {
      if (process.client) {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        if (this.bookmarks == null) {
          this.bookmarks = []
        }
        this.bookmarklist = this.bookmarks.length
      }
    },
    setCookiesAgree: function () {
      this.dialog = true
      if (process.client) {
        this.$cookies.set('dialog', false, {
          path: '/bookmarks',
          maxAge: 60 * 60 * 24 * 7,
          expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
        })
        this.dialog = false
      }
    },
    saveBookmark: function () {
      if (process.client) {
        if (this.bookmarks.length === 0) {
          this.infotitle = 'No Data'
          this.infomsg = 'There is no data to export.'
          this.errorhdialog = true
        } else {
          this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
          if (this.bookmarks == null) {
            this.bookmarks = []
          }
          const data = JSON.stringify({
            amv_val_str: 'AMVSTRM_BOOKMARK_DATA_DO_NOT_TOUCH',
            info: 'MODIFYING FILE CAN CAUSES YOUR WHOLE BOOKMARKS DATA TO BE LOST OR CORRUPTED AND YOU SHOULDNT DO IT.',
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
      }
    },
    importBookmark: function () {
      if (process.client) {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'
        input.onchange = () => {
          const file = input.files[0]
          const reader = new FileReader()
          reader.onload = () => {
            const data = JSON.parse(reader.result)
            const valor = Validator.Validator
            // eslint-disable-next-line new-cap
            const v = new valor()
            const schema = {
              type: 'object',
              properties: {
                amv_val_str: {
                  type: 'string',
                  enum: ['AMVSTRM_BOOKMARK_DATA_DO_NOT_TOUCH'],
                },
                time: {
                  type: 'number',
                },
                bookmarks: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      title: {
                        type: 'string',
                      },
                      img: {
                        type: 'string',
                      },
                    },
                    required: ['id', 'title', 'img'],
                  },
                },
              },
              required: ['amv_val_str', 'time', 'bookmarks'],
            }
            const result = v.validate(data, schema)
            if (result.errors.length > 0) {
              this.infotitle = 'Error'
              this.infomsg =
                'Invalid data. Please check your file and data to make sure it is correct.'
              this.errorhdialog = true
            } else if (data.bookmarks.length > 100) {
              this.infotitle = 'Error'
              this.infomsg =
                'You can only import up to 100 bookmarks. Please remove some of the bookmarked anime before importing.'
              this.errorhdialog = true
            } else {
              this.bookmarks = data.bookmarks
              const ids = []
              for (let i = 0; i < data.bookmarks.length; i++) {
                if (ids.includes(data.bookmarks[i].id)) {
                  data.bookmarks.splice(i, 1)
                  i--
                } else {
                  ids.push(data.bookmarks[i].id)
                }
              }
              localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
              this.bookmarklist = this.bookmarks.length
              this.infotitle = 'Success'
              this.infomsg = 'Bookmarks imported successfully.'
              this.errorhdialog = true
            }
          }
          reader.readAsText(file)
        }
        input.click()
      }
    },
    removeBookmark: function (id) {
      if (process.client) {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        if (this.bookmarks == null) {
          this.bookmarks = []
        }
        const index = this.bookmarks.findIndex((item) => item.id === id)
        this.bookmarks.splice(index, 1)
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
        this.bookmarklist = this.bookmarks.length
      }
    },
    clearBookmark: function () {
      if (process.client) {
        // if there is no bookmarks, then show error message
        if (this.bookmarks.length === 0) {
          this.infotitle = 'Error'
          this.infomsg = 'There is no data to clear.'
          this.warndialog = false
          this.errorhdialog = true
        } else {
          this.bookmarks = []
          localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
          this.bookmarklist = this.bookmarks.length
          this.infotitle = 'Success'
          this.infomsg = 'Bookmarks cleared successfully'
          this.errorhdialog = true
          this.warndialog = false
        }
      }
    },
  },
}
</script>
<style>
.media-container {
  height: 16rem;
  width: 11rem;
  padding: 1rem;
  display: grid !important;
  justify-items: right;
  align-items: end;
  justify-content: flex-start;
  align-content: flex-end;
  padding-top: 1rem;
}

.grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 5px;
  margin-top: 20px;
  justify-items: center;
}
.grid-item {
  margin-bottom: 20px;
}
@media screen and (max-width: 600px) {
  .media-container {
    width: 9.5rem;
    height: 14rem;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 400px) {
  .media-container {
    width: 8rem;
    height: 12rem;
  }
  .grid-ctn {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
