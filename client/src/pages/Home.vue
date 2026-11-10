<script lang="ts" setup>
import Map from "@/components/Map.vue";
import Modal from "@/components/Modal.vue";
import PlaceDetails from "@/components/PlaceDetails.vue";
import api from "@/services/api";
import type { Place } from "@/shared/types/place";
import { computed, onMounted, ref, watch } from "vue";

import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const selectedPlace = ref<Place>();

const hasRoute = computed(() => {
  return route.query.place && route.query.place.toString().trim().length > 0;
});

const placeId = computed(() => {
  return route.query.place;
});

const dismissPlace = () => {
  const routeWithoutPlaces = Object.keys(route.query)
    .filter((key) => !key.includes("place"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: route.query[key] });
    }, {});

  router.replace({ query: Object.assign(routeWithoutPlaces) });
};

const getPlace = async () => {
  await api
    .get(`/places/${placeId.value}`)
    .then(({ data }) => {
      selectedPlace.value = data.place;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  if (hasRoute.value) {
    getPlace();
  }
});

watch(
  () => route.query.place,
  () => {
    if (hasRoute.value) {
      getPlace();
    }
  },
);
</script>

<template>
  <Map />
  <Modal
    v-if="hasRoute && selectedPlace"
    @modalClose="dismissPlace"
    :title="selectedPlace.name"
  >
    <PlaceDetails v-if="selectedPlace" :place="selectedPlace" />
  </Modal>
</template>
