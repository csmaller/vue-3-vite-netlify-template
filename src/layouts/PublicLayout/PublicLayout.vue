<script lang="ts" setup>
// eslint-disable-next-line vue/block-tag-newline
// import Nav from '@/components/Nav';
</script>

<template>
  <div class="public-layout">
    nav here
    <div class="container">
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.public-layout {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}
</style>
