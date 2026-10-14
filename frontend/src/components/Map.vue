<script setup lang="ts">
import { onMounted } from "vue";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ! https://wiki.openstreetmap.org/wiki/DE:OpenStreetMap_benutzen (Lizenz und Sicherheitshinweis)

onMounted(() => {
  const map = L.map("map", {
    center: [51.505, -0.09],
    zoom: 10,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});
</script>

<template>
  <div id="map" style="height: 100dvh; width: 100dvw"></div>
</template>

<style lang="css" scoped></style>
