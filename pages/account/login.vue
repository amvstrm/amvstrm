
<template>
  <div class="ma-8">
    <v-row justify="center" flex>
      <v-card class="pa-6 " width="600px" height="35rem">
        <v-col align="center" class="align-self-center">
          <span class="headline mb-2">Login</span>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <p class="text-center">
            Forgot your password? <router-link to="/reset-password">Reset it</router-link>
          </p>
          <v-btn class="my-2" @click="emailLogin">
            Login
          </v-btn>
          <!-- <v-btn
            class="ma-2"
            color="primary"
            text-color="white"
            @click.native="googleSignUp"
          >
            Sign With Google
          </v-btn>
          <v-btn
            class="ma-2"
            color="primary"
            text-color="white"
            @click.native="facebookSignUp"
          >
            Sign With Facebook
          </v-btn> -->
        </v-form>
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
    };
  },
  methods: {
  //   emailLogin () {
  //     this.$store.dispatch('signInWithEmail', {
  //       email: this.email,
  //       password: this.password
  //     }).then(() => {
  //       this.$router.push('/')
  //       this.email = ''
  //       this.password = ''
  //     }).catch((e) => {
  //       console.log(e.message);
  //     })
  //   },
  //   googleSignUp () {
  //     this.$store.dispatch('signInWithGoogle').then(() => {
  //       console.log('inside then statement on login');
  //     }).catch((e) => {
  //       console.log(e.message);
  //     })
  //   },
  //   facebookSignUp () {
  //     this.$store.dispatch('signInWithFB').then(() => {
  //       console.log('inside then statement on login');
  //     }).catch((e) => {
  //       console.log(e.message);
  //     })
  //   },
  },
};
</script>
