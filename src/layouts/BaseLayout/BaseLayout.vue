<script lang="ts" setup>
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { LAYOUTS } from '@/enum';
import Default from '../Default';
import PublicLayout from '../PublicLayout';

const layout = shallowRef(Default);

const route = useRoute();

watch(
  () => route.meta,
  async (meta) => {
    if (!meta?.layout) {
      layout.value = route.matched[0]?.components?.default;
      return;
    }
    try {
      const component = await import(/* @vite-ignore */ `@/layouts/${meta.layout}`);
      layout.value = component?.default || Default;
    } catch (e) {
      layout.value = meta.layout === LAYOUTS.DEFAULT ? Default : PublicLayout;
    }
  },
  { immediate: true },
);
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
