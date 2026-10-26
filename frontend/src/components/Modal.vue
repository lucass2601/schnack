<script setup lang="ts">
const emit = defineEmits(["modalClose"]);

const handleModalClose = () => {
  emit("modalClose");
};
</script>

<template>
  <div
    class="modal fixed z-1000 bg-white left-0 top-0 w-dvw h-dvh md:left-6 md:top-1/2 md:-translate-y-1/2 md:h-4/5 md:w-100 md:rounded-3xl"
  >
    <header>
      <button @click="handleModalClose">Close</button>
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
