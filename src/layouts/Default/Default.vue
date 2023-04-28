<script lang="ts" setup></script>

<template>
  <div id="default-layout">
    <div id="main-container">
      <div id="main-container-scroll" class="flex flex-column h-screen overflow-auto">
        Nav Here
        <div id="main-content">
          <div class="flex max-width">
            SideBar here
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.max-width {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
