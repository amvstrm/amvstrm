// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

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
            "amvstrm, amvstr, amv streaming, anime streaming site, anime, free anime",
        },
      ],
      link: [
        {
          rel: "manifest",
          type: "application/json",
          href: "/manifest.json",
        },
      ],
    },
  },
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/style.css"],
  modules: [
    "@nuxtjs/eslint-module",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(vuetify());
      });
    },
  ],
  pwa: {
    registerType: "autoUpdate",
    strategies: "generateSW",
    includeAssets: ["favicon.ico", "manifest.json"],
    manifest: {
      name: "amvstrm",
      short_name: "amvstrm",
      theme_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: "/android/android-launchericon-512-512.png",
          sizes: "512x512",
        },
        {
          src: "/android/android-launchericon-192-192.png",
          sizes: "192x192",
        },
        {
          src: "/android/android-launchericon-144-144.png",
          sizes: "144x144",
        },
        {
          src: "/android/android-launchericon-96-96.png",
          sizes: "96x96",
        },
        {
          src: "/android/android-launchericon-72-72.png",
          sizes: "72x72",
        },
        {
          src: "/android/android-launchericon-48-48.png",
          sizes: "48x48",
        },
        {
          src: "/ios/16.png",
          sizes: "16x16",
        },
        {
          src: "/ios/20.png",
          sizes: "20x20",
        },
        {
          src: "/ios/29.png",
          sizes: "29x29",
        },
        {
          src: "/ios/32.png",
          sizes: "32x32",
        },
        {
          src: "/ios/40.png",
          sizes: "40x40",
        },
        {
          src: "/ios/50.png",
          sizes: "50x50",
        },
        {
          src: "/ios/57.png",
          sizes: "57x57",
        },
        {
          src: "/ios/58.png",
          sizes: "58x58",
        },
        {
          src: "/ios/60.png",
          sizes: "60x60",
        },
        {
          src: "/ios/64.png",
          sizes: "64x64",
        },
        {
          src: "/ios/72.png",
          sizes: "72x72",
        },
        {
          src: "/ios/76.png",
          sizes: "76x76",
        },
        {
          src: "/ios/80.png",
          sizes: "80x80",
        },
        {
          src: "/ios/87.png",
          sizes: "87x87",
        },
        {
          src: "/ios/100.png",
          sizes: "100x100",
        },
        {
          src: "/ios/114.png",
          sizes: "114x114",
        },
        {
          src: "/ios/120.png",
          sizes: "120x120",
        },
        {
          src: "/ios/128.png",
          sizes: "128x128",
        },
        {
          src: "/ios/144.png",
          sizes: "144x144",
        },
        {
          src: "/ios/152.png",
          sizes: "152x152",
        },
        {
          src: "/ios/167.png",
          sizes: "167x167",
        },
        {
          src: "/ios/180.png",
          sizes: "180x180",
        },
        {
          src: "/ios/192.png",
          sizes: "192x192",
        },
        {
          src: "/ios/256.png",
          sizes: "256x256",
        },
        {
          src: "/ios/512.png",
          sizes: "512x512",
        },
        {
          src: "/ios/1024.png",
          sizes: "1024x1024",
        },
      ],
      background_color: "#191919",
      description: "An anime streaming service for weebo",
      dir: "ltr",
      orientation: "any",
      scope: "/",
      start_url: "/",
      categories: ["entertainment"],
      shortcuts: [
        {
          name: "amvstrm's Homepage",
          url: "/",
          short_name: "Home",
          icons: [
            {
              src: "/android/android-launchericon-512-512.png",
              sizes: "512x512",
            },
            {
              src: "/android/android-launchericon-192-192.png",
              sizes: "192x192",
            },
          ],
        },
      ],
      lang: "en",
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "NetworkFirst",
          options: {
            cacheName: "https-calls",
            networkTimeoutSeconds: 20,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 15 * 24 * 60 * 60,
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
    emitWarning: false
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'https://new-api.amvstr.ml',
      version: process.env.VERSION || 'v2',
    },
    DETA_BASE_KEY: process.env.DETA_BASE_KEY,
  },
});
