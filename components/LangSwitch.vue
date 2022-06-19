<template>
  <div>{{ $t("langswtch") }} :
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "LangSwitch",
  data() {
    return {
      locales: [
        {
          code: "en",
          name: "English",
          emoji: "🇺🇸",
        },
        {
          code: "kh",
          name: "Khmer",
          emoji: "🇰🇭",
        },
      ],
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
