// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(vuetify());
      });
    },
  ],
  runtimeConfig: {
    public: { 
      // @ts-ignore
      API_URL : process.env.API_URL,
      // @ts-ignore
      version : process.env.VERSION
    }
  }
});
