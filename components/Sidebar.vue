<template>
  <aside
    class="w-64 bg-white border-r border-gray-200 p-5 flex flex-col space-y-6 shadow-sm"
  >
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 bg-indigo-500 rounded-xl"></div>
      <h1 class="text-xl font-semibold">Taskly</h1>
    </div>

    <div>
      <p class="text-xs text-gray-500 mb-2">MAIN MENU</p>

      <SidebarLink
        v-for="link in mainLinks"
        :key="link.name"
        :name="link.name"
        :icon="link.icon"
        :to="link.path"
      />
    </div>

    <!-- LISTS -->
    <div>
      <div class="flex items-center justify-between mb-2">
        <p class="text-xs text-gray-500">LISTS</p>
        <button class="text-xl leading-none">+</button>
      </div>

      <SidebarLink
        v-for="link in listLinks"
        :key="link.name"
        :name="link.name"
        :icon="link.icon"
        :to="link.path"
      />
    </div>

    <div class="mt-auto pt-4 border-t border-gray-200">
      <SidebarLink name="Settings" icon="settings" to="/settings" />
    </div>
  </aside>
</template>

<script setup>
import SidebarLink from "./SidebarLink.vue";
import { Home, Users, BarChart3, Folder, Settings } from "lucide-vue-next";

const mainLinks = [
  { name: "To-do", path: "/", icon: Home },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Leaderboard", path: "/leaderboard", icon: Users },
];

const listLinks = [
  { name: "Projects", path: "/projects", icon: Folder },
];
</script>
