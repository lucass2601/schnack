import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import "@/main.css";

const app = createApp(App);
app.use(router).use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  license: import.meta.env.VITE_PRIME_VUE_LICENSE,
});
app.mount("#app");
