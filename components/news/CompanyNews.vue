<template>
  <div class="bg-white rounded-xl shadow p-4 flex flex-col">
    <h2 class="text-xl font-semibold mb-4">Company News</h2>

    <div v-if="news.length === 0" class="text-gray-500 text-sm italic">
      No news available.
    </div>

    <div class="space-y-3">
      <div
        v-for="item in news"
        :key="item.id"
        class="p-3 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors"
      >
        <p class="font-medium text-gray-800 truncate">{{ item.title }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ item.date }}</p>
        <p class="text-gray-700 mt-1 text-sm">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Fake news data
const news = ref([
  {
    id: 1,
    title: "Quarterly Earnings Released",
    date: "2025-12-03",
    content: "The company has released its quarterly earnings report with a 12% increase in revenue."
  },
  {
    id: 2,
    title: "New Office Opening",
    date: "2025-12-01",
    content: "We are excited to announce the opening of our new branch office in Kuala Lumpur."
  },
  {
    id: 3,
    title: "Product Launch",
    date: "2025-11-28",
    content: "Our latest product has officially launched, bringing innovative features to our customers."
  }
])
</script>

<style scoped>
</style>
