<script setup lang="ts">
import type { Place } from "@/shared/types/place";

const EXCLUDED_KEYS = ["osmType"];

const props = defineProps<{
  place: Place;
}>();
</script>

<template>
  <div v-for="(placeVal, placeKey, placeIndex) in place" :key="placeIndex">
    <div
      v-if="typeof placeVal === 'string' && !EXCLUDED_KEYS.includes(placeKey)"
      class="my-3"
    >
      <b>{{ placeKey }}</b>
      <p>{{ placeVal }}</p>
    </div>
  </div>
</template>
