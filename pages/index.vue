<template>
  <div class="min-h-screen flex  text-gray-200">
  <TaskList />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  ArrowLeftToLine,
  Menu,
} from "lucide-vue-next";
import TaskList from "~/components/TaskList.vue";

const route = useRoute();
const collapsed = ref(false);

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Users", path: "/users", icon: Users },
  { name: "Stock", path: "/stock", icon: BarChart3 },
];

const isActive = (path) => route.path === path;
</script>

<style scoped>
a {
  transition: background 0.25s ease, color 0.25s ease;
}
</style>