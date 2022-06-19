import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'AMVStrm - Anime Streaming Site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AMVStrm or Anime/Movie/Video Streaming is a website that allows you to watch anime online for free with no ads and annoying popup.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'anime, watch anime free, free anime, gogoanime, animixplay, 9anime, 4anime, amvstrm, amvstreaming' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
      // { name: 'referrer', content: 'no-referrer' },
      // { name: 'referrer', content: 'no-referrer-when-downgrade' },
      { name: 'og:image', content: '/seo_img.png' },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:alt', content: 'AMVStrm - Anime Streaming Site' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'AMVStrm - Anime Streaming Site' },
      { name: 'og:description', content: 'AMVStrm or Anime/Movie/Video Streaming is a website that allows you to watch anime online for free with no ads and annoying popup.' },
      { name: 'og:url', content: 'https://amvstrm.com' },
      { name: 'og:site_name', content: 'AMVStrm - Anime Streaming Site' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://amvstr.ml/' },
      { name: 'twitter:title', content: 'AMVStrm - Anime Streaming Site' },
      { name: 'twitter:description', content: 'AMVStrm or Anime/Movie/Video Streaming is a website that allows you to watch anime online for free with no ads and annoying popup.' },
      { name: 'twitter:image', content: '/seo_img.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ico.png' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/router' },
    { src: '~/plugins/disqus' },
    // { src: '@/plugins/axios' },
    // { src: '@/plugins/authlisten', mode: 'client' },
    // { src: '@/plugins/firebase', mode: 'client' }
  ],

  loading: {
    color: 'white',
    height: '1px'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
  ],
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json"
      },
      {
        code: "kh",
        name: "ភាសាខ្មែរ",
        iso: "kh-KH",
        file: "km.json"
      }
    ],
    defaultLocale: 'en',
    skipSettingLocaleOnNavigate: true,
    langDir: 'translate/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'languages',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
