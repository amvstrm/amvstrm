import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | amvstrm',
    title: 'amvstrm',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'canonical', content: 'https://amvstr.ml' },
      { name: 'referrer', content: 'origin' },
      {
        hid: 'description',
        name: 'description',
        content:
          'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'anime, amvstreaming, free anime, amvstrm, amvstr, amvstrm.ml, amvstrm anime',
      },
      // og
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://amvstr.ml/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Home | amvstrm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'seoimg.png',
      },
      // twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://amvstr.ml/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Home | amvstrm',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'amvstrm, also known as Anime/Movie/Video Streaming is an open-source website that lets you watch anime for free without being disturbed by pop-up adverts.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/seoimg.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://amvstr.ml' },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/router' }, { src: '~/plugins/disqus' }],

  loading: {
    color: 'white',
    height: '1px',
  },

  loadingIndicator: {
    name: 'pulse',
    color: '#3B8070',
    background: '#191919',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
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
      author: 'amvstrm`s Teams',
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
      offlinePage: '/offline.html',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/.*\.googleapis\.com\/fonts\/.*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 3,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'kh',
        name: 'ភាសាខ្មែរ',
        iso: 'kh-KH',
        file: 'km.json',
      },
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
          success: colors.green.accent3,
          green: '#2EC947',
          red: '#C92E2E',
          blue: '#2E7FC9',
          yellow: '#DCD300',
          purple: '#602EC9',
          cyan: '#2EC9C0',
          grey: '#808080',
        },
      },
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
        },
      },
    },
    minimize: true,
  },
  webpack: {
    ignored: /node_modules/,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      vendor: true,
      styles: true,
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
