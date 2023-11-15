<template>
  <v-app>
    <the-header />
    <v-main>
      <home />
      <CenterText title="Nosotros" />
      <v-container fluid>
        <Features />
      </v-container>
      <CenterText title="Nuestros Servicios" />
      <Services />
    </v-main>
    <Footers />
  </v-app>
</template>

<script>
import { useDisplay } from "vuetify";
import TheHeader from "./components/TheHeader.vue";
import home from "./components/Home.vue";
import Features from "./components/Features.vue";
import Footers from "./components/Footer.vue";
import CenterText from "./components/CenterText.vue";
import Services from "./components/Services.vue";

export default {
  name: 'App',
  provide() {
    const { mobile } = useDisplay();
    return {
      isMobile: mobile.value,
    };
  },

  components: {
    TheHeader,
    home,
    Features,
    Footers,
    CenterText,
    Services,
    Services
  }
}
</script>

<style>
/* Set the style for the entire scrollbar */
::-webkit-scrollbar {
  width: 5px;
  /* width of the scrollbar */
}

/* Set the style for the thumb (the part that you drag) */
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  /* color of the thumb */
  border-radius: 5px;
  /* round the corners of the thumb */
}

/* Set the style for the track (the area behind the thumb) */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* color of the track */
}
</style>
