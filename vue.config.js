module.exports = {
  /**
   * SASS loader configuration that provides the ability to use
   * SASS variables within Vue components.
   */
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import '@/theme/main.scss';
          `,
      },
    },
  },
  transpileDependencies: ['vuex-composition-helpers'],
  /**
     * Setup the local development server based on the available
     * environment variables.
     *  * UPDATED 7/27 - SHOULD redo devServer/server to remove console deprecation warning on https
     * devServer: {
      host: process.env.VUE_APP_HOST,
      NEW WAY --> server: 'https',
      OLD WAY --> https: new Boolean(process.env.VUE_APP_HTTPS),
    },
     */

  devServer: {
    host: process.env.VUE_APP_HOST,
    https: new Boolean(process.env.VUE_APP_HTTPS),
  },

  /**
   * Allows eluma-ui-components to run from local npm link
   */
  // configureWebpack: {
  //   resolve: {
  //     symlinks: false,
  //     alias: {
  //       vue: path.resolve(`./node_modules/vue`),
  //     },
  //   },
  // },

  /**
   * Progressive Web Application (PWA) configuration.
   */
  pwa: {
    name: 'eLuma - Insight',
    themeColor: '#00A79C',
    msTileColor: '#00A79C',
    iconPaths: {
      favicon32: './icons/favicon-32x32.png',
      favicon16: './icons/favicon-16x16.png',
      appleTouchIcon: './icons/apple-touch-icon-152x152.png',
      maskIcon: null,
      msTileImage: './icons/ms-icon-144x144.png',
    },
    manifestOptions: {
      icons: [
        {
          src: './icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  },
};
