<template>
  <RouterLink
    :to="to"
    class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all text-gray-700"
    :class="{ 'bg-gray-100 font-semibold': isActive }"
  >
    <component :is="icon" class="w-5 h-5" />
    <span>{{ name }}</span>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  name: String,
  icon: [String, Object],
  to: String,
});

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>
