<template>
  <div class="ma-8">
    <v-row justify="center" flex>
      <v-card class="pa-6" width="600px" height="35rem">
        <v-col align="center" class="align-self-center">
          <span class="headline mb-2">Sign Up</span>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required
            ></v-text-field>
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
            <v-btn :disabled="!valid" class="my-2" @click.native="createAccount">
              Create Account
            </v-btn>
            <v-btn
              class="ma-2"
              color="primary"
              text-color="white"
              to="/login"
            >
              Already have an account?
            </v-btn>
          </v-form>
          <!-- <v-row>
            <v-col>
              <v-btn class="ma-2" color="grey darken-2">
                <v-icon>mdi-google</v-icon> Google
              </v-btn>
              <v-btn class="ma-2" color="blue darken-2">
                <v-icon>mdi-facebook</v-icon> Facebook
              </v-btn>
            </v-col>
          </v-row> -->
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      username: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) => v.length >= 6 || "Username must be at least 4 characters",
      ],
    };
  },
  methods: {
  //   createAccount() {
  //     this.$store.dispatch('createAccount', {
  //       email: this.email,
  //       password: this.password
  //     }).then(() => {
  //       this.email = ''
  //       this.password = ''
  //       // move to account page
  //       this.$router.push('/account')
  //     }).catch((e) => {
  //       console.log(e.message);
  //     })
  //   },
  },
  
};
</script>
