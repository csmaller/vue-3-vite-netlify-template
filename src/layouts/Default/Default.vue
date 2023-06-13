<script lang="ts" setup>
import { Nav, Address } from '@/components';
</script>

<template>
  <div id="default-layout">
    <div id="main-container" class="mt-0">
      <div id="main-container-scroll" class="flex flex-column h-screen overflow-auto">
        <div class="header flex flex-wrap gap-3 align-items-center p-2">
          <img src="/src/assets/motive8_logo.png" width="200" height="200" class="mt-0" />
          <Nav />
        </div>
        <div id="main-content">
          <div class="flex w-full md:p-4 p-1">
            <slot />
          </div>
        </div>
      </div>
      <footer class="flex w-full text-center justify-content-center align-items-center">
        <Address />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.max-width {
  width: 100%;
  max-width: 1440px;
  margin: 0 -10px;
}
</style>
