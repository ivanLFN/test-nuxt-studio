<script lang="ts" setup>
import CaruselComponent from '~/components/CaruselComponent.vue';

definePageMeta({
  layout: 'default'
})

const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog')
    .select('title', 'description', 'path', 'id', 'date')
    .order('date', 'DESC')
    .all()
})

if (!posts.value) {
  console.error('No posts found')
}
</script>

<template>
  <div>
    <h1>Blog</h1>
    <p
      v-for="post in posts"
      :key="post.id"
      v-if="posts"
    >
      >
      <nuxt-link :to="post.path">
        <strong>{{ post.title }}</strong>
      </nuxt-link>

      &nbsp;{{ post.description }}
    </p>
    <CaruselComponent />
  </div>
</template>
