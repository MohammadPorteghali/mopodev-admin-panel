<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.$role = window.localStorage.getItem('role')
String.prototype.toEngNumber = function () {
  var e = this;
  for (var t = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"], n = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], i = 0, o = t.length; i < o; i++) e = e.replace(new RegExp(t[i], "g"), n[i]);
  return e;
};
String.prototype.toPersianNumber = function () {
  let find = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let replace = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let replaceString = this;
  let regex;
  for (let i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

export default {
}
</script>

<style>
  @import "./assets/styles/global.scss";
</style>

// theme
<style lang="scss">
  .theme--dark.v-card {
    background-color: var(--v-navbar-base) !important;
  }
</style>
