<template>
  <div>
    <div class="pa-2">
      <v-alert elevation="4" outlined text :type="alert">
      {{ txt }}
    </v-alert>
    </div>
    <div class="pa-2">
      <v-alert elevation="4" outlined text :type="alert2">
      {{ txtdev }}
    </v-alert>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      txt: '',
      txtdev: '',
      alert2: null,
      alert: null,
    }
  },
  created() {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-checkly-account': process.env.CHECKLY_ACCOUNT,
        Authorization: `Bearer ${process.env.CHECKLY_TOKEN}`,
      },
    }
    axios
      .get('https://api.checklyhq.com/v1/check-statuses', options)
      .then((response) => {
        if (response.data[1].isDegraded === false){
          this.txt = `${response.data[1].name} is up and running!`
          this.alert = 'success'
        } else {
          this.txt = `${response.data[1].name} is down!`
          this.alert = 'error'
        }
        if (response.data[2].isDegraded === false){
          this.txtdev = `${response.data[2].name} is up and running!`
          this.alert2 = 'success'
        } else {
          this.txtdev = `${response.data[2].name} is down!`
          this.alert2 = 'error'
        }
      })
  },
}
</script>
