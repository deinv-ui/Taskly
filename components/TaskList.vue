<template>
  <div>
    <h5>{{ status }}</h5>
    <ul class="list-group">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '@/stores/tasks'
import { computed } from 'vue'

const props = defineProps({ status: String })
const store = useTaskStore()
const tasks = computed(() => store.getTasksByStatus(props.status))
</script>
