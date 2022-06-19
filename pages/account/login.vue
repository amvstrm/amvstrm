<template>
  <div class="ma-8" >
    <v-row justify="center" flex>
      <v-card class="pa-6 " width="600px" height="35rem">
        <v-col align="center" class="align-self-center">
          <span class="headline mb-2">Login</span>
        <v-form ref="form" v-model="valid" lazy-validation>
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
          <v-btn :disabled="!valid" class="my-2" @click="validate">
            Login
          </v-btn>
          <v-btn
            class="ma-2"
            color="primary"
            text-color="white"
          >
            Reset Password
          </v-btn>
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
};
</script>
