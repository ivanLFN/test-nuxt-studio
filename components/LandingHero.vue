<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <section class="flex flex-col sm:flex-row sm:items-center flex-col-reverse gap-4 py-8 sm:gap-12 sm:py-12">
    <div>
      <h1 class="text-5xl font-bold">
        <slot name="title" />
      </h1>
      <div class="text-base text-gray-600 dark:text-gray-300">
        <slot name="description" />
      </div>
    </div>
    <img :src="image" class="w-1/2 rounded-lg">
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 2rem 0;
}

@media (min-width: 640px) {
  section {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0;
  }
}

h1 {
  font-size: 3rem;
  font-weight: bold;
}

.text-base {
  font-size: 1.25rem; /* Increase the base text size */
}

img {
  width: 50%;
  border-radius: 0.5rem;
}
</style>
