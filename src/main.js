import App from './App.vue';
import BaseLayout from '@/layouts/BaseLayout';
import Tooltip from 'primevue/tooltip';
import components from '@/components';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
console.log(router);

const app = createApp(App);
app.use(createPinia());

app.component('BaseLayout', BaseLayout);

app.directive('tooltip', Tooltip);

if (process.env.NODE_ENV !== 'production') {
  app.config.performance = true;
}

app.use(components);
app.use(router);
app.mount('#app');
