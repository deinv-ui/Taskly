import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([])

  const loadTasks = async () => {
    const res = await fetch('/tasks.json')
    tasks.value = await res.json()
  }

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: 'To-Do',
      createdAt: new Date().toISOString()
    }
    tasks.value.push(newTask)
  }

  const updateTask = (id, updates) => {
    const index = tasks.value.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates }
    }
  }

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  const getTasksByStatus = (status) => tasks.value.filter(t => t.status === status)

  return { tasks, loadTasks, addTask, updateTask, deleteTask, getTasksByStatus }
})
