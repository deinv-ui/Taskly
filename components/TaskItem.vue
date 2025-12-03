<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <input type="checkbox" :checked="task.status === 'Completed'" @change="toggleStatus" />
      <span :class="{ 'text-decoration-line-through': task.status === 'Completed' }">{{ task.title }}</span>
      <small class="text-muted ms-2">{{ formattedDate }}</small>
    </div>
    <button @click="deleteTask(task.id)" class="btn btn-sm btn-danger">Delete</button>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../stores/task'
import { formatGMT8 } from '../composables/useDateTime'

const props = defineProps({ task: Object })
const store = useTaskStore()

const formattedDate = computed(() => formatGMT8(props.task.createdAt))

const toggleStatus = () => {
  const newStatus = props.task.status === 'Completed' ? 'To-Do' : 'Completed'
  store.updateTask(props.task.id, { status: newStatus })
}

const deleteTask = (id) => store.deleteTask(id)
</script>
