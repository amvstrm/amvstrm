<template>
  <div id="user" class="text-xs-center">
    <!-- <v-btn primary class="mt-2" color="primary" @click.native="logout">
      Logout
    </v-btn>
    <img v-if="user.displayName" :src="$store.state.user.photoURL" alt="John" />
    <p v-if="user.displayName">{{ user.displayName }}</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
      user: {
        displayName: '',
        photoURL: '',
      },
    }
  },
  // mounted() {
  //   this.$store.dispatch('activeUser')
  // },
  // methods: {
  //   logout() {
  //     this.$store.dispatch('signOut')
  //     this.$router.push('/login?logout=true')
  //   },
  // },
}
</script>
