<template>
  <div class="bg-white rounded-2xl shadow p-4 flex flex-col">
    <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>

    <div v-if="filteredTasks.length === 0" class="text-gray-500 text-sm italic">
      No tasks here yet.
    </div>

    <div class="space-y-3">
      <TaskCard
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../../stores/task'
import TaskCard from './TaskCard.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const store = useTaskStore()

const filteredTasks = computed(() => {
  if (!props.status) return []
  return store.tasks.filter(
    t => t.status && t.status.toLowerCase() === props.status.toLowerCase()
  )
})
</script>
