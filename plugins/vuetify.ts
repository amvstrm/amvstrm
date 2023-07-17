import { createVuetify } from "vuetify";
import { mdi, aliases as allAliases } from "vuetify/iconsets/mdi";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
const aliases = allAliases;

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "dark",
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
