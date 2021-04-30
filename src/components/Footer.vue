<template>
  <v-footer padless app color="navbar">
    <v-col
      class="text-center py-1 footer"
      cols="12"
    >
      {{ $t('footer.MADE_WITH') }}
      <v-icon color="red" small>mdi-heart</v-icon>
      {{ $t('footer.BY') }} <a href="https://mopodev.ir">mopodev</a>
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  font-size: 12px;
  font-weight: 400;
}
</style>