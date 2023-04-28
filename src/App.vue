<style lang="scss" scoped></style>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="container">
    <BaseLayout>
      <Toast position="top-right" />
      <RouterView />
    </BaseLayout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
