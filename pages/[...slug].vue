<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { data: post } = await useAsyncData(() => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
</script>

<template>
  <div>
    <nuxt-link to="/">
      <small>« Back </small>
    </nuxt-link>
    <h1 v-if="post">{{ post.title }}</h1>
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>
