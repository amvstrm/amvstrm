<script setup></script>
<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
    <v-bottom-navigation :elevation="8" grow>
      <v-btn to="/pwa" value="home">
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>

      <v-btn to="/pwa/search" value="search">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>

      <v-btn to="/pwa/more" value="about">
        <v-icon>mdi-menu</v-icon>
        More
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
