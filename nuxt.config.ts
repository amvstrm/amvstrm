export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - amvstrm",
      title: "amvstrm",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "amvstrm - A streaming service for weebo...",
        },
        {
          name: "keywords",
          content:
            "amvstrm, amvstr, amvstreaming, anime streaming site, anime, free anime",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/" },
        { property: "og:title", content: "Home - amvstrm" },
        {
          property: "og:description",
          content: "amvstrm - A streaming service for weebo...",
        },
        {
          property: "og:image",
          content: "/banner.png",
        },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "/" },
        { property: "twitter:title", content: "Home - amvstrm" },
        {
          property: "twitter:description",
          content: "amvstrm - A streaming service for weebo...",
        },
        {
          property: "twitter:image",
          content: "/banner.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "manifest",
          type: "application/json",
          href: "/manifest.webmanifest",
        },
      ],
    },
  },
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },

  vuetify:{
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark"
      }
    }
  },

  routeRules: {
    "/": { static: true, ssr: true, swr: true },
    "/search": { static: true },
    "/anime/**": {
      swr: true,
      ssr: true,
    },
    "/watch/**": { swr: true, ssr: false },
    "/download/**": { static: true, ssr: false },
    "/bookmarks": { static: true, ssr: false, prerender: true },
    "/pwa": { static: true, ssr: false },
    "/pwa/bookmark": { static: true, ssr: false },
    "/pwa/search": { static: true, ssr: false },
    "/pwa/anime/**": { static: true, ssr: false },
    "/pwa/watch/**": { static: true, ssr: false },
    "/privacy": { static: true, ssr: false, prerender: true },
    "/about": { static: true, ssr: false, prerender: true },
    "/dmca": { static: true, ssr: false, prerender: true },
    "/manifest.webmanifest": {
      headers: {
        "Content-Type": "application/manifest+json",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    },
    "/api/saveToDB": {
      cors: true,
    },
    "/api/getData": {
      cors: true
    }
  },

  css: ["~/assets/style.css"],

  modules: [
    "@nuxtjs/eslint-module",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "nuxt-disqus",
    "vuetify-nuxt-module",
    "@nuxt/image",
  ],
  disqus: {
    shortname: process.env.DISQUS_ID,
  },
  pwa: {
    registerType: "autoUpdate",
    strategies: "generateSW",
    includeAssets: [
      "favicon.ico",
      "manifest.webmanifest",
      "logo.png",
      "icon.png",
    ],
    manifest: {
      name: "amvstrm",
      short_name: "amvstrm",
      start_url: "/pwa",
      display: "standalone",
      background_color: "#191919",
      lang: "en",
      scope: "/pwa",
      theme_color: "#202020",
      icons: [
        {
          src: "./pwa/icon/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./pwa/icon/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./pwa/icon/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./pwa/icon/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./pwa/icon/apple-touch-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "./pwa/icon/apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "./pwa/icon/apple-touch-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "./pwa/icon/apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "./pwa/icon/apple-touch-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "./pwa/icon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "./pwa/icon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "./pwa/icon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "./pwa/icon/msapplication-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "./pwa/icon/mstile-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
      ],
      description: "An anime streaming service for weebo",
      shortcuts: [
        {
          name: "Home",
          short_name: "Home",
          url: "/pwa",
          icons: [
            {
              src: "https://api.iconify.design/mdi:home.svg",
            },
          ],
        },
        {
          name: "Search",
          short_name: "Search Anime",
          url: "/pwa/search",
          icons: [
            {
              src: "https://api.iconify.design/mdi:magnify.svg",
            },
          ],
        },
        {
          name: "Bookmarker",
          short_name: "Your Bookmarked Anime",
          url: "/pwa/bookmarks",
          icons: [
            {
              src: "https://api.iconify.design/mdi:book.svg",
            },
          ],
        },
      ],
      dir: "ltr",
      orientation: "any",
      categories: ["entertainment"],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
    },
  },
  eslint: {
    emitWarning: false,
    ignore: true,
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "https://api.amvstr.me",
      version: process.env.VERSION || "v2",
      posthogPublicKey: process.env.POSTHOG_PK || "",
      posthogHost: process.env.POSTHOG_HOST || "https://app.posthog.com",
      disqus_id: process.env.DISQUS_ID,
    },
  },

  devtools: {
    enabled: true,
  },
});