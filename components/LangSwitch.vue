<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-chip label v-bind="attrs" v-on="on"> {{ $t('langswtch')}} </v-chip>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'LangSwitch',
  data() {
    return {
      locales: [
        {
          code: 'en',
          name: 'English',
          emoji: '🇺🇸',
        },
        {
          code: 'kh',
          name: 'Khmer',
          emoji: '🇰🇭',
        },
      ],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
