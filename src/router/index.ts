import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import About from '@/views/About';
import App from '@/App.vue';
import Home from '@/views/Home';
import { LAYOUTS } from '@/enum';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Home,
    children: [],
    meta: { layout: LAYOUTS.DEFAULT },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { layout: LAYOUTS.DEFAULT },
  },

  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: Profile,
  //   meta: { layout: LAYOUTS.DEFAULT, title: 'Profile - Insight TMS' },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
console.log(router.getRoutes());

/**
 * this is called before each route to check for protected pages
 * and redirect if not logged in
 */
// router.beforeEach(async (to, from, next) => {
//   VueCookieNext.setCookie('last_route', from.path, {
//     secure: 'true',
//     sameSite: '',
//   });

//   const authStore = useAuthStore();
//   const personType = authStore.personType;
//   // cleanedRoute are a method to permit to the user to access to the page without login
//   const cleanedRoute = to.path.toLocaleString().split('/').slice(0, 3).join('/');
//   const shouldAuth = !authStore.isAuthenticated && !publicRoutes.includes(cleanedRoute);

//   if (authStore.isAuthenticated && !personType) {
//     await authStore.getAuthUserProfile();
//   }

//   if (shouldAuth) {
//     next('/account/login');
//   } else {
//     next();
//   }

//   if (typeof to.meta.title === 'string') {
//     document.title = to.meta.title || 'Insight TMS';
//   }
// });

export { routes };

export default router;
