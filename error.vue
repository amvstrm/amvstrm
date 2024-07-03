<template>
  <Html>
    <Head>
      <Title>
        {{ error.statusCode || 500 }}
      </Title>
    </Head>
  </Html>
  <NuxtLayout :name="/\/pwa\.*/.test(useRoute().path) ? 'webapp' : 'default'">
    <v-empty-state
      :headline="error.statusCode || '500'"
      title="Error"
      :text="error.message || 'Something went wrong'"
      image="/logo.png"
    ></v-empty-state>
  </NuxtLayout>
</template>
<script setup>
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object,
});
console.log(error);
</script>
<style>
.app-error-page {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
