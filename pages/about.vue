<script lang="ts" setup>

definePageMeta({
  layout: 'default'
})
const route = useRoute()

const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about')
  .path(route.path)
  .first()
})

</script>

<template>
  <main class="prose">
    <div v-if="page">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <ContentRenderer :value="page" />
    </div>

    <div v-else>
      <h1>Loading...</h1>
    </div>
  </main>
</template>

<style>
.prose {
  max-width: 65ch;
  margin: 0 auto;
  padding: 1rem;
}
</style>
