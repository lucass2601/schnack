<script setup lang="ts">
import Button from "./base/Button.vue";

const emit = defineEmits(["modalClose"]);

const props = defineProps<{
  title: string;
}>();

const handleModalClose = () => {
  emit("modalClose");
};
</script>

<template>
  <div
    class="modal fixed z-1000 flex flex-col bg-white left-0 top-0 w-dvw h-dvh md:left-6 md:top-1/2 md:-translate-y-1/2 md:h-4/5 md:w-100 md:rounded-3xl"
  >
    <header class="flex p-4 justify-between">
      <h1>{{ title }}</h1>
      <Button @click="handleModalClose" label="&#10006;" />
    </header>
    <main class="p-4 break-all overflow-y-auto flex-1">
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
