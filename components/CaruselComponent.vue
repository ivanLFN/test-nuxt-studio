<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { headerImages } from '~/utils/loadImages'

const items = ref(headerImages)

const activeIndex = ref(0)
let intervalId: number | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.value.length
  }, 4000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex transition-transform duration-1000"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div v-for="(item, index) in items" :key="index" class="w-full flex-shrink-0">
        <img :src="item" class="w-full h-100" />
      </div>
    </div>
  </div>
</template>