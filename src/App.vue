<template>
  <v-app>
    <the-header />
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import { useDisplay } from "vuetify";
import TheHeader from "./components/TheHeader.vue";
import HelloWorld from "./components/HelloWorld.vue";

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
    HelloWorld
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
