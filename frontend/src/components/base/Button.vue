<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="hover:cursor-pointer">{{ label }}</button>
</template>
