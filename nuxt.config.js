import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | amvstrm',
    title: 'amvstrm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'canonical', content: 'https://amvstr.ml' },
      { name: 'referrer', content: 'origin' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://amvstr.ml' },
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
  ],

  loading: {
    color: 'white',
    height: '1px'
  },

  loadingIndicator: {
    name: 'pulse',
    color: '#3B8070',
    background: '#191919'
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
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: {
      iconSrc: '/android-chrome-192x192.png',
    },
    meta: {
      title: 'amvstrm',
      author: 'amvstrm Teams',
    },
    manifest: {
      name: 'amvstrm',
      short_name: 'amvstrm',
      lang: 'en',
      theme_color: '#3B8070',
      background_color: '#191919',
      display: 'standalone',
    },
    workbox: {
      autoRegister: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/.*\.googleapis\.com\/fonts\/.*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 3,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        }
      ],
    }
  },
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
    // extractCSS: true,
  }
}
