<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon class="mr-2" icon="mdi-chat" />
        Comments
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="my-2">
          <DisqusComments :identifier="/\/pwa\.*/.test(useRoute().path) ? useRoute().fullPath.replace(/\/pwa\//, '') : useRoute().fullPath" />
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
