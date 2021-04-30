<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/views/Navbar'

export default {
  components: {
    Navbar
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
