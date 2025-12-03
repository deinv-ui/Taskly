<template>
  <div class="h-screen w-full bg-gray-100 text-gray-800 flex">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader />

      <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskColumn title="To-Do" status="Todo" />

            <TaskColumn title="In Progress" status="In Progress" />

            <TaskColumn title="Completed" status="Completed" />
          </div>

          <div class="lg:col-span-1">
            <CompanyNews />
          </div>
        </div>

        <button
          @click="openCreateTask = true"
          class="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg"
        >
          + New Task
        </button>

        <CreateTaskModal
          v-if="openCreateTask"
          @close="openCreateTask = false"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import DashboardHeader from "../components/DashboardHeader.vue";
import TaskColumn from "../components/tasks/TaskColumn.vue";
import CompanyNews from "../components/news/CompanyNews.vue";
import CreateTaskModal from "../components/tasks/TaskModal.vue";

const openCreateTask = ref(false);
</script>
