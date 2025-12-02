<template>
  <form @submit.prevent="submitTask" class="mb-3 d-flex">
    <input v-model="title" class="form-control me-2" placeholder="New task..." />
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/tasks'

const store = useTaskStore()
const title = ref('')

const submitTask = () => {
  if (!title.value.trim()) return
  store.addTask(title.value)
  title.value = ''
}
</script>
