<template>
  <div>
    <navbar />
    <new-footer />
  </div>
</template>

<script>
import Navbar from '@/components/core/Navbar'
import newFooter from '@/components/core/Footer.vue'

export default {
  components: {
    Navbar,
    newFooter,
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
