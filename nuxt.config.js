export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: "https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js",
        src: "https://www.gstatic.com/firebasejs/7.15.4/firebase-analytics.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/firebase.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    [
      '@nuxtjs/pwa',
      {
        // disable the modules you don't need
        meta: false,
        icon: false,
        // if you omit a module key form configuration sensible defaults will be applied
        // manifest: false,

        workbox: {
          importScripts: [
            // ...
            '/firebase-auth-sw.js'
          ],
          // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
          // only set this true for testing and remember to always clear your browser cache in development
          dev: false
        }
      }
    ]
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
