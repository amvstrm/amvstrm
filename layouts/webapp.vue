<template>
  <v-app>
    <v-app-bar absolute="">
      <v-breadcrumbs :items="breadcrumbs">
        <template #prepend>
          <v-icon class="mr-1 d-flex" size="small" icon="mdi-home"></v-icon>
        </template>
        <template #item="{ item }">
          <v-breadcrumbs-item
            :class="shouldDisableLink(item.link) ? '' : 'truncated'"
            :to="item.link"
            :disabled="shouldDisableLink(item.link)"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-app-bar>
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
      <v-btn to="/pwa/bookmarks" value="bookmark">
        <v-icon>mdi-book</v-icon>
        Bookmarker
      </v-btn>
      <v-btn to="/pwa/more" value="about">
        <v-icon>mdi-menu</v-icon>
        More
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script setup>
const route = useRoute();

function generateBreadcrumbs(route) {
  const breadcrumbs = [];
  breadcrumbs.push({ text: "Home", link: "/pwa" });

  const pathSegments = route.path.slice(4).split("/");
  for (let i = 1; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    const text = segment.charAt(0).toUpperCase() + segment.slice(1);
    const link = `${pathSegments.slice(0, i + 1).join("/")}`;
    breadcrumbs.push({ text, link });
  }

  return breadcrumbs;
}

function shouldDisableLink(link) {
  const nonClickablePaths = [
    "/watch",
    "/anime",
    "/more",
    "/search",
    "/bookmarks",
  ];
  return nonClickablePaths.some((path) => link.startsWith(path));
}

const breadcrumbs = computed(() => generateBreadcrumbs(route));
</script>
<style>
.truncated {
  width: "180px";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .truncated {
    width: "250px";
  }
}

.v-breadcrumbs-item--disabled {
  opacity: 1 !important;
}
</style>
