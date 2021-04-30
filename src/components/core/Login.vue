<template>
  <div class="full-height">
    <v-row justify="center" class="full-height">
      <v-col cols="10" xl="4" lg="4" md="6" sm="6" class="login-container ma-auto pa-7">
        <v-row justify="center" class="mb-2 mt-1">
          <h3 class="login-title mb-9">Login</h3>
        </v-row>
        <v-text-field
          label="E-mail address"
          v-model="email"
          append-icon="mdi-email-outline"
          type="text"
          :rules="[rules.emailRequired]"
          required
          autofocus
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          append-icon="mdi-lock-outline"
          type="password"
          :rules="[rules.passwordRequired]"
          required
          @keypress.enter="submitCode"
        ></v-text-field>
        <v-row class="mt-5">
          <v-col>
            <v-btn
              color="primary"
              class="px-5"
              @click="login"
              :disabled="!email || !password"
              :block="$vuetify.breakpoint.xs"
            >
              Login
            </v-btn>
          </v-col>
          <v-spacer v-if="!$vuetify.breakpoint.xs" />
          <v-col>
            <v-btn text color="primary" :block="$vuetify.breakpoint.xs">Forget Password</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :color="snackbarColor" top left>{{ errorText }}</v-snackbar>
  </div>
</template>

<script>
import Axios from "axios";
import Vue from 'vue'

export default {
  data: function () {
    return {
      snackbar: false,
      snackbarColor: "",
      errorText: '',
      loading: false,
      step: 'phoneNumber',
      email: 'test@test.com',
      password: 'test',
      rules: {
        emailRequired: value => !!value || 'E-mail is required',
        passwordRequired: value => !!value || 'Password is required'
      }
    };
  },
  methods: {
    login() {
      this.$router.push({name: 'charts'})
    }
  },
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
.login-container {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 6px #dadcde;
}
.login-title {
  font-weight: 600;
  font-size: 1.6em;
}
</style>