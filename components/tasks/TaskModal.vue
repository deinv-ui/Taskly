<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
  >
    <div
      class="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl flex flex-col gap-6"
    >
      <h2 class="text-2xl font-bold text-gray-800">
        {{ isEdit ? 'Edit Task' : 'Create New Task' }}
      </h2>

      <div class="flex flex-col gap-4">
        <input
          v-model="localTask.title"
          type="text"
          placeholder="Task title"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
        />

        <textarea
          v-model="localTask.description"
          placeholder="Task description"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
          rows="4"
        ></textarea>

        <select
          v-if="isEdit"
          v-model="localTask.priority"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
        >
          <option v-for="p in priorityOptions" :key="p" :value="p">{{ p }}</option>
        </select>

        <select
          v-if="isEdit"
          v-model="localTask.status"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
        >
          <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <div class="flex justify-end gap-3">
        <button
          @click="$emit('close')"
          class="px-5 py-2 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          @click="save"
          class="px-5 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition flex items-center gap-2"
        >
          <span>{{ isEdit ? 'Save Changes' : 'Create Task' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, watch } from 'vue'
import { useTaskStore } from '../../stores/task'

const props = defineProps({
  task: { type: Object, default: null } 
})

const emit = defineEmits(['close'])
const store = useTaskStore()

const isEdit = !!props.task

const localTask = reactive({
  title: '',
  description: '',
  priority: 'Low',
  status: 'Todo',
  ...props.task
})

watch(() => props.task, (newTask) => {
  if (newTask) Object.assign(localTask, newTask)
})

const priorityOptions = ['High', 'Medium', 'Low']
const statuses = ['Todo', 'In Progress', 'Completed']

const save = () => {
  if (!localTask.title.trim()) return

  if (isEdit) {
    Object.assign(props.task, localTask)
  } else {
    store.addTask({
      title: localTask.title,
      description: localTask.description,
      createdAt: new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' }),
      status: 'Todo',
      priority: 'Low'
    })
  }

  emit('close')
}
</script>
