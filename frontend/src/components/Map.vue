<script setup lang="ts">
import { computed, onMounted, shallowRef } from "vue";
import "leaflet/dist/leaflet.css";
import L, {
  type Map,
  type LatLngExpression,
  MarkerClusterGroup,
  CircleMarker,
} from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster";

import api from "@/services/api";

import type { Place } from "@/shared/types/place.ts";

import {
  useRoute,
  type RouteLocationNormalizedLoadedGeneric,
} from "vue-router";
import router from "@/router";

// ! https://wiki.openstreetmap.org/wiki/DE:OpenStreetMap_benutzen (Lizenz und Sicherheitshinweis)
const HAMBURG_CENTER: LatLngExpression = [53.551086, 9.993682];

const route: RouteLocationNormalizedLoadedGeneric = useRoute();

const places = shallowRef<Place[]>([]);
const map = shallowRef<Map>();
const markers = shallowRef<MarkerClusterGroup>(
  L.markerClusterGroup({
    chunkedLoading: true,
    maxClusterRadius: 100,
  }),
);

interface markerIdMapInterface {
  placeId: Place["id"];
  marker: CircleMarker;
}

const markerIdMap = shallowRef<markerIdMapInterface[]>([]);

const selectedPlaceId = computed<Place["id"] | null>(() => {
  if (!route.query.place) return null;

  return route.query.place.toString();
});

const selectPlace = (placeId: Place["id"]) => {
  if (!placeId) return;

  const findMarkerObj = markerIdMap.value.find(
    (marker) => marker.placeId === placeId,
  );

  if (!findMarkerObj) return;
  const marker: CircleMarker = findMarkerObj?.marker;
  if (marker instanceof CircleMarker)
    markers.value.zoomToShowLayer(marker, () => {
      map.value?.panTo(marker.getLatLng());
    });

  if (selectedPlaceId.value === placeId) return;
  router.push({ query: { place: placeId } });
};

const getPlaces = async () => {
  await api
    .get("/places")
    .then(({ data }) => {
      places.value = data.places;

      const markerArray = places.value.map((place) => {
        let marker = L.circleMarker([place.lat, place.lon]);
        markerIdMap.value.push({ placeId: place.id, marker });
        marker.addEventListener("click", () => selectPlace(place.id));
        return marker;
      });
      if (map.value) {
        markers.value.addLayers(markerArray);
        map.value.addLayer(markers.value);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(async () => {
  map.value = L.map("map", {
    center: HAMBURG_CENTER,
    zoom: 12,
    zoomControl: false,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  await getPlaces();

  if (selectedPlaceId.value) {
    const selectedPlace = places.value.find(
      (place) => place.id === selectedPlaceId.value,
    );

    if (selectedPlace) selectPlace(selectedPlace.id);
  }
});
</script>

<template>
  <div id="map" style="height: 100dvh; width: 100dvw"></div>
</template>

<style lang="css" scoped></style>
