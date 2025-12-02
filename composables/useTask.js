import { ref } from 'vue'

export const useTasks = () => {
  const tasks = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchTasks = async () => {
    loading.value = true
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      tasks.value = await res.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  const addTask = async (title) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false })
      })
      const newTask = await res.json()
      tasks.value.push(newTask)
    } catch (e) {
      error.value = e
    }
  }

  const deleteTask = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
      tasks.value = tasks.value.filter(task => task.id !== id)
    } catch (e) {
      error.value = e
    }
  }

  const toggleTask = async (task) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...task, completed: !task.completed })
      })
      const updatedTask = await res.json()
      const index = tasks.value.findIndex(t => t.id === task.id)
      tasks.value[index] = updatedTask
    } catch (e) {
      error.value = e
    }
  }

  return { tasks, loading, error, fetchTasks, addTask, deleteTask, toggleTask }
}
