export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-weather-forecast',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~static/styles/main.css',
    '~static/styles/swiper-bundle.min.css',
    // 'swiper/dist/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/nuxt-awesome-swiper.js', mode: 'client' },
      // { src: '~plugins/nuxt-swiper-plugin.js', mode:'client' },
      { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    credentials:false,
    retry: { retries: 3 },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }

}
