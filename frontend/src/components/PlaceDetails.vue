<script setup lang="ts">
import type { Place } from "@/shared/types/place";

const props = defineProps<{
  place: Place;
}>();
</script>

<template>
  {{ place }}
</template>
