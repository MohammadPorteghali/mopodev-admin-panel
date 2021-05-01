<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>

</script>

<style>
  @import "./assets/styles/global.scss";
</style>

// theme
<style lang="scss">
  .theme--dark.v-card {
    background-color: var(--v-navbar-base) !important;
  }
  .theme--dark.v-data-table {
    background-color: var(--v-navbar-base) !important;
  }
  .theme--dark.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: var(--v-navbar-lighten1);
  }
</style>
