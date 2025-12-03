import { defineStore } from 'pinia'
import tasksJson from '../data/task.json' 

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref(
    tasksJson.map(t => ({
      ...t,
      createdAt: new Date(t.createdAt).toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })
    }))
  )

  const addTask = ({ title, description, status, priority }) => {
    tasks.value.push({
      id: Date.now(),
      title,
      description: description || '',
      status: status || 'Todo',
      priority: priority || 'Low',
      createdAt: new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })
    })
  }

  const markCompleted = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.status = 'Completed'
  }

  const moveToInProgress = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.status = 'In Progress'
  }

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return { tasks, addTask, markCompleted, moveToInProgress, deleteTask }
})
