<template style="position: relative">
  <div>
    <div class="notfound-text">
      <b>404</b>
      <br>
      {{ $t('errors.404') }}
    </div>
    <!-- <img src="@/assets/images/logo.png" class="notfound-image" alt=""> -->
  </div>
</template>

<style scoped>
  .notfound {
    height: 100vh;
    text-align: center;
  }
  .notfound-text {
    direction: rtl;
    font-size: 290%;
    font-family: "IranYekan";
    font-weight: 700;
    margin-top: 20vh;
    width: 100vw;
    text-align: center;
    color: #205072;
  }
  .notfound-image {
    position: absolute;
    bottom: 30vh;
    width: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
