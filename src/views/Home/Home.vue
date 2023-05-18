<script setup lang="ts"></script>

<template><div class="flex w-full main-img"></div></template>

<style scoped lang="scss">
.main-img {
  background-image: url(/src/assets/swimmers.png);
  height: 670px;
  border-top: 6px solid $orange;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (max-width: 768px) {
    height: 420px;
  }

  @media only screen and (max-width: 480px) {
    height: 210px;
  }
}
</style>
