<script setup lang="ts">
import { onMounted } from "vue";

import "leaflet/dist/leaflet.css";
import L, { type LatLngExpression } from "leaflet";

// ! https://wiki.openstreetmap.org/wiki/DE:OpenStreetMap_benutzen (Lizenz und Sicherheitshinweis)
const HAMBURG_CENTER: LatLngExpression = [53.551086, 9.993682];

onMounted(() => {
  const map = L.map("map", {
    center: HAMBURG_CENTER,
    zoom: 12,
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
