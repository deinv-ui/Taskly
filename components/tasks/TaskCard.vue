<template>
  <div v-if="task" class="relative">
    <div
      class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col gap-2 cursor-pointer"
      @click="showDetails = true"
    >
      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          class="accent-purple-600 w-5 h-5 cursor-pointer"
          :checked="task.status === 'Completed'"
          @click.stop="toggleComplete"
        />

        <p
          :class="[
            'flex-1 text-gray-800 font-medium truncate',
            task.status === 'Completed' ? 'line-through text-gray-400' : '',
          ]"
        >
          {{ task.title }}
        </p>

        <div class="relative" @click.stop>
          <span
            @click="showPriorityDropdown = !showPriorityDropdown"
            class="cursor-pointer text-xs font-medium px-2 py-1 rounded-full opacity-80"
            :class="priorityClass(task.priority)"
          >
            {{ task.priority || "Low" }}
            <ChevronDown class="inline w-3 h-3 ml-1" />
          </span>

          <div
            v-if="showPriorityDropdown"
            class="absolute right-0 mt-1 w-24 bg-white shadow-lg rounded border z-10"
          >
            <button
              v-for="p in priorityOptions"
              :key="p"
              @click="changePriority(p)"
              class="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
            >
              {{ p }}
            </button>
          </div>
        </div>

        <button
          @click.stop="toggleStatusDropdown"
          class="ml-2 text-gray-500 hover:text-gray-700"
        >
          <ChevronDown class="w-5 h-5" />
        </button>

        <button
          @click.stop="store.deleteTask(task.id)"
          class="ml-2 text-gray-700 hover:text-red-600"
        >
          <Trash2 class="w-5 h-5" />
        </button>
      </div>

      <p class="text-xs text-gray-400 italic mt-1">
        Created: {{ task.createdAt }}
      </p>
    </div>

    <div
      v-if="showDropdown"
      class="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded border z-10"
    >
      <button
        v-for="s in statuses"
        :key="s"
        @click="changeStatus(s)"
        class="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
      >
        {{ s }}
      </button>
    </div>

    <TaskModal v-if="showDetails" :task="task" @close="showDetails = false" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTaskStore } from "../../stores/task";
import { Trash2, ChevronDown } from "lucide-vue-next";
import TaskModal from "../../components/tasks/TaskModal.vue"
const store = useTaskStore();
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const showDropdown = ref(false);
const showPriorityDropdown = ref(false);
const showDetails = ref(false);
const statuses = ["Todo", "In Progress", "Completed"];
const priorityOptions = ["High", "Medium", "Low"];

const editableTask = reactive({ ...props.task });

const toggleComplete = () => {
  if (props.task.status === "completed") store.moveToInProgress(props.task.id);
  else store.markCompleted(props.task.id);
};

const toggleStatusDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const changeStatus = (status) => {
  showDropdown.value = false;
  if (status === "completed") store.markCompleted(props.task.id);
  else if (status === "inprogress") store.moveToInProgress(props.task.id);
  else props.task.status = status;
};

const changePriority = (priority) => {
  props.task.priority = priority;
  showPriorityDropdown.value = false;
};

const priorityClass = (priority) => {
  switch ((priority || "").toLowerCase()) {
    case "high":
      return "bg-red-200 text-red-800";
    case "medium":
      return "bg-yellow-200 text-yellow-800";
    case "low":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

</script>
