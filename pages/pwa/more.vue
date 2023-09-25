<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-container>
    <v-breadcrumbs style="padding: 0; margin-bottom: 1rem">
      <template #prepend>
        <v-icon size="small" icon="mdi-home"></v-icon>
      </template>
      <v-breadcrumbs-item title="Home" to="/pwa" />
      <v-breadcrumbs-divider />
      <v-breadcrumbs-item title="More" />
    </v-breadcrumbs>
    <div class="pb-4">
      <h1>More</h1>
    </div>
    <v-list lines="two">
      <v-list-item title="amvstrm's PWA mode" subtitle="Version amvN3 (Nuxt 3)">
        <template #prepend>
          <img
            src="/icon.png"
            style="display: flex; width: 100px; height: 100%"
          />
        </template>
      </v-list-item>
      <v-list-item
        title="amvstrm"
        :subtitle="new Date().getFullYear() + ' © amvstrm'"
      />
    </v-list>
    <v-divider class="my-4"></v-divider>
    <v-list lines="two">
      <v-list-item title="Web Mode" append-icon="mdi-web" to="/"></v-list-item>
      <v-list-item title="About us" target="blank" href="/about" />
      <v-list-item title="Privacy Policy" target="blank" href="/privacy" />
      <v-list-item
        title="Help"
        target="blank"
        href="https://docs.amvstr.ml/help"
      >
        <template #append>
          <v-icon icon="mdi-help" />
        </template>
      </v-list-item>
      <v-list-item
        title="Github"
        target="blank"
        href="https://github.com/amvstrm/amvstrm"
      >
        <template #append>
          <v-icon icon="mdi-github" />
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>
